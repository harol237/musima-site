import { chemin, type CleSegment, type Langue } from '~/i18n/config';
import { traducteur, type CleUi } from '~/i18n/ui';

/* Navigation — 5 entrées principales + 1 action, construites pour la
   langue de la page. Modifier ce fichier suffit à changer le menu
   partout : en-tête, pied de page, plan du site. */

export type Entree = {
  libelle: string;
  url: string;
  description?: string;
  /** Sert à masquer une rubrique encore vide. */
  rubrique?: string;
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

export const navigationPrincipale = (langue: Langue): Entree[] => [
  entree(langue, 'association', 'navAssociation', 'navAssociationDesc'),
  entree(langue, 'evenements', 'navEvenements', 'navEvenementsDesc', 'evenements'),
  entree(langue, 'intervenants', 'navIntervenants', 'navIntervenantsDesc', 'intervenants'),
  entree(langue, 'projets', 'navProjets', 'navProjetsDesc', 'projets'),
  entree(langue, 'recits', 'navRecits', 'navRecitsDesc', 'recits'),
];

export const actionPrincipale = (langue: Langue): Entree =>
  entree(langue, 'engagement', 'navEngagement');

export const navigationSecondaire = (langue: Langue): Entree[] => [
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
