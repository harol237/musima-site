import site from '../../src/data/site.json';
import {
  LIMITES, aportes, busquedas, estProfil, textes,
  type Aporte, type Busqueda, type Origine, type Profil,
} from '../../src/i18n/ecosysteme';
import { langues, type Langue } from '../../src/i18n/config';

/* ==================================================================
   /api/ecosistema — le formulaire de la page de l'écosystème
   ------------------------------------------------------------------
   Même architecture que /api/contact : le navigateur ne parle qu'à
   musima.org, c'est cette Function qui parle à Brevo.

   Ordre des opérations :
     1. enregistrement du contact dans la liste de l'écosystème, avec
        un attribut par réponse — c'est la finalité du formulaire ;
     2. notification à MUSIMA, avec tous les champs ;
     3. accusé de réception dans la langue de la page.
   Seul un échec de l'étape 1 est signalé au visiteur : c'est elle qui
   décide s'il fait partie de l'écosystème ou non.
   ================================================================== */

interface Env {
  BREVO_API_KEY: string;
  /** Identifiant de la liste « Ecosistema ». Sans lui, rien n'est
      enregistré et le visiteur reçoit une erreur : ce formulaire n'a pas
      d'autre finalité que cet enregistrement. */
  BREVO_LISTE_ECOSISTEMA?: string;
  BREVO_API_BASE?: string;
}

const EXPEDITEUR = { name: 'MUSIMA', email: 'no-reply@musima.org' };
const DESTINATION = site.contact.email;
const LOGO = 'https://musima.org/logo-musima.png';
const BREVO_DEFAUT = 'https://api.brevo.com/v3';

type Charge = {
  prenom: string; nom: string; email: string; telephone: string;
  perfil: string; aporta: string[]; busca: string[];
  proyecto: string; enlaces: string;
  consentement: boolean; langue: string; origen: string;
  delai?: number;
  site?: string;
};

const TAILLE_MAX = 16_000;
const DELAI_MIN = 3000;

const propre = (v: unknown) => (typeof v === 'string' ? v.trim() : '');
const liste = (v: unknown, admis: readonly string[]) =>
  Array.isArray(v) ? [...new Set(v.filter((x): x is string => typeof x === 'string' && admis.includes(x)))] : [];

const emailValide = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const telValide = (v: string) => /^[+()\d][\d\s().-]{5,}$/.test(v);

function journaliser(motif: string, request: Request, extra: Record<string, unknown> = {}) {
  console.log(JSON.stringify({
    rejet: motif,
    ip: request.headers.get('cf-connecting-ip') ?? '?',
    pays: (request as { cf?: { country?: string } }).cf?.country ?? '?',
    ua: (request.headers.get('user-agent') ?? '').slice(0, 120),
    quand: new Date().toISOString(),
    ...extra,
  }));
}

const echapper = (v: string) =>
  v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

