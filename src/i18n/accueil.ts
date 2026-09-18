import type { Langue } from './config';

/* ==================================================================
   ACCUEIL — BLOCS ÉDITORIAUX
   ------------------------------------------------------------------
   Les quatre versions sont écrites, pas traduites : chaque langue suit
   ses propres tournures. MUSIMA se désigne toujours au « nous » ; le
   visiteur, lui, est tutoyé en français.

   Ce fichier remplace src/i18n/intentions.ts, qui portait les quatre
   verbes de l'ancien positionnement. Les chaînes courtes et partagées
   avec d'autres pages restent dans ui.ts : ici vivent les blocs qui
   n'existent que sur l'accueil.
   ================================================================== */

/** Ancre du bloc écosystème sur l'accueil, traduite comme le reste des
    adresses. Depuis que l'écosystème a sa page, plus rien n'y mène sur
    le site ; elle reste pour les liens déjà partagés vers /#ecosistema. */
export const ancreEcosysteme: Record<Langue, string> = {
  es: 'ecosistema', fr: 'ecosysteme', en: 'ecosystem', ca: 'ecosistema',
};

type Verbe = { mot: string; texte: string };
type Maniere = { titre: string; texte: string };

type Accueil = {
  /** Les trois verbes, dans l'ordre. Le H1 les compose. */
  verbes: [string, string, string];
  /** Les trois verbes sur une ligne, pour les titres de section. */
  triade: string;
  qui: { surtitre: string; titre: string; texte: string[] };
  constat: { surtitre: string; titre: string; texte: string[]; phrase: string };
  role: { surtitre: string; verbes: Verbe[] };
  manieres: Maniere[];
  ecosysteme: {
    surtitre: string;
    titre: string;
    texte: string;
    phrase: string;
    bouton: string;
  };
};

