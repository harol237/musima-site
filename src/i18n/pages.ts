import { langues, type CleSegment, type Langue } from './config';

/* ==================================================================
   INVENTAIRE DES PAGES
   ------------------------------------------------------------------
   Une page n'est générée que dans les langues où son texte existe
   réellement. Mieux vaut une rubrique absente d'un menu qu'une page
   à moitié en français servie à un lecteur anglophone.

   `disponible` liste ces langues. Quand une traduction est écrite,
   il suffit d'ajouter son code ici : route, menu, sélecteur de langue,
   balises hreflang et plan du site suivent automatiquement.
   ================================================================== */

export type Vue =
  | 'accueil' | 'association' | 'equipe'
  | 'evenements' | 'intervenants' | 'projets' | 'recits' | 'galerie'
  | 'engagement' | 'contact'
  | 'legal' | 'confidentialite' | 'cookies' | 'accessibilite';

export type PageStatique = {
  vue: Vue;
  /** Segment d'URL, ou rien pour l'accueil. */
  segment?: CleSegment;
  /** Segment supplémentaire, pour /asociacion/equipo. */
  sous?: CleSegment;
  disponible: readonly Langue[];
};

const toutes = langues;
/**
 * Pages dont la prose longue n'est pas encore traduite. Elles ne sont
 * générées qu'en français : mieux vaut une rubrique absente d'un menu
 * qu'une page espagnole remplie de texte français.
 *
 * Ajouter 'es' ici dès que la version espagnole est écrite suffit à la
 * publier — route, menu, sélecteur et hreflang suivent.
 */
const esFr = ['es', 'fr'] as const;
const frSeul = ['fr'] as const;

export const pagesStatiques: PageStatique[] = [
  { vue: 'accueil',         disponible: toutes },
  { vue: 'association',     segment: 'association', disponible: esFr },
  { vue: 'equipe',          segment: 'association', sous: 'equipe', disponible: esFr },
  { vue: 'evenements',      segment: 'evenements', disponible: toutes },
  { vue: 'intervenants',    segment: 'intervenants', disponible: toutes },
  { vue: 'projets',         segment: 'projets', disponible: toutes },
  { vue: 'recits',          segment: 'recits', disponible: toutes },
  { vue: 'galerie',         segment: 'galerie', disponible: toutes },
  { vue: 'engagement',      segment: 'engagement', disponible: esFr },
  { vue: 'contact',         segment: 'contact', disponible: esFr },
  { vue: 'legal',           segment: 'legal', disponible: esFr },
  { vue: 'confidentialite', segment: 'confidentialite', disponible: esFr },
  { vue: 'cookies',         segment: 'cookies', disponible: esFr },
  { vue: 'accessibilite',   segment: 'accessibilite', disponible: esFr },
];

export const languesDe = (vue: Vue) =>
  pagesStatiques.find((p) => p.vue === vue)?.disponible ?? langues;