async function brevo(base: string, chemin: string, cle: string, corps: unknown) {
  const r = await fetch(`${base}${chemin}`, {
    method: 'POST',
    headers: { 'api-key': cle, 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify(corps),
  });
  if (r.ok) return { ok: true as const };
  return { ok: false as const, statut: r.status, detail: (await r.text()).slice(0, 300) };
}

/* ---------------- Récapitulatif des réponses, en clair ---------------- */

function recapitulatif(c: Charge, langue: Langue) {
  const t = textes[langue];
  const lignes: [string, string][] = [
    [t.labelProfil, t.profil[c.perfil as Profil]],
  ];
  if (c.aporta.length) lignes.push([t.labelAporta, c.aporta.map((a) => t.aporta[a as Aporte]).join(' · ')]);
  if (c.busca.length) lignes.push([t.labelBusca, c.busca.map((b) => t.busca[b as Busqueda]).join(' · ')]);
  if (c.proyecto) lignes.push([t.labelProyecto, c.proyecto]);
  if (c.enlaces) lignes.push([t.labelEnlaces, c.enlaces]);
  return lignes;
}

/* ---------------- Accusé de réception ---------------- */

function accuseHtml(c: Charge, langue: Langue) {
  const t = textes[langue];
  const bloc = (titre: string, valeur: string) =>
    `<tr><td style="padding:2px 0;color:#5a7080;font:13px/1.5 Arial,sans-serif">${echapper(titre)}</td></tr>
     <tr><td style="padding:0 0 12px;color:#12303f;font:15px/1.6 Arial,sans-serif">${echapper(valeur)}</td></tr>`;
  return `<!doctype html><html lang="${langue}"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width"><title>${echapper(t.courrielObjet)}</title></head>
<body style="margin:0;padding:0;background:#f3f1ec">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f1ec">
<tr><td align="center" style="padding:32px 16px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fbfaf8;border:1px solid #ded8ce;border-radius:14px">
    <tr><td style="padding:28px 28px 8px">
      <img src="${LOGO}" width="150" height="45" alt="MUSIMA" style="display:block;border:0;width:150px;height:auto">
    </td></tr>
    <tr><td style="padding:12px 28px 0;color:#12303f;font:16px/1.6 Arial,sans-serif">${echapper(t.courrielBonjour(c.prenom))}</td></tr>
    <tr><td style="padding:12px 28px 0;color:#12303f;font:16px/1.65 Arial,sans-serif">${echapper(t.courrielRecu)}</td></tr>
    <tr><td style="padding:12px 28px 0;color:#12303f;font:16px/1.65 Arial,sans-serif">${echapper(t.courrielSuite)}</td></tr>
    <tr><td style="padding:20px 28px 0">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #ded8ce;padding-top:16px">
        <tr><td style="padding-top:16px;color:#5a7080;font:600 12px/1.4 Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase">${echapper(t.courrielRecapTitre)}</td></tr>
      </table>
    </td></tr>
    <tr><td style="padding:12px 28px 0">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${recapitulatif(c, langue).map(([k, v]) => bloc(k, v)).join('')}
      </table>
    </td></tr>
    <tr><td style="padding:8px 28px 28px;color:#12303f;font:600 16px/1.6 Arial,sans-serif">${echapper(t.courrielSignature)}</td></tr>
  </table>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px">
    <tr><td align="center" style="padding:16px 8px;color:#5a7080;font:12px/1.5 Arial,sans-serif">musima.org</td></tr>
  </table>
</td></tr></table></body></html>`;
}

function accuseTexte(c: Charge, langue: Langue) {
  const t = textes[langue];
  return [
    'MUSIMA', '',
    t.courrielBonjour(c.prenom), '',
    t.courrielRecu, '',
    t.courrielSuite, '',
    t.courrielRecapTitre,
    ...recapitulatif(c, langue).map(([k, v]) => `${k} : ${v}`),
    '',
    t.courrielSignature,
    'musima.org',
  ].join('\n');
}

/* ---------------- Notification à MUSIMA ---------------- */

function notification(c: Charge, langue: Langue, contactEnregistre: string) {
  const t = textes[langue];
  const l = (k: string, v: string) =>
    `<tr><td style="padding:4px 12px 4px 0;color:#5a7080;font:13px/1.5 Arial,sans-serif;vertical-align:top;white-space:nowrap">${echapper(k)}</td>
     <td style="padding:4px 0;color:#12303f;font:15px/1.6 Arial,sans-serif">${echapper(v) || '—'}</td></tr>`;
  return `<!doctype html><html><head><meta charset="utf-8"></head><body style="margin:0;background:#f3f1ec">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:24px 16px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;background:#fff;border:1px solid #ded8ce;border-radius:12px">
<tr><td style="padding:22px 24px">
  <p style="margin:0 0 16px;color:#12303f;font:600 17px/1.4 Arial,sans-serif">Ecosistema — ${echapper(`${c.prenom} ${c.nom}`)}</p>
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
    ${l('Prénom', c.prenom)}${l('Nom', c.nom)}${l('E-mail', c.email)}${l('Téléphone', c.telephone)}
    ${l('Profil', `${t.profil[c.perfil as Profil]} (${c.perfil})`)}
    ${l('Apporte', c.aporta.join(', '))}${l('Cherche', c.busca.join(', '))}
    ${l('Projet / organisation', c.proyecto)}${l('Liens', c.enlaces)}
    ${l('Origine', c.origen)}${l('Langue', langue)}
    ${l('Reçu le', new Date().toISOString())}
    ${l('Brevo', contactEnregistre)}
  </table>
</td></tr></table></td></tr></table></body></html>`;
}

/* ---------------- Route ---------------- */

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const repondre = (corps: object, statut = 200) =>
    new Response(JSON.stringify(corps), {
      status: statut,
      headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
    });

  let brut: Charge;
  try {
    const texte = await request.text();
    if (texte.length > TAILLE_MAX) {
      journaliser('taille', request, { octets: texte.length });
      return repondre({ ok: false, erreur: 'requete' }, 413);
    }
    brut = JSON.parse(texte) as Charge;
    if (typeof brut !== 'object' || brut === null) throw new Error('forme');
  } catch {
    journaliser('json', request);
    return repondre({ ok: false, erreur: 'requete' }, 400);
  }

  /* Champ piège rempli, ou envoi trop rapide : on répond comme si tout
     allait bien, et rien ne part. Un robot qui reçoit un succès ne
     revient pas. */
  if (propre(brut.site)) {
    journaliser('piege', request);
    return repondre({ ok: true, accuse: false });
  }
  const delai = typeof brut.delai === 'number' ? brut.delai : -1;
  if (delai < DELAI_MIN) {
    journaliser('delai', request, { delai });
    return repondre({ ok: true, accuse: false });
  }

  const langue: Langue = (langues as readonly string[]).includes(brut.langue)
    ? (brut.langue as Langue) : 'es';
  const t = textes[langue];
  const origen: Origine = brut.origen === 'qr' ? 'qr' : 'web';

  const c: Charge = {
    prenom: propre(brut.prenom),
    nom: propre(brut.nom),
    email: propre(brut.email),
    telephone: propre(brut.telephone),
    perfil: propre(brut.perfil),
    aporta: liste(brut.aporta, aportes),
    busca: liste(brut.busca, busquedas),
    proyecto: propre(brut.proyecto),
    enlaces: propre(brut.enlaces),
    consentement: brut.consentement === true,
    langue,
    origen,
  };

  /* Mêmes règles que côté client, refaites ici. */
  const champs: Record<string, string> = {};
  const trop: string[] = [];
  for (const [nom, max] of Object.entries(LIMITES)) {
    const valeur = (c as unknown as Record<string, unknown>)[nom];
    if (typeof valeur === 'string' && valeur.length > max) {
      champs[nom] = t.erreurChamp.trop.replace('{max}', String(max));
      trop.push(nom);
    }
  }
  if (!c.prenom) champs.prenom ??= t.erreurChamp.requis;
  if (!c.nom) champs.nom ??= t.erreurChamp.requis;
  if (!c.email) champs.email ??= t.erreurChamp.requis;
  else if (!emailValide(c.email)) champs.email ??= t.erreurChamp.email;
  if (c.telephone && !telValide(c.telephone)) champs.telephone ??= t.erreurChamp.telephone;
  if (!estProfil(c.perfil)) champs.perfil ??= t.erreurChamp.requis;
  if (!c.consentement) champs.consentement ??= t.erreurChamp.requis;
  if (Object.keys(champs).length) {
    journaliser('champs', request, { champs: Object.keys(champs), trop });
    return repondre({ ok: false, erreur: 'champs', champs }, 422);
  }

  const cle = env.BREVO_API_KEY;
  const base = env.BREVO_API_BASE || BREVO_DEFAUT;
  const listeId = Number(env.BREVO_LISTE_ECOSISTEMA);
  if (!cle || !listeId) {
    journaliser('configuration', request, { manque: !cle ? 'BREVO_API_KEY' : 'BREVO_LISTE_ECOSISTEMA' });
    return repondre({ ok: false, erreur: 'configuration' }, 500);
  }

  /* 1. Enregistrement dans la liste de l'écosystème. Un attribut booléen
        par case, pour que la base reste interrogeable ; les cases non
        cochées sont écrites à faux, pas laissées vides, pour qu'une
        personne qui revient sur ses choix voie l'ancien effacé. */
  const attributs: Record<string, string | boolean> = {
    NOMBRE: c.prenom, APELLIDOS: c.nom, TELEFONO: c.telephone, IDIOMA: langue,
    PERFIL: c.perfil, PROYECTO: c.proyecto, ENLACES: c.enlaces, ORIGEN: origen,
  };
  for (const a of aportes) attributs[`APORTA_${a.toUpperCase()}`] = c.aporta.includes(a);
  for (const b of busquedas) attributs[`BUSCA_${b.toUpperCase()}`] = c.busca.includes(b);

  const enregistrement = await brevo(base, '/contacts', cle, {
    email: c.email,
    updateEnabled: true,
    listIds: [listeId],
    attributes: attributs,
  });
  if (!enregistrement.ok) {
    /* Le détail va dans les journaux, jamais dans la réponse. */
    journaliser('brevo-contact', request, { statut: enregistrement.statut, detail: enregistrement.detail });
    return repondre({ ok: false, erreur: 'envoi' }, 502);
  }
  const contactEnregistre = `enregistré — liste ${listeId}`;

  /* 2. Notification à MUSIMA, avec tous les champs. Son échec est
        journalisé mais ne remet pas en cause l'enregistrement. */
  const envoi = await brevo(base, '/smtp/email', cle, {
    sender: EXPEDITEUR,
    to: [{ email: DESTINATION }],
    replyTo: { email: c.email, name: `${c.prenom} ${c.nom}`.trim() },
    subject: `[${langue}] Ecosistema — ${c.prenom} ${c.nom}`.slice(0, 200),
    htmlContent: notification(c, langue, contactEnregistre),
  });
  if (!envoi.ok) journaliser('brevo-envoi', request, { statut: envoi.statut, detail: envoi.detail });

  /* 3. Accusé de réception, dans la langue de la page. */
  const accuse = await brevo(base, '/smtp/email', cle, {
    sender: EXPEDITEUR,
    to: [{ email: c.email, name: `${c.prenom} ${c.nom}`.trim() }],
    replyTo: { email: DESTINATION, name: 'MUSIMA' },
    subject: t.courrielObjet,
    htmlContent: accuseHtml(c, langue),
    textContent: accuseTexte(c, langue),
  });
  if (!accuse.ok) journaliser('brevo-accuse', request, { statut: accuse.statut, detail: accuse.detail });

  return repondre({ ok: true, accuse: accuse.ok });
};
