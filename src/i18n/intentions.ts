import type { Langue } from './config';

/* Les quatre intentions : ce que fait l'association, en quatre verbes
   d'action. Chaque bloc apporte une information que le héros ne donne
   pas — sinon la page se répète et on arrête de lire.

   Ce texte remplace la formulation issue mot pour mot de la mission,
   qui décrivait juste l'association au lieu de donner envie de la lire. */

type Intention = { titre: string; texte: string };

export const intentionsPar: Record<Langue, Intention[]> = {
  fr: [
    { titre: 'Sortir du cercle',
      texte: 'Il y a des parcours que dix personnes connaissent. On les amène dans une salle pleine.' },
    { titre: 'Demander comment',
      texte: 'Pas ce qu’ils ont obtenu — comment ils s’y sont pris. Les étapes, les erreurs, ce qui a coûté de l’argent et ce qui a coûté du temps.' },
    { titre: 'Mettre en contact',
      texte: 'Celui qui commence et celle qui fait ça depuis des années. Dans la même salle, sans intermédiaire et sans filtre.' },
    { titre: 'Laisser une trace',
      texte: 'Ce qui se dit dans une rencontre se perd. On le recueille, on l’écrit, et on le laisse accessible.' },
  ],
  es: [
    { titre: 'Sacar del círculo',
      texte: 'Hay trayectorias que solo conocen diez personas. Las traemos a una sala llena.' },
    { titre: 'Preguntar cómo',
      texte: 'No qué han conseguido — cómo lo hicieron. Los pasos, los errores, lo que costó dinero y lo que costó tiempo.' },
    { titre: 'Poner en contacto',
      texte: 'Quien empieza y quien ya lleva años. En la misma sala, sin intermediarios y sin filtro.' },
    { titre: 'Dejar rastro',
      texte: 'Lo que se dice en un encuentro se pierde. Lo recogemos, lo escribimos y lo dejamos accesible.' },
  ],
  en: [
    { titre: 'Out of the circle',
      texte: 'Some paths are known to ten people. We bring them into a full room.' },
    { titre: 'Ask how',
      texte: 'Not what they achieved — how they did it. The steps, the mistakes, what cost money and what cost time.' },
    { titre: 'Put people in touch',
      texte: 'Those starting out and those years in. Same room, no middlemen, no filter.' },
    { titre: 'Leave a trace',
      texte: 'What’s said at a meeting gets lost. We gather it, write it down and keep it open.' },
  ],
  ca: [
    { titre: 'Sortir del cercle',
      texte: 'Hi ha trajectòries que només coneixen deu persones. Les portem a una sala plena.' },
    { titre: 'Preguntar com',
      texte: 'No què han aconseguit — com ho van fer. Els passos, els errors, el que va costar diners i el que va costar temps.' },
    { titre: 'Posar en contacte',
      texte: 'Qui comença i qui ja fa anys que hi és. A la mateixa sala, sense intermediaris i sense filtre.' },
    { titre: 'Deixar rastre',
      texte: 'El que es diu en una trobada es perd. Ho recollim, ho escrivim i ho deixem accessible.' },
  ],
};
