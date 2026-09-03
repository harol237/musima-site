import { type Langue, fuseau } from './config';

/* ==================================================================
   Valeurs d'énumération et formats de date.
   ------------------------------------------------------------------
   Les schémas de contenu stockent les énumérations en français — c'est
   la langue de saisie dans le CMS. L'affichage, lui, suit la langue de
   la page. Ces tables font le pont.
   ================================================================== */

const table = <T extends string>(t: Record<T, Record<Langue, string>>) => t;

export const formatsEvenement = table({
  'Conférence':  { es: 'Conferencia', fr: 'Conférence', en: 'Talk', ca: 'Conferència' },
  'Rencontre':   { es: 'Encuentro', fr: 'Rencontre', en: 'Gathering', ca: 'Trobada' },
  'Table ronde': { es: 'Mesa redonda', fr: 'Table ronde', en: 'Panel', ca: 'Taula rodona' },
  'Atelier':     { es: 'Taller', fr: 'Atelier', en: 'Workshop', ca: 'Taller' },
  'Projection':  { es: 'Proyección', fr: 'Projection', en: 'Screening', ca: 'Projecció' },
  'Autre':       { es: 'Otro', fr: 'Autre', en: 'Other', ca: 'Altre' },
});

export const statutsProjet = table({
  'Idée':           { es: 'Idea', fr: 'Idée', en: 'Idea', ca: 'Idea' },
  'En préparation': { es: 'En preparación', fr: 'En préparation', en: 'In preparation', ca: 'En preparació' },
  'En cours':       { es: 'En marcha', fr: 'En cours', en: 'Under way', ca: 'En marxa' },
  'Réalisé':        { es: 'Realizado', fr: 'Réalisé', en: 'Completed', ca: 'Realitzat' },
});

export const categoriesRecit = table({
  'Portrait':            { es: 'Retrato', fr: 'Portrait', en: 'Portrait', ca: 'Retrat' },
  "Retour d'événement":  { es: 'Crónica', fr: "Retour d'événement", en: 'Event write-up', ca: 'Crònica' },
  'Idées & analyses':    { es: 'Ideas y análisis', fr: 'Idées & analyses', en: 'Ideas & analysis', ca: 'Idees i anàlisis' },
  'Actualité':           { es: 'Actualidad', fr: 'Actualité', en: 'News', ca: 'Actualitat' },
});

/** Traduit une valeur d'énumération, en la laissant telle quelle si elle est inconnue. */
export const traduireValeur = <T extends string>(
  tableau: Record<T, Record<Langue, string>>,
  valeur: T,
  langue: Langue,
) => tableau[valeur]?.[langue] ?? valeur;

/* ---------------- Dates ---------------- */

const locales: Record<Langue, string> = {
  es: 'es-ES', fr: 'fr-FR', en: 'en-GB', ca: 'ca-ES',
};

export function formaterDate(
  date: Date,
  langue: Langue,
  options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' },
) {
  return new Intl.DateTimeFormat(locales[langue], { timeZone: fuseau, ...options }).format(date);
}

export function formaterJourMois(date: Date, langue: Langue) {
  const f = (o: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat(locales[langue], { timeZone: fuseau, ...o }).format(date);
  return {
    jour: f({ day: '2-digit' }),
    mois: f({ month: 'short' }).replace('.', ''),
    annee: f({ year: 'numeric' }),
  };
}

/** « 12 de marzo de 2026 » ou « del 12 al 14 de marzo de 2026 », selon la langue. */
export function formaterPlage(debut: Date, fin: Date | undefined, langue: Langue) {
  if (!fin || fin.getTime() === debut.getTime()) return formaterDate(debut, langue);

  const memeMois =
    debut.getFullYear() === fin.getFullYear() && debut.getMonth() === fin.getMonth();
  const jourDebut = memeMois
    ? formaterDate(debut, langue, { day: 'numeric' })
    : formaterDate(debut, langue);

  const gabarits: Record<Langue, (a: string, b: string) => string> = {
    es: (a, b) => `del ${a} al ${b}`,
    fr: (a, b) => `du ${a} au ${b}`,
    en: (a, b) => `${a} – ${b}`,
    ca: (a, b) => `del ${a} al ${b}`,
  };
  return gabarits[langue](jourDebut, formaterDate(fin, langue));
}
