import site from '../../src/data/site.json';
import { estMotif, libelleMotif, textes, type Motif } from '../../src/i18n/formulaire';
import { langues, type Langue } from '../../src/i18n/config';

/* ==================================================================
   FORMULAIRE DE CONTACT — ENVOI CÔTÉ SERVEUR
   ------------------------------------------------------------------
   Cloudflare Pages sert ce fichier à /api/contact. Il est le seul à
   parler à Brevo : le navigateur, lui, ne contacte que musima.org.
   C'est ce qui permet à la page /cookies de continuer à affirmer
   qu'aucun domaine tiers n'est appelé — et cette affirmation ne tient
   que tant que rien de tiers n'est ajouté côté client.

   Ordre des opérations, choisi pour que rien d'important ne se perde :
     1. enregistrement du contact, si la personne l'a demandé
     2. notification à MUSIMA — elle emporte le résultat de l'étape 1,
        donc un échec d'enregistrement est visible et rattrapable
     3. accusé de réception au visiteur
   Seul un échec de l'étape 2 est signalé comme un échec au visiteur :
   c'est la seule qui décide si le message est arrivé quelque part.
   ================================================================== */

interface Env {
  BREVO_API_KEY: string;
  /** Identifiant de la liste « Contacts site ». Sans lui, aucun contact
      n'est enregistré et la notification le dit. */
  BREVO_LISTE_ID?: string;
  /** Racine de l'API. Non définie en production ; sert à faire répondre
      un serveur local pendant les essais, sans rien envoyer pour de vrai. */
  BREVO_API_BASE?: string;
}

const EXPEDITEUR = { name: 'MUSIMA', email: 'no-reply@musima.org' };
const DESTINATION = site.contact.email;
const LOGO = 'https://musima.org/logo-musima.png';
const BREVO_DEFAUT = 'https://api.brevo.com/v3';

type Charge = {
  motif: string; prenom: string; nom: string; email: string;
  telephone: string; message: string; consentement: boolean;
  conservation: boolean; langue: string; rencontre?: string;
  /** Champ piège : rempli, c'est un robot. */
  site?: string;
};

const propre = (v: unknown, max = 2000) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

/* Volontairement permissif : il ne s'agit pas de valider une adresse
   selon la RFC, seulement d'attraper les fautes de frappe évidentes.
   Le vrai test, c'est que l'accusé de réception arrive. */
const emailValide = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const telValide = (v: string) => /^[+()\d][\d\s().-]{5,}$/.test(v);

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

/* ---------------- Accusé de réception ---------------- */

