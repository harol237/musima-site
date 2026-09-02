/* Navigation principale — 5 entrées + 1 action.
   Modifier ce fichier suffit à changer le menu partout (en-tête,
   pied de page, plan du site). */
export type Entree = { libelle: string; url: string; description?: string };

export const navigationPrincipale: Entree[] = [
  { libelle: 'Association', url: '/association', description: "La mission, la démarche et l'équipe" },
  { libelle: 'Événements', url: '/evenements', description: 'Conférences, rencontres et ateliers' },
  { libelle: 'Intervenants', url: '/intervenants', description: 'Celles et ceux qui prennent la parole' },
  { libelle: 'Projets', url: '/projets', description: "Ce que l'association construit" },
  { libelle: 'Récits', url: '/recits', description: 'Portraits, retours et analyses' },
];

export const actionPrincipale: Entree = { libelle: "S'engager", url: '/s-engager' };

export const navigationSecondaire: Entree[] = [
  { libelle: 'Galerie', url: '/galerie' },
  { libelle: 'Contact', url: '/contact' },
];

export const navigationLegale: Entree[] = [
  { libelle: 'Mentions légales', url: '/mentions-legales' },
  { libelle: 'Confidentialité', url: '/confidentialite' },
  { libelle: 'Accessibilité', url: '/accessibilite' },
];
