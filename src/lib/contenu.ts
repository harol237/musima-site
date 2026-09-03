import { getCollection, type CollectionEntry } from 'astro:content';
import type { Langue } from '~/i18n/config';

/* ---------------------------------------------------------------- *
 *  Helpers de contenu — un seul endroit pour les règles de tri, de
 *  filtrage des brouillons et de séparation des langues.
 *
 *  Le formatage des dates vit dans src/i18n/utils.ts : il dépend de
 *  la langue de la page, pas du contenu.
 * ---------------------------------------------------------------- */

/**
 * Vrai en développement uniquement.
 *
 * Tout ce qui n'est pas prêt — emplacements à remplir, rubriques encore
 * vides, fiches de démonstration — reste visible pendant l'édition et
 * disparaît du site public.
 */
export const enChantier = import.meta.env.DEV;

/**
 * Neutralise un champ encore à remplir.
 *
 * Si la personne qui édite laisse le marqueur, « [CRÉDIT PHOTO À AJOUTER] »
 * se retrouverait à l'écran, ou pire : lu à voix haute par un lecteur
 * d'écran. En production, un champ de cette forme est traité comme vide.
 */
export const pret = (valeur?: string) =>
  valeur && (enChantier || !/^\[.+\]$/.test(valeur.trim())) ? valeur : undefined;

type AvecBrouillon = { data: { brouillon?: boolean } };

/** Masque les brouillons en production, les garde en développement. */
export const estPublie = (entree: AvecBrouillon) =>
  import.meta.env.DEV || !entree.data.brouillon;

export function dateISO(date: Date) {
  return date.toISOString().slice(0, 10);
}

/* ================================================================== *
 *  LANGUES
 *  ------------------------------------------------------------------
 *  Les contenus sont rangés par langue : « es/mi-evento ». On en tire
 *  la langue et le slug d'URL.
 * ================================================================== */

type AvecId = { id: string };

/** « es/mi-evento » → { langue: 'es', slug: 'mi-evento' } */
export function decouper(id: string) {
  const [tete, ...reste] = id.split('/');
  return { langue: tete as Langue, slug: reste.join('/') || tete };
}

export const slugDe = (id: string) => decouper(id).slug;

/** Ne garde que les entrées d'une langue. */
export const dansLaLangue = <T extends AvecId>(entrees: T[], langue: Langue) =>
  entrees.filter((e) => decouper(e.id).langue === langue);

/**
 * Les langues dans lesquelles un contenu existe, avec leur slug.
 * Alimente le sélecteur de langue sur les pages de détail : passer de
 * /relatos/por-que-musima à /fr/recits/pourquoi-musima, et non à /fr.
 */
export function traductions<T extends AvecId & { data: { cle: string; brouillon?: boolean } }>(
  entrees: T[],
  cle: string,
) {
  const trouvees = new Map<Langue, string>();
  for (const entree of entrees) {
    if (entree.data.cle !== cle || !estPublie(entree)) continue;
    const { langue, slug } = decouper(entree.id);
    trouvees.set(langue, slug);
  }
  return trouvees;
}

/* ================================================================== *
 *  CHARGEURS
 * ================================================================== */

/** Un événement reste « à venir » jusqu'à la fin de sa journée. */
export function estAVenir(evenement: CollectionEntry<'evenements'>) {
  const reference = evenement.data.date_fin ?? evenement.data.date_debut;
  const finDeJournee = new Date(reference);
  finDeJournee.setHours(23, 59, 59, 999);
  return finDeJournee.getTime() >= Date.now();
}

export const toutesLesEntrees = {
  evenements: () => getCollection('evenements'),
  intervenants: () => getCollection('intervenants'),
  projets: () => getCollection('projets'),
  recits: () => getCollection('recits'),
  albums: () => getCollection('albums'),
};

export async function chargerEvenements(langue: Langue) {
  const tous = dansLaLangue((await getCollection('evenements')).filter(estPublie), langue);
  const aVenir = tous
    .filter(estAVenir)
    .sort((a, b) => a.data.date_debut.getTime() - b.data.date_debut.getTime());
  const passes = tous
    .filter((e) => !estAVenir(e))
    .sort((a, b) => b.data.date_debut.getTime() - a.data.date_debut.getTime());
  return { tous, aVenir, passes };
}

export async function chargerRecits(langue: Langue) {
  return dansLaLangue((await getCollection('recits')).filter(estPublie), langue).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
}

export async function chargerIntervenants(langue: Langue) {
  return dansLaLangue((await getCollection('intervenants')).filter(estPublie), langue).sort(
    (a, b) => a.data.nom.localeCompare(b.data.nom, langue),
  );
}

const ordreStatut = ['En cours', 'En préparation', 'Idée', 'Réalisé'] as const;

export async function chargerProjets(langue: Langue) {
  return dansLaLangue((await getCollection('projets')).filter(estPublie), langue).sort(
    (a, b) => ordreStatut.indexOf(a.data.statut) - ordreStatut.indexOf(b.data.statut),
  );
}

export async function chargerAlbums(langue: Langue) {
  return dansLaLangue((await getCollection('albums')).filter(estPublie), langue).sort(
    (a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0),
  );
}

/**
 * Les rubriques qui ont au moins un contenu publié dans cette langue.
 * Une rubrique vide sort du menu plutôt que d'afficher une page creuse.
 */
export async function rubriquesRemplies(langue: Langue) {
  if (enChantier) {
    return new Set(['evenements', 'intervenants', 'projets', 'recits', 'galerie'] as const);
  }
  const [evenements, intervenants, projets, recits, albums] = await Promise.all([
    chargerEvenements(langue),
    chargerIntervenants(langue),
    chargerProjets(langue),
    chargerRecits(langue),
    chargerAlbums(langue),
  ]);
  const pleines = new Set<string>();
  if (evenements.tous.length) pleines.add('evenements');
  if (intervenants.length) pleines.add('intervenants');
  if (projets.length) pleines.add('projets');
  if (recits.length) pleines.add('recits');
  if (albums.length) pleines.add('galerie');
  return pleines;
}
