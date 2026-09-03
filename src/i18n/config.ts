/* ==================================================================
   MUSIMA — LANGUES ET ROUTES
   ------------------------------------------------------------------
   L'espagnol est la langue par défaut et vit à la racine du domaine :
   musima.org/eventos. Les trois autres sont préfixées : /fr/, /en/, /ca/.

   Ajouter une langue = l'ajouter à `langues`, compléter `segments`
   ci-dessous et le dictionnaire de src/i18n/ui.ts. Le sélecteur, les
   balises hreflang et le plan du site suivent tout seuls.
   ================================================================== */

export const langues = ['es', 'fr', 'en', 'ca'] as const;
export type Langue = (typeof langues)[number];

export const langueDefaut: Langue = 'es';

/** Étiquette du sélecteur, et attribut lang/hreflang du document. */
export const etiquettes: Record<Langue, { court: string; nom: string; balise: string }> = {
  es: { court: 'ES', nom: 'Español', balise: 'es-ES' },
  fr: { court: 'FR', nom: 'Français', balise: 'fr-FR' },
  en: { court: 'EN', nom: 'English', balise: 'en' },
  ca: { court: 'CA', nom: 'Català', balise: 'ca-ES' },
};

/** Les visiteurs lisent l'URL : elle se traduit comme le reste. */
export const segments = {
  association:     { es: 'asociacion',    fr: 'association',      en: 'about',         ca: 'associacio' },
  equipe:          { es: 'equipo',        fr: 'equipe',           en: 'team',          ca: 'equip' },
  evenements:      { es: 'eventos',       fr: 'evenements',       en: 'events',        ca: 'esdeveniments' },
  intervenants:    { es: 'ponentes',      fr: 'intervenants',     en: 'speakers',      ca: 'ponents' },
  projets:         { es: 'proyectos',     fr: 'projets',          en: 'projects',      ca: 'projectes' },
  recits:          { es: 'relatos',       fr: 'recits',           en: 'stories',       ca: 'relats' },
  galerie:         { es: 'galeria',       fr: 'galerie',          en: 'gallery',       ca: 'galeria' },
  engagement:      { es: 'participar',    fr: 's-engager',        en: 'get-involved',  ca: 'participa' },
  contact:         { es: 'contacto',      fr: 'contact',          en: 'contact',       ca: 'contacte' },
  legal:           { es: 'aviso-legal',   fr: 'mentions-legales', en: 'legal-notice',  ca: 'avis-legal' },
  confidentialite: { es: 'privacidad',    fr: 'confidentialite',  en: 'privacy',       ca: 'privacitat' },
  cookies:         { es: 'cookies',       fr: 'cookies',          en: 'cookies',       ca: 'galetes' },
  accessibilite:   { es: 'accesibilidad', fr: 'accessibilite',    en: 'accessibility', ca: 'accessibilitat' },
} as const satisfies Record<string, Record<Langue, string>>;

export type CleSegment = keyof typeof segments;

/** Le préfixe d'URL d'une langue. Vide pour l'espagnol, qui est à la racine. */
export const prefixe = (langue: Langue) => (langue === langueDefaut ? '' : `/${langue}`);

/**
 * Construit une URL absolue interne.
 *   chemin('fr', 'evenements')                → /fr/evenements
 *   chemin('es', 'evenements', 'mi-evento')   → /eventos/mi-evento
 *   chemin('ca')                              → /ca
 */
export function chemin(langue: Langue, cle?: CleSegment, ...suite: string[]) {
  const morceaux = [prefixe(langue)];
  if (cle) morceaux.push(segments[cle][langue]);
  morceaux.push(...suite.filter(Boolean));
  const url = morceaux.filter(Boolean).join('/');
  return url.startsWith('/') ? url : `/${url}`;
}

/** Fuseau et étiquettes de date : une seule source pour tout le site. */
/**
 * La langue d'une adresse : « /fr/evenements » → 'fr', « /eventos » → 'es'.
 *
 * Sert aux composants traversés par toutes les pages, qui n'ont pas de
 * raison de recevoir la langue en propriété depuis une vingtaine de vues.
 */
export function langueDeChemin(adresse: string): Langue {
  const tete = adresse.replace(/^\//, '').split('/')[0];
  return (langues as readonly string[]).includes(tete) ? (tete as Langue) : langueDefaut;
}

export const fuseau = 'Europe/Madrid';
