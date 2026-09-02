import { getCollection, type CollectionEntry } from 'astro:content';

/* ---------------------------------------------------------------- *
 *  Helpers de contenu — un seul endroit pour les règles de tri,
 *  de filtrage des brouillons et de formatage des dates.
 * ---------------------------------------------------------------- */

type AvecBrouillon = { data: { brouillon?: boolean } };

/** Masque les brouillons en production, les garde en développement. */
export const estPublie = (entree: AvecBrouillon) =>
  import.meta.env.DEV || !entree.data.brouillon;

const fuseau = 'Europe/Madrid';

export function formaterDate(
  date: Date,
  options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' },
) {
  return new Intl.DateTimeFormat('fr-FR', { timeZone: fuseau, ...options }).format(date);
}

export function formaterJourMois(date: Date) {
  return {
    jour: new Intl.DateTimeFormat('fr-FR', { timeZone: fuseau, day: '2-digit' }).format(date),
    mois: new Intl.DateTimeFormat('fr-FR', { timeZone: fuseau, month: 'short' })
      .format(date)
      .replace('.', ''),
    annee: new Intl.DateTimeFormat('fr-FR', { timeZone: fuseau, year: 'numeric' }).format(date),
  };
}

/** « 12 mars 2026 » ou « du 12 au 14 mars 2026 ». */
export function formaterPlage(debut: Date, fin?: Date) {
  if (!fin || fin.getTime() === debut.getTime()) return formaterDate(debut);
  const memeMois =
    debut.getFullYear() === fin.getFullYear() && debut.getMonth() === fin.getMonth();
  if (memeMois) {
    const jourDebut = formaterDate(debut, { day: 'numeric' });
    return `du ${jourDebut} au ${formaterDate(fin)}`;
  }
  return `du ${formaterDate(debut)} au ${formaterDate(fin)}`;
}

export function dateISO(date: Date) {
  return date.toISOString().slice(0, 10);
}

/** Un événement reste « à venir » jusqu'à la fin de sa journée. */
export function estAVenir(evenement: CollectionEntry<'evenements'>) {
  const reference = evenement.data.date_fin ?? evenement.data.date_debut;
  const finDeJournee = new Date(reference);
  finDeJournee.setHours(23, 59, 59, 999);
  return finDeJournee.getTime() >= Date.now();
}

export async function chargerEvenements() {
  const tous = (await getCollection('evenements')).filter(estPublie);
  const aVenir = tous
    .filter(estAVenir)
    .sort((a, b) => a.data.date_debut.getTime() - b.data.date_debut.getTime());
  const passes = tous
    .filter((e) => !estAVenir(e))
    .sort((a, b) => b.data.date_debut.getTime() - a.data.date_debut.getTime());
  return { tous, aVenir, passes };
}

export async function chargerRecits() {
  return (await getCollection('recits'))
    .filter(estPublie)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function chargerIntervenants() {
  return (await getCollection('intervenants'))
    .filter(estPublie)
    .sort((a, b) => a.data.nom.localeCompare(b.data.nom, 'fr'));
}

const ordreStatut = ['En cours', 'En préparation', 'Idée', 'Réalisé'] as const;

export async function chargerProjets() {
  return (await getCollection('projets'))
    .filter(estPublie)
    .sort((a, b) => ordreStatut.indexOf(a.data.statut) - ordreStatut.indexOf(b.data.statut));
}

export async function chargerAlbums() {
  return (await getCollection('albums'))
    .filter(estPublie)
    .sort((a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0));
}
