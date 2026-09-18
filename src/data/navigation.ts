import { chemin, type CleSegment, type Langue } from '~/i18n/config';
import { traducteur, type CleUi } from '~/i18n/ui';

/* Navigation — 4 rubriques + 1 action, construites pour la langue de la
   page. Modifier ce fichier suffit à changer le menu partout : en-tête,
   pied de page, plan du site.

   « Ponentes » et « Relatos » ne sont plus au premier niveau : leurs
   fiches restent servies à leur adresse, et on y arrive depuis les
   sections de l'accueil et depuis le pied de page. */

export type Entree = {
  libelle: string;
  url: string;
  description?: string;
  /** Sert à masquer une rubrique encore vide. */
  rubrique?: string;
  /** Clé de l'aperçu du menu plein écran. Par défaut, la rubrique. */
  apercu?: string;
};

const entree = (
  langue: Langue,
  segment: CleSegment,
  libelle: CleUi,
  description?: CleUi,
  rubrique?: string,
): Entree => {
  const t = traducteur(langue);
  return {
    libelle: t(libelle),
    url: chemin(langue, segment),
    ...(description ? { description: t(description) } : {}),
    ...(rubrique ? { rubrique } : {}),
  };
};

/* L'écosystème est une page depuis septembre 2026 (musima.org/ecosistema,
   imprimé sur une bâche). Pas de `rubrique` — il n'y a pas de collection
   derrière, donc rien à masquer ; `apercu` lui donne sa propre vignette
   dans le menu plein écran. */
const entreeEcosysteme = (langue: Langue): Entree => {
  const t = traducteur(langue);
  return {
    libelle: t('navEcosysteme'),
    url: chemin(langue, 'ecosysteme'),
    description: t('navEcosystemeDesc'),
    apercu: 'ecosysteme',
  };
};

export const navigationPrincipale = (langue: Langue): Entree[] => [
  entree(langue, 'association', 'navAssociation', 'navAssociationDesc'),
  entree(langue, 'evenements', 'navEvenements', 'navEvenementsDesc', 'evenements'),
  entree(langue, 'projets', 'navProjets', 'navProjetsDesc', 'projets'),
  entreeEcosysteme(langue),
];

export const actionPrincipale = (langue: Langue): Entree =>
  entree(langue, 'engagement', 'navEngagement');

/* Le pied de page liste tout ce qui n'est pas au premier niveau. Les
   intervenants et les récits y figurent : ces rubriques sont publiées,
   elles doivent rester atteignables ailleurs que depuis leur section
   de l'accueil. */
export const navigationSecondaire = (langue: Langue): Entree[] => [
  entree(langue, 'intervenants', 'navIntervenants', undefined, 'intervenants'),
  entree(langue, 'recits', 'navRecits', undefined, 'recits'),
  entree(langue, 'galerie', 'navGalerie', undefined, 'galerie'),
  entree(langue, 'contact', 'navContact'),
];

/* La page accessibilité n'est plus listée ici, à la demande de MUSIMA.
   Elle reste servie à son adresse — un lien déjà partagé continue de
   fonctionner — mais ne figure plus dans le pied de page. */
export const navigationLegale = (langue: Langue): Entree[] => [
  entree(langue, 'legal', 'navLegal'),
  entree(langue, 'confidentialite', 'navConfidentialite'),
  entree(langue, 'cookies', 'navCookies'),
];