function accuseHtml(langue: Langue, prenom: string, motif: Motif, rencontre: string, message: string) {
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
      <img src="${LOGO}" width="150" height="45" alt="MUSIMA"
           style="display:block;border:0;width:150px;height:auto">
    </td></tr>
    <tr><td style="padding:12px 28px 0;color:#12303f;font:16px/1.6 Arial,sans-serif">
      ${echapper(t.courrielBonjour(prenom))}
    </td></tr>
    <tr><td style="padding:12px 28px 0;color:#12303f;font:16px/1.65 Arial,sans-serif">
      ${echapper(t.courrielRecu)}
    </td></tr>
    <tr><td style="padding:12px 28px 0;color:#12303f;font:16px/1.65 Arial,sans-serif">
      ${echapper(t.suite[motif])}
    </td></tr>
    <tr><td style="padding:12px 28px 0;color:#12303f;font:16px/1.65 Arial,sans-serif">
      ${echapper(t.courrielReponse)}
    </td></tr>
    <tr><td style="padding:20px 28px 0">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
             style="border-top:1px solid #ded8ce;padding-top:16px">
        <tr><td style="padding-top:16px;color:#5a7080;font:600 12px/1.4 Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase">
          ${echapper(t.courrielRecapTitre)}
        </td></tr>
      </table>
    </td></tr>
    <tr><td style="padding:12px 28px 0">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${bloc(t.labelMotif, libelleMotif(motif, langue, rencontre))}
        ${message ? bloc(t.labelMessage, message) : ''}
      </table>
    </td></tr>
    <tr><td style="padding:8px 28px 28px;color:#12303f;font:600 16px/1.6 Arial,sans-serif">
      ${echapper(t.courrielSignature)}
    </td></tr>
  </table>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px">
    <tr><td align="center" style="padding:16px 8px;color:#5a7080;font:12px/1.5 Arial,sans-serif">
      musima.org
    </td></tr>
  </table>
</td></tr></table></body></html>`;
}

function accuseTexte(langue: Langue, prenom: string, motif: Motif, rencontre: string, message: string) {
  const t = textes[langue];
  return [
    'MUSIMA', '',
    t.courrielBonjour(prenom), '',
    t.courrielRecu, '',
    t.suite[motif], '',
    t.courrielReponse, '',
    `— ${t.courrielRecapTitre} —`,
    `${t.labelMotif} : ${libelleMotif(motif, langue, rencontre)}`,
    message ? `${t.labelMessage} : ${message}` : '',
    '',
    t.courrielSignature,
    'musima.org',
  ].filter((l) => l !== '').join('\n');
}

/* ---------------- Notification à MUSIMA ---------------- */

function notification(c: Charge, langue: Langue, motif: Motif, contactEnregistre: string) {
  const l = (t: string, v: string) =>
    `<tr><td style="padding:4px 12px 4px 0;color:#5a7080;font:13px/1.5 Arial,sans-serif;vertical-align:top;white-space:nowrap">${echapper(t)}</td>
     <td style="padding:4px 0;color:#12303f;font:15px/1.6 Arial,sans-serif">${echapper(v) || '—'}</td></tr>`;
  return `<!doctype html><html><head><meta charset="utf-8"></head><body style="margin:0;background:#f3f1ec">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:24px 16px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;background:#fff;border:1px solid #ded8ce;border-radius:12px">
<tr><td style="padding:22px 24px">
  <p style="margin:0 0 16px;color:#12303f;font:600 17px/1.4 Arial,sans-serif">
    ${echapper(libelleMotif(motif, langue, c.rencontre ?? ''))}
  </p>
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
    ${l('Prénom', c.prenom)}${l('Nom', c.nom)}${l('E-mail', c.email)}${l('Téléphone', c.telephone)}
    ${l('Motif (jeton)', motif)}${l('Langue', langue)}
    ${l('Reçu le', new Date().toISOString())}
    ${l('Infolettre', c.conservation ? `oui — ${contactEnregistre}` : 'non')}
  </table>
  ${c.message ? `<p style="margin:16px 0 0;padding-top:16px;border-top:1px solid #ded8ce;color:#12303f;font:15px/1.65 Arial,sans-serif;white-space:pre-wrap">${echapper(c.message)}</p>` : ''}
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
    brut = (await request.json()) as Charge;
  } catch {
    return repondre({ ok: false, erreur: 'requete' }, 400);
  }

  /* Champ piège rempli : on répond comme si tout allait bien. Un robot
     qui reçoit une erreur apprend quelque chose ; un robot qui reçoit
     un succès ne revient pas. */
  if (propre(brut.site)) return repondre({ ok: true, accuse: false });

  const langue: Langue = (langues as readonly string[]).includes(brut.langue)
    ? (brut.langue as Langue) : 'es';
  const t = textes[langue];

  const c: Charge = {
    motif: propre(brut.motif, 40),
    prenom: propre(brut.prenom, 80),
    nom: propre(brut.nom, 80),
    email: propre(brut.email, 160),
    telephone: propre(brut.telephone, 40),
    message: propre(brut.message, 4000),
    consentement: brut.consentement === true,
    conservation: brut.conservation === true,
    langue,
    rencontre: propre(brut.rencontre, 160),
  };

  /* Mêmes règles que côté client, refaites ici : le contrôle du
     navigateur est un confort d'usage, pas une garantie. */
  const champs: Record<string, string> = {};
  if (!estMotif(c.motif)) champs.motif = t.erreurChamp.requis;
  if (!c.prenom) champs.prenom = t.erreurChamp.requis;
  if (!c.nom) champs.nom = t.erreurChamp.requis;
  if (!c.email) champs.email = t.erreurChamp.requis;
  else if (!emailValide(c.email)) champs.email = t.erreurChamp.email;
  if (!c.telephone) champs.telephone = t.erreurChamp.requis;
  else if (!telValide(c.telephone)) champs.telephone = t.erreurChamp.telephone;
  if (!c.consentement) champs.consentement = t.erreurChamp.requis;
  if (Object.keys(champs).length) return repondre({ ok: false, erreur: 'champs', champs }, 422);

  const cle = env.BREVO_API_KEY;
  const base = env.BREVO_API_BASE || BREVO_DEFAUT;
  if (!cle) return repondre({ ok: false, erreur: 'configuration' }, 500);
  const motif = c.motif as Motif;

  /* 1. Enregistrement du contact, seulement si la seconde case est
        cochée. Un échec ici ne fait pas échouer l'envoi : il est
        reporté dans la notification pour être rattrapé à la main. */
  let contactEnregistre = 'enregistré';
  if (c.conservation) {
    const liste = Number(env.BREVO_LISTE_ID);
    if (!liste) {
      contactEnregistre = 'NON enregistré — BREVO_LISTE_ID absent';
    } else {
      const r = await brevo(base, '/contacts', cle, {
        email: c.email,
        updateEnabled: true,
        listIds: [liste],
        attributes: {
          NOMBRE: c.prenom, APELLIDOS: c.nom, TELEFONO: c.telephone,
          MENSAJE: c.message, IDIOMA: langue, MOTIVO: motif,
        },
      });
      if (!r.ok) contactEnregistre = `NON enregistré — Brevo ${r.statut}`;
    }
  }

  /* 2. Notification. C'est elle qui décide du sort du visiteur. */
  const envoi = await brevo(base, '/smtp/email', cle, {
    sender: EXPEDITEUR,
    to: [{ email: DESTINATION }],
    replyTo: { email: c.email, name: `${c.prenom} ${c.nom}`.trim() },
    subject: `[${langue}] ${libelleMotif(motif, langue, c.rencontre)} — ${c.prenom} ${c.nom}`.slice(0, 200),
    htmlContent: notification(c, langue, motif, contactEnregistre),
  });
  if (!envoi.ok) return repondre({ ok: false, erreur: 'envoi' }, 502);

  /* 3. Accusé de réception. Son échec ne remet pas en cause le reste,
        mais le visiteur ne doit pas s'entendre promettre un e-mail
        qui n'est jamais parti. */
  const accuse = await brevo(base, '/smtp/email', cle, {
    sender: EXPEDITEUR,
    to: [{ email: c.email, name: `${c.prenom} ${c.nom}`.trim() }],
    replyTo: { email: DESTINATION, name: 'MUSIMA' },
    subject: t.courrielObjet,
    htmlContent: accuseHtml(langue, c.prenom, motif, c.rencontre ?? '', c.message),
    textContent: accuseTexte(langue, c.prenom, motif, c.rencontre ?? '', c.message),
  });

  return repondre({ ok: true, accuse: accuse.ok });
};
