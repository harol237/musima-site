import type { Langue } from './config';

/* Les quatre intentions sont issues mot pour mot de la mission de
   l'association. Le texte français est celui validé à l'origine et ne
   se retouche pas ; les trois autres versions le rendent fidèlement. */

type Intention = { titre: string; texte: string };

export const intentionsPar: Record<Langue, Intention[]> = {
  fr: [
    { titre: 'Mettre en lumière',
      texte: 'Des personnes, des parcours, des projets et des initiatives d’Africains qui entreprennent, créent, innovent et apportent de la valeur dans leurs domaines.' },
    { titre: 'Faire circuler',
      texte: 'Un espace où les expériences, les savoir-faire, les idées et les initiatives peuvent se rencontrer et circuler.' },
    { titre: 'Ouvrir le champ des possibles',
      texte: 'Donner à voir des trajectoires et des réalisations qui permettent de se dire que certaines choses sont possibles, et qu’il est possible d’aller plus loin.' },
    { titre: 'Enrichir le récit',
      texte: 'Donner davantage à voir ce qui se construit, ce qui se crée, ce qui évolue et ce que les Africains apportent.' },
  ],
  es: [
    { titre: 'Dar luz',
      texte: 'A personas, trayectorias, proyectos e iniciativas de africanos que emprenden, crean, innovan y aportan valor en sus ámbitos.' },
    { titre: 'Hacer circular',
      texte: 'Un espacio donde las experiencias, los oficios, las ideas y las iniciativas puedan encontrarse y circular.' },
    { titre: 'Abrir el campo de lo posible',
      texte: 'Mostrar trayectorias y realizaciones que permiten pensar que ciertas cosas son posibles, y que se puede llegar más lejos.' },
    { titre: 'Enriquecer el relato',
      texte: 'Dar a ver más de lo que se construye, lo que se crea, lo que evoluciona y lo que los africanos aportan.' },
  ],
  en: [
    { titre: 'Shine a light',
      texte: 'On the people, paths, projects and initiatives of Africans who start things, create, innovate and add value in their fields.' },
    { titre: 'Keep things moving',
      texte: 'A space where experience, craft, ideas and initiatives can meet and travel.' },
    { titre: 'Widen what seems possible',
      texte: 'Show trajectories and achievements that let people think certain things are possible, and that you can go further still.' },
    { titre: 'Enrich the story',
      texte: 'Show more of what is being built, what is being created, what is changing, and what Africans bring.' },
  ],
  ca: [
    { titre: 'Donar llum',
      texte: 'A persones, trajectòries, projectes i iniciatives d’africans que emprenen, creen, innoven i aporten valor en els seus àmbits.' },
    { titre: 'Fer circular',
      texte: 'Un espai on les experiències, els oficis, les idees i les iniciatives es puguin trobar i circular.' },
    { titre: 'Obrir el camp del possible',
      texte: 'Mostrar trajectòries i realitzacions que permeten pensar que certes coses són possibles, i que es pot arribar més lluny.' },
    { titre: 'Enriquir el relat',
      texte: 'Donar a veure més del que es construeix, el que es crea, el que evoluciona i el que els africans aporten.' },
  ],
};
