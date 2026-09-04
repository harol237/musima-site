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
      texte: 'Il y a des parcours que dix personnes connaissent. On les amène dans une salle pleine, et on leur donne la parole.' },
    { titre: 'Demander comment',
      texte: 'Pas ce qu’ils ont obtenu, mais comment ils s’y sont pris. Les étapes, les erreurs, ce qui a coûté de l’argent et ce qui a coûté du temps.' },
    { titre: 'Mettre en contact',
      texte: 'Celui qui commence et celle qui fait ça depuis des années se retrouvent dans la même salle, sans intermédiaire et sans filtre.' },
    { titre: 'Laisser une trace',
      texte: 'Ce qui se dit dans une rencontre se perd. On le recueille, on l’écrit, et on le laisse accessible, pour que ça serve à quelqu’un d’autre, plus tard.' },
  ],
  es: [
    { titre: 'Sacar del círculo',
      texte: 'Hay trayectorias que conocen diez personas. Nosotros las traemos a una sala llena y les damos la palabra.' },
    { titre: 'Preguntar cómo',
      texte: 'No qué consiguieron, sino cómo lo hicieron. Los pasos, los errores, lo que costó dinero y lo que costó tiempo.' },
    { titre: 'Poner en contacto',
      texte: 'El que empieza y la que lleva años en esto acaban en la misma sala, sin intermediarios y sin filtro.' },
    { titre: 'Dejar rastro',
      texte: 'Lo que se dice en un encuentro se pierde. Nosotros lo recogemos, lo escribimos y lo dejamos accesible, para que le sirva a otro más adelante.' },
  ],
  en: [
    { titre: 'Out of the circle',
      texte: 'Some paths are known to ten people. We bring them into a full room and hand them the microphone.' },
    { titre: 'Ask how',
      texte: 'Not what they achieved, but how they went about it — the steps, the mistakes, what cost money and what cost time.' },
    { titre: 'Put people in touch',
      texte: 'Someone on their first month and someone years in end up in the same room, with no middlemen and no filter.' },
    { titre: 'Leave a trace',
      texte: 'What gets said at a gathering usually disappears with it. We gather it, write it down and keep it open, so it can be of use to somebody else later on.' },
  ],
  ca: [
    { titre: 'Sortir del cercle',
      texte: 'Hi ha trajectòries que coneixen deu persones. Nosaltres les portem a una sala plena i els donem la paraula.' },
    { titre: 'Preguntar com',
      texte: 'No què van aconseguir, sinó com ho van fer. Els passos, els errors, el que va costar diners i el que va costar temps.' },
    { titre: 'Posar en contacte',
      texte: 'Qui comença i qui ja fa anys que hi és acaben a la mateixa sala, sense intermediaris i sense filtre.' },
    { titre: 'Deixar rastre',
      texte: 'El que es diu en una trobada es perd. Nosaltres ho recollim, ho escrivim i ho deixem accessible, perquè li serveixi a algú altre més endavant.' },
  ],
};
