import site from '~/data/site.json';
import { langueDefaut, type Langue } from './config';

/**
 * Certaines valeurs de src/data/site.json existent en quatre langues
 * (le pays, la forme juridique, le registre…), d'autres non (l'adresse,
 * l'e-mail). Ce helper lit les deux sans que les gabarits aient à savoir
 * lesquelles sont traduites.
 */
export function champ(valeur: unknown, langue: Langue): string {
  if (typeof valeur === 'string') return valeur;
  if (valeur && typeof valeur === 'object') {
    const dico = valeur as Record<string, string>;
    return dico[langue] ?? dico[langueDefaut] ?? Object.values(dico)[0] ?? '';
  }
  return '';
}

export const donneesSite = site;
