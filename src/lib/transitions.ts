/* ==================================================================
   NOMS DE TRANSITION PARTAGÉS
   ------------------------------------------------------------------
   Une carte et la fiche vers laquelle elle mène portent le même
   `view-transition-name` : le navigateur relie les deux images et
   fait grandir l'une vers l'autre pendant la navigation.

   Deux règles à ne pas perdre de vue :
     — le nom doit être un identifiant CSS valide ;
     — il doit être unique dans une page. Une même fiche affichée deux
       fois sur la même page annulerait la transition. En pratique nos
       vues n'affichent jamais deux fois le même contenu.
   ================================================================== */

const identifiant = (valeur: string) =>
  valeur
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/**
 * `nomTransition('pt', 'sebastien-richnel')` → `pt-sebastien-richnel`
 *
 * Renvoie `undefined` quand il n'y a pas de visuel : un emplacement
 * vide n'a rien à faire grandir, et une transition sur un cadre gris
 * se remarque plus que pas de transition du tout.
 */
export const nomTransition = (prefixe: string, valeur: string, actif = true) =>
  actif ? `view-transition-name:${prefixe}-${identifiant(valeur)}` : undefined;