export const accueilPar: Record<Langue, Accueil> = {
  es: {
    verbes: ['Valorizar', 'Conectar', 'Construir'],
    triade: 'Valorizar · Conectar · Construir',
    qui: {
      surtitre: 'MUSIMA',
      titre: 'Lo que se construye merece encontrarse',
      texte: [
        'MUSIMA parte de una realidad sencilla: muchas personas, proyectos e iniciativas están construyendo cosas valiosas sin estar necesariamente conectados entre sí.',
        'Nuestra identidad está anclada en la diáspora africana y en todo lo que crea, emprende, innova y aporta. Pero nuestra acción está abierta a todas las personas y organizaciones que quieran descubrir, contribuir, colaborar o construir.',
      ],
    },
    constat: {
      surtitre: 'El punto de partida',
      titre: 'La oportunidad no siempre está lejos. A veces está desconectada.',
      texte: [
        'Personas. Ideas. Conocimientos. Recursos. Oportunidades.',
        'Todo esto existe. Sin embargo, puede permanecer separado: una persona puede tener una idea sin conocer a quien podría ayudarla; un proyecto puede necesitar una competencia que existe a pocos kilómetros; una institución puede disponer de recursos sin llegar a las personas que podrían utilizarlos.',
      ],
      phrase: 'MUSIMA actúa en ese espacio entre lo que existe y lo que podría encontrarse.',
    },
    role: {
      surtitre: 'Cómo actuamos',
      verbes: [
        { mot: 'Valorizar', texte: 'Hacer visible lo que existe: personas, trayectorias, ideas, proyectos, experiencias e iniciativas.' },
        { mot: 'Conectar', texte: 'Crear conexiones entre personas y actores que pueden compartir conocimientos, recursos, experiencias y oportunidades.' },
        { mot: 'Construir', texte: 'Favorecer colaboraciones e iniciativas que puedan transformar una conexión en algo concreto y duradero.' },
      ],
    },
    manieres: [
      { titre: 'Dar visibilidad', texte: 'Mostrar personas, proyectos e iniciativas que merecen ser conocidos y generar nuevas conexiones a su alrededor.' },
      { titre: 'Crear encuentros', texte: 'Organizar conversaciones, conferencias y otros formatos para reunir a personas que pueden aprender, compartir o colaborar.' },
      { titre: 'Hacer circular', texte: 'Facilitar el intercambio de conocimientos, experiencias, recursos, ideas y oportunidades.' },
      { titre: 'Favorecer colaboraciones', texte: 'Crear las condiciones para que una conversación pueda convertirse en una iniciativa, un proyecto, una colaboración o una nueva posibilidad.' },
    ],
    ecosysteme: {
      surtitre: 'Ecosistema MUSIMA',
      titre: 'Personas · Proyectos · Organizaciones',
      texte: 'MUSIMA quiere construir progresivamente un ecosistema de personas, empresas, asociaciones, instituciones, universidades y proyectos que puedan encontrarse, compartir recursos y conocimientos, colaborar y dar más fuerza a lo que se construye.',
      phrase: 'No necesitas pertenecer a una comunidad concreta para formar parte. Puedes aportar una idea, una experiencia, una competencia, un contacto, un recurso, un proyecto o simplemente tu interés.',
      bouton: 'Reunirme al ecosistema',
    },
  },

  fr: {
    verbes: ['Valoriser', 'Connecter', 'Construire'],
    triade: 'Valoriser · Connecter · Construire',
    qui: {
      surtitre: 'MUSIMA',
      titre: 'Ce qui se construit mérite de se rencontrer',
      texte: [
        'MUSIMA part d’un constat simple : beaucoup de personnes, de projets et d’initiatives construisent des choses qui comptent sans être forcément reliés les uns aux autres.',
        'Notre identité est ancrée dans la diaspora africaine et dans tout ce qu’elle crée, entreprend, innove et apporte. Mais notre action est ouverte à toutes les personnes et à toutes les organisations qui veulent découvrir, contribuer, collaborer ou construire.',
      ],
    },
    constat: {
      surtitre: 'Le point de départ',
      titre: 'L’opportunité n’est pas toujours loin. Parfois, elle est simplement déconnectée.',
      texte: [
        'Des personnes. Des idées. Des savoirs. Des ressources. Des opportunités.',
        'Tout cela existe. Et tout cela peut pourtant rester séparé : quelqu’un peut avoir une idée sans connaître la personne qui pourrait l’aider ; un projet peut chercher une compétence qui se trouve à quelques kilomètres ; une institution peut disposer de moyens sans atteindre celles et ceux qui pourraient s’en servir.',
      ],
      phrase: 'MUSIMA agit dans cet espace-là : entre ce qui existe et ce qui pourrait se rencontrer.',
    },
    role: {
      surtitre: 'Comment nous agissons',
      verbes: [
        { mot: 'Valoriser', texte: 'Rendre visible ce qui existe : des personnes, des parcours, des idées, des projets, des expériences, des initiatives.' },
        { mot: 'Connecter', texte: 'Créer des liens entre des personnes et des acteurs qui peuvent partager des savoirs, des ressources, des expériences et des opportunités.' },
        { mot: 'Construire', texte: 'Favoriser les collaborations et les initiatives qui transforment une connexion en quelque chose de concret et de durable.' },
      ],
    },
    manieres: [
      { titre: 'Donner de la visibilité', texte: 'Montrer des personnes, des projets et des initiatives qui méritent d’être connus, et faire naître de nouvelles connexions autour d’eux.' },
      { titre: 'Créer des rencontres', texte: 'Organiser des conversations, des conférences et d’autres formats pour réunir des personnes qui peuvent apprendre, partager ou collaborer.' },
      { titre: 'Faire circuler', texte: 'Faciliter l’échange de savoirs, d’expériences, de ressources, d’idées et d’opportunités.' },
      { titre: 'Favoriser les collaborations', texte: 'Créer les conditions pour qu’une conversation devienne une initiative, un projet, une collaboration ou une possibilité nouvelle.' },
    ],
    ecosysteme: {
      surtitre: 'Écosystème MUSIMA',
      titre: 'Personnes · Projets · Organisations',
      texte: 'MUSIMA veut construire peu à peu un écosystème de personnes, d’entreprises, d’associations, d’institutions, d’universités et de projets qui puissent se rencontrer, partager des ressources et des savoirs, collaborer et donner plus de force à ce qui se construit.',
      phrase: 'Tu n’as pas besoin d’appartenir à une communauté précise pour en faire partie. Tu peux apporter une idée, une expérience, une compétence, un contact, une ressource, un projet, ou simplement ton intérêt.',
      bouton: 'Rejoindre l’écosystème',
    },
  },

  en: {
    verbes: ['Value', 'Connect', 'Build'],
    triade: 'Value · Connect · Build',
    qui: {
      surtitre: 'MUSIMA',
      titre: 'What gets built deserves to meet',
      texte: [
        'MUSIMA starts from something simple: a lot of people, projects and initiatives are building valuable things without necessarily being connected to one another.',
        'Our identity is anchored in the African diaspora and in everything it creates, starts, innovates and brings. But what we do is open to anyone — and any organisation — who wants to discover, contribute, collaborate or build.',
      ],
    },
    constat: {
      surtitre: 'The starting point',
      titre: 'The opportunity isn’t always far away. Sometimes it is simply disconnected.',
      texte: [
        'People. Ideas. Knowledge. Resources. Opportunities.',
        'All of it exists. And all of it can stay apart: someone can have an idea without knowing the person who could help; a project can need a skill that sits a few kilometres away; an institution can hold resources without ever reaching the people who could use them.',
      ],
      phrase: 'MUSIMA works in that space — between what exists and what could meet.',
    },
    role: {
      surtitre: 'How we work',
      verbes: [
        { mot: 'Value', texte: 'Make visible what already exists: people, paths, ideas, projects, experience and initiatives.' },
        { mot: 'Connect', texte: 'Create links between people and organisations who can share knowledge, resources, experience and opportunities.' },
        { mot: 'Build', texte: 'Encourage the collaborations and initiatives that turn a connection into something concrete and lasting.' },
      ],
    },
    manieres: [
      { titre: 'Give visibility', texte: 'Show people, projects and initiatives worth knowing about, and let new connections form around them.' },
      { titre: 'Create gatherings', texte: 'Run conversations, talks and other formats that bring together people who can learn, share or work together.' },
      { titre: 'Keep things moving', texte: 'Make it easier to exchange knowledge, experience, resources, ideas and opportunities.' },
      { titre: 'Encourage collaboration', texte: 'Create the conditions for a conversation to become an initiative, a project, a collaboration or a new possibility.' },
    ],
    ecosysteme: {
      surtitre: 'The MUSIMA ecosystem',
      titre: 'People · Projects · Organisations',
      texte: 'MUSIMA wants to build, step by step, an ecosystem of people, companies, associations, institutions, universities and projects able to meet, share resources and knowledge, work together and give more strength to what gets built.',
      phrase: 'You don’t need to belong to a particular community to be part of it. You can bring an idea, an experience, a skill, a contact, a resource, a project — or simply your interest.',
      bouton: 'Join the ecosystem',
    },
  },

  ca: {
    verbes: ['Valoritzar', 'Connectar', 'Construir'],
    triade: 'Valoritzar · Connectar · Construir',
    qui: {
      surtitre: 'MUSIMA',
      titre: 'El que es construeix mereix trobar-se',
      texte: [
        'MUSIMA parteix d’una realitat senzilla: moltes persones, projectes i iniciatives estan construint coses valuoses sense estar necessàriament connectats entre si.',
        'La nostra identitat està ancorada en la diàspora africana i en tot el que crea, emprèn, innova i aporta. Però la nostra acció està oberta a totes les persones i organitzacions que vulguin descobrir, contribuir, col·laborar o construir.',
      ],
    },
    constat: {
      surtitre: 'El punt de partida',
      titre: 'L’oportunitat no sempre és lluny. De vegades està desconnectada.',
      texte: [
        'Persones. Idees. Coneixements. Recursos. Oportunitats.',
        'Tot això existeix. Tanmateix, pot quedar separat: una persona pot tenir una idea sense conèixer qui podria ajudar-la; un projecte pot necessitar una competència que hi ha a pocs quilòmetres; una institució pot disposar de recursos sense arribar a les persones que podrien fer-los servir.',
      ],
      phrase: 'MUSIMA actua en aquest espai entre el que existeix i el que es podria trobar.',
    },
    role: {
      surtitre: 'Com actuem',
      verbes: [
        { mot: 'Valoritzar', texte: 'Fer visible el que existeix: persones, trajectòries, idees, projectes, experiències i iniciatives.' },
        { mot: 'Connectar', texte: 'Crear connexions entre persones i actors que poden compartir coneixements, recursos, experiències i oportunitats.' },
        { mot: 'Construir', texte: 'Afavorir col·laboracions i iniciatives que puguin transformar una connexió en alguna cosa concreta i duradora.' },
      ],
    },
    manieres: [
      { titre: 'Donar visibilitat', texte: 'Mostrar persones, projectes i iniciatives que mereixen ser coneguts i generar noves connexions al seu voltant.' },
      { titre: 'Crear trobades', texte: 'Organitzar converses, conferències i altres formats per reunir persones que poden aprendre, compartir o col·laborar.' },
      { titre: 'Fer circular', texte: 'Facilitar l’intercanvi de coneixements, experiències, recursos, idees i oportunitats.' },
      { titre: 'Afavorir col·laboracions', texte: 'Crear les condicions perquè una conversa es pugui convertir en una iniciativa, un projecte, una col·laboració o una nova possibilitat.' },
    ],
    ecosysteme: {
      surtitre: 'Ecosistema MUSIMA',
      titre: 'Persones · Projectes · Organitzacions',
      texte: 'MUSIMA vol construir progressivament un ecosistema de persones, empreses, associacions, institucions, universitats i projectes que puguin trobar-se, compartir recursos i coneixements, col·laborar i donar més força al que es construeix.',
      phrase: 'No cal que pertanyis a una comunitat concreta per formar-ne part. Pots aportar una idea, una experiència, una competència, un contacte, un recurs, un projecte o simplement el teu interès.',
      bouton: 'Unir-me a l’ecosistema',
    },
  },
};
