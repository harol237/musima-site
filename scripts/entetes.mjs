/* ==================================================================
   GÉNÉRATION DE dist/_headers
   ------------------------------------------------------------------
   La politique de sécurité du contenu doit autoriser les scripts que
   le site pose réellement dans son HTML. Les écrire à la main serait
   une bombe à retardement : le jour où quelqu'un touche au compte à
   rebours ou au sélecteur de thème, l'empreinte change, le script est
   bloqué, et personne ne s'en aperçoit avant qu'un visiteur le signale.

   Ce fichier calcule donc les empreintes à partir du HTML produit,
   à chaque construction. Elles ne peuvent pas dériver.

   Les blocs <script type="application/ld+json"> sont ignorés : ce sont
   des données, le navigateur ne les exécute pas et `script-src` ne
   s'y applique pas.
   ================================================================== */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';

function pages(dossier) {
  return readdirSync(dossier).flatMap((n) => {
    const chemin = join(dossier, n);
    return statSync(chemin).isDirectory()
      ? pages(chemin)
      : chemin.endsWith('.html') ? [chemin] : [];
  });
}

const empreintes = new Set();
for (const page of pages(DIST)) {
  const html = readFileSync(page, 'utf8');
  for (const m of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    const [, attributs, corps] = m;
    if (/\ssrc=/.test(attributs) || /ld\+json/.test(attributs)) continue;
    empreintes.add(`'sha256-${createHash('sha256').update(corps, 'utf8').digest('base64')}'`);
  }
}

const csp = [
  /* Tout est refusé par défaut, puis on rouvre le strict nécessaire. */
  "default-src 'self'",
  /* Ni script ni police ni image ne viennent d'ailleurs : le site
     n'appelle aucun domaine tiers, la politique le grave. */
  `script-src 'self' ${[...empreintes].sort().join(' ')}`,
  /* Les feuilles sont servies depuis le site ; `unsafe-inline` couvre
     les attributs `style` qui portent les délais d'animation. Les
     remplacer par des classes demanderait de réécrire une douzaine de
     composants pour un gain de sécurité très faible : un attribut de
     style n'exécute rien. */
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self'",
  "font-src 'self'",
  /* Le formulaire poste sur /api/contact, même origine. */
  "connect-src 'self'",
  "form-action 'self'",
  /* Le site n'intègre rien et ne veut pas être intégré. */
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "media-src 'none'",
  "worker-src 'none'",
  "base-uri 'self'",
  'upgrade-insecure-requests',
].join('; ');

const permissions = [
  'accelerometer', 'autoplay', 'camera', 'display-capture', 'encrypted-media',
  'geolocation', 'gyroscope', 'magnetometer', 'microphone', 'midi', 'payment',
  'picture-in-picture', 'publickey-credentials-get', 'screen-wake-lock',
  'usb', 'xr-spatial-tracking',
].map((f) => `${f}=()`).join(', ');

const fichier = `# Fichier produit par scripts/entetes.mjs à chaque construction.
# Ne pas modifier à la main : les empreintes des scripts inline sont
# recalculées depuis le HTML, toute retouche serait écrasée.

/*
  Content-Security-Policy: ${csp}
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: ${permissions}
  Strict-Transport-Security: max-age=31536000; includeSubDomains

# Le logo des e-mails est chargé par les serveurs de Gmail, Outlook et
# consorts, donc depuis une autre origine que la nôtre. Il lui faut une
# politique de ressource explicite, sinon les clients qui la réclament
# affichent un cadre vide à la place.
/logo-musima.png
  Cross-Origin-Resource-Policy: cross-origin
  Cache-Control: public, max-age=604800
`;

writeFileSync(join(DIST, '_headers'), fichier);
console.log(`_headers écrit — ${empreintes.size} empreintes de scripts inline`);
