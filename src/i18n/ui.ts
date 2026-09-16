import type { Langue } from './config';

/* ==================================================================
   MUSIMA — CHAÎNES D'INTERFACE
   ------------------------------------------------------------------
   Les quatre versions sont écrites, pas traduites automatiquement :
   chaque langue suit ses propres tournures. Le ton reste le même —
   direct, parlé, sans emphase artificielle.

   Les textes longs (association, pages légales) ne sont pas ici : ils
   vivent dans src/vues/textes/, un fichier par langue.
   ================================================================== */

type Dico = Record<Langue, string>;

export const ui = {
  /* ---------------- Ossature ---------------- */
  sauterAuContenu: {
    es: 'Ir al contenido', fr: 'Aller au contenu', en: 'Skip to content', ca: 'Vés al contingut',
  },
  accueilAria: {
    es: 'MUSIMA — inicio', fr: 'MUSIMA — accueil', en: 'MUSIMA — home', ca: 'MUSIMA — inici',
  },
  navPrincipale: {
    es: 'Navegación principal', fr: 'Navigation principale', en: 'Main navigation', ca: 'Navegació principal',
  },
  navPrincipaleMobile: {
    es: 'Navegación principal (móvil)', fr: 'Navigation principale (mobile)',
    en: 'Main navigation (mobile)', ca: 'Navegació principal (mòbil)',
  },
  navPied: { es: 'Pie de página', fr: 'Pied de page', en: 'Footer', ca: 'Peu de pàgina' },
  ouvrirMenu: { es: 'Abrir el menú', fr: 'Ouvrir le menu', en: 'Open menu', ca: 'Obre el menú' },
  fermerMenu: { es: 'Cerrar el menú', fr: 'Fermer le menu', en: 'Close menu', ca: 'Tanca el menú' },
  menuBouton: { es: 'Menú', fr: 'Menu', en: 'Menu', ca: 'Menú' },
  basculeTheme: {
    es: 'Cambiar entre tema claro y oscuro', fr: 'Changer de thème clair ou sombre',
    en: 'Switch between light and dark theme', ca: 'Canvia entre tema clar i fosc',
  },
  choisirLangue: { es: 'Elegir idioma', fr: 'Choisir la langue', en: 'Choose language', ca: 'Tria l’idioma' },
  langueActuelle: { es: 'Idioma actual', fr: 'Langue actuelle', en: 'Current language', ca: 'Idioma actual' },
  filDAriane: { es: 'Ruta de navegación', fr: 'Fil d’Ariane', en: 'Breadcrumb', ca: 'Ruta de navegació' },
  accueil: { es: 'Inicio', fr: 'Accueil', en: 'Home', ca: 'Inici' },

  /* ---------------- Navigation ---------------- */
  navAssociation: { es: 'La asociación', fr: 'Association', en: 'About', ca: 'L’associació' },
  navAssociationDesc: {
    es: 'La misión, la manera de trabajar y el equipo',
    fr: 'La mission, la démarche et l’équipe',
    en: 'What we do, how we work, who we are',
    ca: 'La missió, la manera de treballar i l’equip',
  },
  navEvenements: { es: 'Encuentros', fr: 'Événements', en: 'Events', ca: 'Trobades' },
  navEvenementsDesc: {
    es: 'Conferencias, encuentros y talleres',
    fr: 'Conférences, rencontres et ateliers',
    en: 'Talks, gatherings and workshops',
    ca: 'Conferències, trobades i tallers',
  },
  navIntervenants: { es: 'Ponentes', fr: 'Intervenants', en: 'Speakers', ca: 'Ponents' },
  navProjets: { es: 'Proyectos', fr: 'Projets', en: 'Projects', ca: 'Projectes' },
  navProjetsDesc: {
    es: 'Lo que la asociación está construyendo',
    fr: 'Ce que l’association construit',
    en: 'What the association is building',
    ca: 'El que l’associació està construint',
  },
  navRecits: { es: 'Relatos', fr: 'Récits', en: 'Stories', ca: 'Relats' },
  /* L'écosystème n'a pas de page à lui : l'entrée mène au bloc de
     l'accueil. Le jour où il y aura un annuaire à publier, le bloc
     deviendra une page et cette clé ne bougera pas. */
  navEcosysteme: { es: 'Ecosistema', fr: 'Écosystème', en: 'Ecosystem', ca: 'Ecosistema' },
  navEcosystemeDesc: {
    es: 'Personas, proyectos y organizaciones',
    fr: 'Des personnes, des projets, des organisations',
    en: 'People, projects and organisations',
    ca: 'Persones, projectes i organitzacions',
  },
  navGalerie: { es: 'Galería', fr: 'Galerie', en: 'Gallery', ca: 'Galeria' },
  navContact: { es: 'Contacto', fr: 'Contact', en: 'Contact', ca: 'Contacte' },
  navEngagement: { es: 'Participar', fr: 'S’engager', en: 'Get involved', ca: 'Participa' },
  navLegal: { es: 'Aviso legal', fr: 'Mentions légales', en: 'Legal notice', ca: 'Avís legal' },
  navConfidentialite: { es: 'Privacidad', fr: 'Confidentialité', en: 'Privacy', ca: 'Privacitat' },
  navCookies: { es: 'Cookies', fr: 'Cookies', en: 'Cookies', ca: 'Galetes' },
  navAccessibilite: { es: 'Accesibilidad', fr: 'Accessibilité', en: 'Accessibility', ca: 'Accessibilitat' },

  /* ---------------- Pied de page ---------------- */
  piedExplorer: { es: 'Explorar', fr: 'Explorer', en: 'Explore', ca: 'Explorar' },
  piedContact: { es: 'Contacto', fr: 'Contact', en: 'Contact', ca: 'Contacte' },
  piedSuivre: { es: 'Seguir', fr: 'Suivre', en: 'Follow', ca: 'Segueix-nos' },
  piedDroits: {
    es: 'Todos los derechos reservados.', fr: 'Tous droits réservés.',
    en: 'All rights reserved.', ca: 'Tots els drets reservats.',
  },
  infolettreTitre: {
    es: 'Mantente al día', fr: 'Rester au courant', en: 'Stay in the loop', ca: 'Estigues al dia',
  },
  infolettreTexte: {
    es: 'Los próximos encuentros, los nuevos retratos, lo que se va construyendo alrededor de MUSIMA. Unos pocos envíos al año, no más: no tenemos tiempo ni ganas de llenarte el buzón.',
    fr: 'Les prochaines rencontres, les nouveaux portraits, ce qui se construit autour de MUSIMA. Quelques envois par an, pas plus — on n’a ni le temps ni l’envie de t’encombrer.',
    en: 'Upcoming gatherings, new portraits, whatever is taking shape around MUSIMA. A handful of emails a year, no more — we have neither the time nor the wish to clutter your inbox.',
    ca: 'Les properes trobades, els nous retrats, el que es va construint al voltant de MUSIMA. Uns quants enviaments l’any, no més: no tenim ni temps ni ganes d’omplir-te la bústia.',
  },
  infolettreChamp: { es: 'Dirección de correo', fr: 'Adresse e-mail', en: 'Email address', ca: 'Adreça electrònica' },
  infolettreBouton: { es: 'Suscribirme', fr: 'S’inscrire', en: 'Subscribe', ca: 'Subscriu-m’hi' },
  infolettreConsentement: {
    es: 'Acepto recibir las novedades de MUSIMA. Puedes darte de baja con un clic en cada envío.',
    fr: 'J’accepte de recevoir les actualités de MUSIMA. Désinscription en un clic dans chaque envoi.',
    en: 'I agree to receive news from MUSIMA. One-click unsubscribe in every email.',
    ca: 'Accepto rebre les novetats de MUSIMA. Pots donar-te de baixa amb un clic a cada enviament.',
  },
  enSavoirPlus: { es: 'Más información', fr: 'En savoir plus', en: 'Learn more', ca: 'Més informació' },

  /* ---------------- Composants ---------------- */
  filtreTout: { es: 'Todo', fr: 'Tout', en: 'All', ca: 'Tot' },
  filtrerParDomaine: {
    es: 'Filtrar por ámbito', fr: 'Filtrer par domaine', en: 'Filter by field', ca: 'Filtra per àmbit',
  },
  resultatUn: { es: 'resultado', fr: 'résultat', en: 'result', ca: 'resultat' },
  resultatPlusieurs: { es: 'resultados', fr: 'résultats', en: 'results', ca: 'resultats' },

  /* ---------------- Accueil ---------------- */
  heroSurtitre: {
    es: 'Asociación · Barcelona, Cataluña', fr: 'Association · Barcelone, Catalogne',
    en: 'Association · Barcelona, Catalonia', ca: 'Associació · Barcelona, Catalunya',
  },
  /* Le titre n'est plus une phrase mais les trois verbes, empilés.
     La composition vit dans src/vues/Accueil.astro ; les mots eux-mêmes
     dans src/i18n/accueil.ts, d'où les reprend aussi la page Association. */
  heroChapo: {
    es: 'Hay personas que crean, emprenden, innovan y construyen cada día. Hay ideas, conocimientos, recursos y oportunidades. Pero no siempre se encuentran. MUSIMA crea las condiciones para que puedan circular, conectarse y dar lugar a nuevas posibilidades.',
    fr: 'Il y a des personnes qui créent, entreprennent, innovent et construisent chaque jour. Il y a des idées, des savoirs, des ressources et des opportunités. Mais elles ne se rencontrent pas toujours. MUSIMA crée les conditions pour qu’elles circulent, se connectent et donnent lieu à de nouvelles possibilités.',
    en: 'There are people creating, starting things, innovating and building every day. There are ideas, knowledge, resources and opportunities. They don’t always find each other. MUSIMA creates the conditions for them to travel, connect and open up new possibilities.',
    ca: 'Hi ha persones que creen, emprenen, innoven i construeixen cada dia. Hi ha idees, coneixements, recursos i oportunitats. Però no sempre es troben. MUSIMA crea les condicions perquè puguin circular, connectar-se i donar lloc a noves possibilitats.',
  },
  heroBoutonDecouvrir: {
    es: 'Descubrir MUSIMA', fr: 'Découvrir MUSIMA', en: 'Discover MUSIMA', ca: 'Descobrir MUSIMA',
  },
  heroBoutonParticiper: {
    es: 'Participar', fr: 'Participer', en: 'Take part', ca: 'Participar',
  },
  intentionsSurtitre: {
    es: 'Lo hacemos posible de distintas maneras', fr: 'On s’y prend de plusieurs façons',
    en: 'We make it happen in several ways', ca: 'Ho fem possible de diverses maneres',
  },
  intentionsTitre: {
    es: 'De una conexión puede surgir mucho más', fr: 'D’une connexion, il peut sortir bien plus',
    en: 'A connection can lead to much more', ca: 'D’una connexió en pot sortir molt més',
  },
  sectionRencontres: { es: 'Encuentros', fr: 'Rencontres', en: 'Gatherings', ca: 'Trobades' },
  prochaineRencontre: {
    es: 'Próximo encuentro', fr: 'Prochaine rencontre', en: 'Next gathering', ca: 'Propera trobada',
  },
  /* Titre de la section Rencontres sur l'accueil. Il ne porte plus la
     date : celle-ci est déjà dans les repères du héros et sur la carte
     juste en dessous, et le titre dit maintenant à quoi sert la section. */
  accueilRencontresTitre: {
    es: 'Nos encontramos para que algo pueda suceder',
    fr: 'On se retrouve pour que quelque chose puisse arriver',
    en: 'We meet so that something can happen',
    ca: 'Ens trobem perquè alguna cosa pugui passar',
  },
  /* Courtes introductions sous les titres de sections de l'accueil.
     Passées en enfants de <EnteteSection>, qui a gagné un emplacement. */
  introRencontres: {
    es: 'Las reuniones son una de las formas en las que MUSIMA actúa. Creamos encuentros alrededor de personas, experiencias, preguntas y proyectos que pueden abrir nuevas perspectivas y conexiones.',
    fr: 'Les rencontres sont l’une des formes que prend notre action. On crée des rendez-vous autour de personnes, d’expériences, de questions et de projets qui peuvent ouvrir des perspectives et des connexions nouvelles.',
    en: 'Gatherings are one of the ways we work. We build them around people, experiences, questions and projects that can open up new perspectives and new connections.',
    ca: 'Les trobades són una de les formes en què MUSIMA actua. Creem trobades al voltant de persones, experiències, preguntes i projectes que poden obrir noves perspectives i connexions.',
  },
  introVoix: {
    es: 'Emprendedores, profesionales, estudiantes, creadores, expertos y personas con una experiencia que compartir. Sus recorridos, aprendizajes e iniciativas pueden abrir nuevas perspectivas para otros.',
    fr: 'Des entrepreneurs, des professionnels, des étudiants, des créateurs, des experts, et des personnes qui ont une expérience à partager. Leurs parcours, leurs apprentissages et leurs initiatives peuvent ouvrir des perspectives à d’autres.',
    en: 'Entrepreneurs, professionals, students, makers, experts and people with an experience to share. Their paths, what they have learnt and what they are starting can open up perspectives for others.',
    ca: 'Emprenedors, professionals, estudiants, creadors, experts i persones amb una experiència per compartir. Els seus recorreguts, aprenentatges i iniciatives poden obrir noves perspectives per a altres.',
  },
  introProjets: {
    es: 'MUSIMA también se construye a través de proyectos, iniciativas y colaboraciones. Algunos están en marcha, otros nacen de una conexión y otros todavía están por desarrollar.',
    fr: 'MUSIMA se construit aussi à travers des projets, des initiatives et des collaborations. Certains sont en cours, d’autres naissent d’une connexion, d’autres restent à développer.',
    en: 'MUSIMA is also built through projects, initiatives and collaborations. Some are under way, some come out of a connection, some are still to be developed.',
    ca: 'MUSIMA també es construeix a través de projectes, iniciatives i col·laboracions. Alguns estan en marxa, d’altres neixen d’una connexió i d’altres encara estan per desenvolupar.',
  },
  introRecits: {
    es: 'Las conversaciones pasan, pero las ideas, experiencias y aprendizajes pueden seguir circulando. MUSIMA documenta y comparte parte de lo que surge para que pueda llegar más lejos.',
    fr: 'Les conversations passent, mais les idées, les expériences et les apprentissages peuvent continuer à circuler. MUSIMA documente et partage une partie de ce qui s’y dit, pour que ça puisse aller plus loin.',
    en: 'Conversations pass, but ideas, experience and lessons can keep travelling. MUSIMA documents and shares part of what comes up, so it can reach further.',
    ca: 'Les converses passen, però les idees, experiències i aprenentatges poden continuar circulant. MUSIMA documenta i comparteix part del que en surt perquè pugui arribar més lluny.',
  },
  tousLesEvenements: {
    es: 'Ver próximos encuentros', fr: 'Voir les prochaines rencontres',
    en: 'See upcoming gatherings', ca: 'Veure les properes trobades',
  },
  sectionVoix: { es: 'Voces', fr: 'Voix', en: 'Voices', ca: 'Veus' },
  ceuxQuiParlent: {
    es: 'Personas que están construyendo', fr: 'Des personnes qui construisent',
    en: 'People who are building', ca: 'Persones que estan construint',
  },
  tousLesIntervenants: {
    es: 'Conocer las voces', fr: 'Découvrir les voix', en: 'Meet the voices', ca: 'Conèixer les veus',
  },
  /* Surtitres et titres des rubriques Projets et Récits, partagés entre
     l'accueil et la page de rubrique : ce sont les mêmes mots aux deux
     endroits, volontairement. */
  projetsSurtitre: {
    es: 'Proyectos e iniciativas', fr: 'Projets et initiatives',
    en: 'Projects and initiatives', ca: 'Projectes i iniciatives',
  },
  projetsTitre: {
    es: 'Lo que estamos construyendo', fr: 'Ce que nous construisons',
    en: 'What we are building', ca: 'El que estem construint',
  },
  recitsSurtitre: {
    es: 'Ideas y experiencias', fr: 'Idées et expériences',
    en: 'Ideas and experience', ca: 'Idees i experiències',
  },
  recitsTitre: {
    es: 'Lo que compartimos permanece', fr: 'Ce qu’on partage reste',
    en: 'What we share stays', ca: 'El que compartim queda',
  },
  accueilRecitsLien: {
    es: 'Explorar contenidos', fr: 'Explorer les contenus',
    en: 'Explore the writing', ca: 'Explorar continguts',
  },
  tousLesProjets: {
    es: 'Descubrir los proyectos', fr: 'Découvrir les projets',
    en: 'See the projects', ca: 'Descobrir els projectes',
  },
  tousLesRecits: { es: 'Todos los relatos', fr: 'Tous les récits', en: 'All stories', ca: 'Tots els relats' },

  /* ---------------- Bandeau d'appel ----------------
     Le même au bas de l'accueil, de la page Association et des pages
     Projets : une seule invitation, dite une seule fois. */
  ctaAporterSurtitre: { es: 'Participar', fr: 'Participer', en: 'Take part', ca: 'Participar' },
  ctaAporterTitre: {
    es: '¿Qué puedes aportar?', fr: 'Qu’est-ce que tu peux apporter ?',
    en: 'What can you bring?', ca: 'Què hi pots aportar?',
  },
  ctaAporterTexte: {
    es: 'Una idea. Una experiencia. Una competencia. Un contacto. Un recurso. Un proyecto. O simplemente las ganas de conocer a otras personas y descubrir nuevas posibilidades. MUSIMA se construye con quienes participan.',
    fr: 'Une idée. Une expérience. Une compétence. Un contact. Une ressource. Un projet. Ou simplement l’envie de rencontrer d’autres personnes et de découvrir de nouvelles possibilités. MUSIMA se construit avec celles et ceux qui participent.',
    en: 'An idea. An experience. A skill. A contact. A resource. A project. Or simply the wish to meet other people and find new possibilities. MUSIMA is built with the people who take part.',
    ca: 'Una idea. Una experiència. Una competència. Un contacte. Un recurs. Un projecte. O simplement les ganes de conèixer altres persones i descobrir noves possibilitats. MUSIMA es construeix amb qui hi participa.',
  },
  ctaCommentParticiper: {
    es: 'Cómo participar', fr: 'Comment participer',
    en: 'How to take part', ca: 'Com participar-hi',
  },
  ctaContacter: { es: 'Contactar', fr: 'Nous contacter', en: 'Get in touch', ca: 'Contactar' },

  ctaNousEcrire: { es: 'Escríbenos', fr: 'Nous écrire', en: 'Write to us', ca: 'Escriu-nos' },

  /* ---------------- Événements ---------------- */
  evenementsChapo: {
    es: 'Aquí están las próximas fechas y las que ya pasaron. Cada encuentro reúne a personas que pueden aprender algo unas de otras.',
    fr: 'Les prochaines dates, et celles qui ont déjà eu lieu. Chaque rencontre réunit des personnes qui peuvent apprendre quelque chose les unes des autres.',
    en: 'The upcoming dates, and the ones already behind us. Each gathering brings together people who can learn something from one another.',
    ca: 'Aquí hi ha les properes dates i les que ja han passat. Cada trobada reuneix persones que poden aprendre alguna cosa les unes de les altres.',
  },
  /* Corps de texte des quatre pages de rubrique, sous le chapô. Chaque
     page dit ce qu'on y trouve et comment c'est fait ; le pourquoi est
     sur l'accueil et la page Association, on ne le répète pas ici. */
  evenementsCorpsA: {
    es: 'Un encuentro de MUSIMA suele empezar con una o varias personas que cuentan lo que están construyendo —un proyecto, una trayectoria, una idea— y sigue con las preguntas de la sala. Después nos quedamos: buena parte de las conexiones nacen ahí, cuando termina lo programado.',
    fr: 'Une rencontre MUSIMA commence en général par une ou plusieurs personnes qui racontent ce qu’elles construisent — un projet, un parcours, une idée — et se poursuit avec les questions de la salle. Ensuite, on reste : une bonne part des connexions se nouent là, une fois le programme terminé.',
    en: 'A MUSIMA gathering usually starts with one or more people talking about what they are building — a project, a path, an idea — and carries on with questions from the room. Then we stay: a good part of the connections are made there, once the programme is over.',
    ca: 'Una trobada de MUSIMA sol començar amb una o diverses persones que expliquen el que estan construint —un projecte, una trajectòria, una idea— i continua amb les preguntes de la sala. Després ens quedem: bona part de les connexions neixen allà, quan s’acaba el programa.',
  },
  evenementsCorpsB: {
    es: 'No es un fin en sí mismo. Lo que buscamos es que de una tarde salga algo que dure: un contacto, una colaboración, una idea que sigue su camino.',
    fr: 'Ce n’est pas une fin en soi. Ce qu’on cherche, c’est qu’il sorte d’une soirée quelque chose qui dure : un contact, une collaboration, une idée qui poursuit son chemin.',
    en: 'It is not an end in itself. What we are after is that something lasting comes out of an evening: a contact, a collaboration, an idea that keeps going.',
    ca: 'No és un fi en si mateixa. El que busquem és que d’una tarda en surti alguna cosa que duri: un contacte, una col·laboració, una idea que segueix el seu camí.',
  },
  intervenantsCorpsA: {
    es: 'Emprendedores, profesionales, estudiantes, creadores, expertos: personas con una trayectoria, un proyecto o una experiencia que puede servir a otros. Cada ficha dice quién es y qué está construyendo.',
    fr: 'Entrepreneurs, professionnels, étudiants, créateurs, experts : des personnes avec un parcours, un projet ou une expérience qui peut servir à d’autres. Chaque fiche dit qui elles sont et ce qu’elles construisent.',
    en: 'Entrepreneurs, professionals, students, makers, experts: people with a path, a project or an experience that can be useful to others. Each profile says who they are and what they are building.',
    ca: 'Emprenedors, professionals, estudiants, creadors, experts: persones amb una trajectòria, un projecte o una experiència que pot servir a altres. Cada fitxa diu qui són i què estan construint.',
  },
  intervenantsCorpsB: {
    es: 'No buscamos la versión pulida. Lo que interesa es el recorrido: lo que funcionó, lo que costó, lo que se aprendió por el camino.',
    fr: 'On ne cherche pas la version lisse. Ce qui compte, c’est le chemin : ce qui a marché, ce qui a coûté, ce qu’on a appris en route.',
    en: 'We are not after the polished version. What matters is the road: what worked, what it cost, what was learnt along the way.',
    ca: 'No busquem la versió polida. El que interessa és el recorregut: el que va funcionar, el que va costar, el que es va aprendre pel camí.',
  },
  projetsCorpsA: {
    es: 'No está todo terminado, y no lo disimulamos. Cada proyecto dice en qué punto está, quién está detrás y con quién se construye.',
    fr: 'Tout n’est pas terminé, et on ne fait pas semblant. Chaque projet dit où il en est, qui est derrière et avec qui il se construit.',
    en: 'Not everything is finished, and we don’t pretend otherwise. Each project says where it stands, who is behind it and who it is being built with.',
    ca: 'No està tot acabat, i no ho dissimulem. Cada projecte diu en quin punt és, qui hi ha al darrere i amb qui es construeix.',
  },
  projetsCorpsB: {
    es: 'Algunos proyectos son de MUSIMA. Otros pueden venir de personas u organizaciones del ecosistema, o nacer de una conexión hecha en un encuentro. En todos los casos la idea es la misma: pasar de la conversación a algo concreto.',
    fr: 'Certains projets sont ceux de MUSIMA. D’autres peuvent venir de personnes ou d’organisations de l’écosystème, ou naître d’une connexion faite lors d’une rencontre. Dans tous les cas, l’idée est la même : passer de la conversation à quelque chose de concret.',
    en: 'Some projects are MUSIMA’s own. Others may come from people or organisations in the ecosystem, or grow out of a connection made at a gathering. Either way, the idea is the same: to move from conversation to something concrete.',
    ca: 'Alguns projectes són de MUSIMA. D’altres poden venir de persones o organitzacions de l’ecosistema, o néixer d’una connexió feta en una trobada. En tots els casos, la idea és la mateixa: passar de la conversa a alguna cosa concreta.',
  },
  recitsCorpsA: {
    es: 'Escribimos parte de lo que surge en los encuentros y alrededor de ellos. La intención es sencilla: alguien que no estaba allí tiene que poder sacar algo de aquí.',
    fr: 'On écrit une partie de ce qui émerge dans les rencontres et autour d’elles. L’intention est simple : quelqu’un qui n’y était pas doit pouvoir en tirer quelque chose.',
    en: 'We write down part of what comes up at the gatherings and around them. The intention is simple: someone who wasn’t there should be able to take something away.',
    ca: 'Escrivim part del que sorgeix a les trobades i al seu voltant. La intenció és senzilla: algú que no hi era ha de poder treure’n alguna cosa.',
  },
  recitsCorpsB: {
    es: 'Son textos, no notas de prensa. Dejamos dentro las dudas y las contradicciones, porque suele ser ahí donde está lo que sirve.',
    fr: 'Ce sont des textes, pas des communiqués. On y garde les hésitations et les contradictions, parce que c’est souvent là que se trouve ce qui sert.',
    en: 'These are pieces of writing, not press releases. We keep the hesitations and the contradictions in, because that is often where the useful part is.',
    ca: 'Són textos, no notes de premsa. Hi deixem els dubtes i les contradiccions, perquè sol ser aquí on hi ha el que serveix.',
  },

  aVenir: { es: 'Próximamente', fr: 'À venir', en: 'Upcoming', ca: 'Properament' },
  rencontresProgrammees: {
    es: 'encuentros programados', fr: 'rencontres programmées',
    en: 'gatherings scheduled', ca: 'trobades programades',
  },
  archives: { es: 'Archivo', fr: 'Archives', en: 'Archive', ca: 'Arxiu' },
  rencontresPassees: {
    es: 'Encuentros anteriores', fr: 'Rencontres passées', en: 'Past gatherings', ca: 'Trobades anteriors',
  },
  aucuneRencontreTitre: {
    es: 'Ningún encuentro programado por ahora',
    fr: 'Aucune rencontre programmée pour le moment',
    en: 'No gathering scheduled right now',
    ca: 'Cap trobada programada de moment',
  },
  aucuneRencontreTexte: {
    es: 'Las próximas fechas se publicarán aquí. Para enterarte, suscríbete al boletín al pie de la página.',
    fr: 'Les prochaines dates seront publiées ici. Pour être prévenu, inscris-toi à l’infolettre en bas de page.',
    en: 'Upcoming dates will appear here. To hear about them, sign up to the newsletter at the bottom of the page.',
    ca: 'Les properes dates es publicaran aquí. Per assabentar-te’n, subscriu-te al butlletí al peu de la pàgina.',
  },
  infosProjet: {
    es: 'Información del proyecto', fr: 'Informations sur le projet',
    en: 'Project details', ca: 'Informació del projecte',
  },
  infosPratiques: {
    es: 'Información práctica', fr: 'Informations pratiques', en: 'Practical details', ca: 'Informació pràctica',
  },
  labelDate: { es: 'Fecha', fr: 'Date', en: 'Date', ca: 'Data' },
  labelHoraire: { es: 'Horario', fr: 'Horaire', en: 'Time', ca: 'Horari' },
  labelLieu: { es: 'Lugar', fr: 'Lieu', en: 'Venue', ca: 'Lloc' },
  labelFormat: { es: 'Formato', fr: 'Format', en: 'Format', ca: 'Format' },
  labelTarif: { es: 'Precio', fr: 'Tarif', en: 'Price', ca: 'Preu' },
  labelAcces: {
    es: 'Accesibilidad', fr: 'Accessibilité', en: 'Accessibility', ca: 'Accessibilitat',
  },
  labelTransport: {
    es: 'Parada más cercana', fr: 'Arrêt le plus proche',
    en: 'Nearest stop', ca: 'Parada més propera',
  },
  accesPmr: {
    es: 'Accesible para personas con movilidad reducida',
    fr: 'Accessible aux personnes à mobilité réduite',
    en: 'Accessible to people with reduced mobility',
    ca: 'Accessible per a persones amb mobilitat reduïda',
  },
  /* Le libellé porte l'adresse : lu hors contexte par un lecteur d'écran,
     « ouvrir sur Google Maps » ne dirait pas de quel lieu il s'agit.
     {adresse} est remplacé à l'affichage. */
  voirSurCarte: {
    es: 'Abrir {adresse} en Google Maps',
    fr: 'Ouvrir {adresse} sur Google Maps',
    en: 'Open {adresse} in Google Maps',
    ca: 'Obrir {adresse} a Google Maps',
  },
  /* L'avertissement complète le nom du lien pour qui l'entend, sans
     ajouter une troisième ligne dans une colonne de 20rem. */
  nouvelOnglet: {
    es: '(se abre en una pestaña nueva)',
    fr: '(s’ouvre dans un nouvel onglet)',
    en: '(opens in a new tab)',
    ca: '(s’obre en una pestanya nova)',
  },
  infolettreNom: {
    es: 'Nombre (opcional)', fr: 'Prénom (facultatif)',
    en: 'First name (optional)', ca: 'Nom (opcional)',
  },

  sInscrire: { es: 'Guarda tu sitio', fr: 'Garde ta place', en: 'Save your seat', ca: 'Guarda el teu lloc' },
  surScene: { es: 'En el escenario', fr: 'Sur scène', en: 'On stage', ca: 'A l’escenari' },
  lesIntervenants: { es: 'Los ponentes', fr: 'Les intervenants', en: 'The speakers', ca: 'Els ponents' },
  lIntervenant: { es: 'El ponente', fr: 'L’intervenant·e', en: 'The speaker', ca: 'El ponent' },
  rencontrePassee: { es: 'Encuentro pasado', fr: 'Rencontre passée', en: 'Past gathering', ca: 'Trobada passada' },
  passe: { es: 'Pasado', fr: 'Passé', en: 'Past', ca: 'Passat' },
  complet: { es: 'Completo', fr: 'Complet', en: 'Full', ca: 'Complet' },
  enLigne: { es: 'En línea', fr: 'En ligne', en: 'Online', ca: 'En línia' },
  ctaProposerSurtitre: { es: 'Proponer', fr: 'Proposer', en: 'Propose', ca: 'Proposar' },
  ctaProposerTitre: {
    es: '¿Una experiencia, un espacio, una colaboración?',
    fr: 'Une expérience, un lieu, une collaboration ?',
    en: 'An experience, a venue, a collaboration?',
    ca: 'Una experiència, un espai, una col·laboració?',
  },
  ctaProposerTexte: {
    es: 'Los encuentros se construyen con personas que tienen una experiencia que compartir, con espacios que los acogen y con quienes echan una mano el día mismo.',
    fr: 'Les rencontres se construisent avec des personnes qui ont une expérience à partager, des lieux qui les accueillent, et celles et ceux qui donnent un coup de main le jour même.',
    en: 'Gatherings are built with people who have an experience to share, places that host them, and those who lend a hand on the day.',
    ca: 'Les trobades es construeixen amb persones que tenen una experiència per compartir, amb espais que les acullen i amb qui dona un cop de mà el dia mateix.',
  },

  /* ---------------- Intervenants ---------------- */
  intervenantsChapo: {
    es: 'Las personas invitadas a tomar la palabra en un encuentro de MUSIMA, y lo que están construyendo.',
    fr: 'Les personnes invitées à prendre la parole lors d’une rencontre MUSIMA, et ce qu’elles construisent.',
    en: 'The people invited to speak at a MUSIMA gathering, and what they are building.',
    ca: 'Les persones convidades a prendre la paraula en una trobada de MUSIMA, i el que estan construint.',
  },
  aucunIntervenantTitre: {
    es: 'Las primeras fichas están en camino', fr: 'Les premières fiches arrivent',
    en: 'The first profiles are on their way', ca: 'Les primeres fitxes estan en camí',
  },
  aucunIntervenantTexte: {
    es: 'Cada persona invitada por MUSIMA tendrá su ficha.',
    fr: 'Chaque personne invitée par MUSIMA aura sa fiche.',
    en: 'Everyone MUSIMA invites will have a profile.',
    ca: 'Cada persona convidada per MUSIMA tindrà la seva fitxa.',
  },
  portraitDe: { es: 'Retrato de', fr: 'Portrait de', en: 'Portrait of', ca: 'Retrat de' },
  participations: { es: 'Participaciones', fr: 'Participations', en: 'Appearances', ca: 'Participacions' },
  rencontresMusima: {
    es: 'Encuentros de MUSIMA', fr: 'Rencontres MUSIMA',
    en: 'MUSIMA gatherings', ca: 'Trobades de MUSIMA',
  },
  aLire: { es: 'Para leer', fr: 'À lire', en: 'Worth reading', ca: 'Per llegir' },
  recitsLies: {
    es: 'Relatos relacionados', fr: 'Récits liés',
    en: 'Related stories', ca: 'Relats relacionats',
  },
  dansCeRecit: { es: 'En este relato', fr: 'Dans ce récit', en: 'In this story', ca: 'En aquest relat' },
  personnesCitees: {
    es: 'Las personas citadas', fr: 'Les personnes citées',
    en: 'The people mentioned', ca: 'Les persones citades',
  },
  aLireEnsuite: {
    es: 'Para seguir leyendo', fr: 'À lire ensuite',
    en: 'Read next', ca: 'Per continuar llegint',
  },
  autresRecits: { es: 'Otros relatos', fr: 'Autres récits', en: 'Other stories', ca: 'Altres relats' },
  ficheModele: {
    es: 'Ficha de demostración — sustitúyela o bórrala en el CMS.',
    fr: 'Fiche de démonstration — à remplacer ou supprimer dans le CMS.',
    en: 'Demo entry — replace or delete it in the CMS.',
    ca: 'Fitxa de demostració — substitueix-la o esborra-la al CMS.',
  },
  photoCredit: { es: 'Foto', fr: 'Photo', en: 'Photo', ca: 'Foto' },
  portraitCredit: { es: 'Retrato', fr: 'Portrait', en: 'Portrait', ca: 'Retrat' },

  /* ---------------- Projets ---------------- */
  projetsChapo: {
    es: 'Lo que MUSIMA lleva o acompaña, con el estado real de cada cosa.',
    fr: 'Ce que MUSIMA porte ou accompagne, avec l’état réel de chaque chose.',
    en: 'What MUSIMA runs or supports, with the real state of each thing.',
    ca: 'El que MUSIMA duu o acompanya, amb l’estat real de cada cosa.',
  },
  aucunProjetTitre: {
    es: 'Los proyectos se presentarán aquí', fr: 'Les projets seront présentés ici',
    en: 'Projects will be presented here', ca: 'Els projectes es presentaran aquí',
  },
  aucunProjetTexte: {
    es: 'Cada proyecto que MUSIMA lleve o acompañe quedará documentado: intención, avance, colaboradores.',
    fr: 'Chaque projet porté ou accompagné par MUSIMA sera documenté : intention, avancement, partenaires.',
    en: 'Every project MUSIMA runs or supports will be documented: intention, progress, partners.',
    ca: 'Cada projecte que MUSIMA dugui o acompanyi quedarà documentat: intenció, avenç, col·laboradors.',
  },
  labelProjet: { es: 'Proyecto', fr: 'Projet', en: 'Project', ca: 'Projecte' },
  voirLeProjet: { es: 'Ver el proyecto', fr: 'Voir le projet', en: 'See the project', ca: 'Veure el projecte' },
  impliques: { es: 'Implicados', fr: 'Impliqués', en: 'Involved', ca: 'Implicats' },
  personnesDuProjet: {
    es: 'Las personas del proyecto', fr: 'Les personnes du projet',
    en: 'The people behind it', ca: 'Les persones del projecte',
  },
  commentAider: {
    es: '¿Quieres echar una mano en esto?', fr: 'Envie de donner un coup de main ?',
    en: 'Want to pitch in on this?', ca: 'Vols donar-hi un cop de mà?',
  },
  labelPartenaires: { es: 'Colaboradores', fr: 'Partenaires', en: 'Partners', ca: 'Col·laboradors' },

  /* ---------------- Récits ---------------- */
  recitsChapo: {
    es: 'Retratos, crónicas de encuentros, ideas y análisis: lo que MUSIMA pone por escrito para que llegue más lejos que la sala.',
    fr: 'Portraits, retours de rencontres, idées et analyses : ce que MUSIMA met par écrit pour que ça aille plus loin que la salle.',
    en: 'Portraits, write-ups of gatherings, ideas and analysis: what MUSIMA puts in writing so it travels further than the room.',
    ca: 'Retrats, cròniques de trobades, idees i anàlisis: el que MUSIMA posa per escrit perquè arribi més lluny que la sala.',
  },
  aucunRecitTitre: {
    es: 'Los primeros relatos están por llegar', fr: 'Les premiers récits sont à venir',
    en: 'The first stories are coming', ca: 'Els primers relats estan per arribar',
  },
  aucunRecitTexte: {
    es: 'Retratos, crónicas de encuentros y análisis: lo que publique MUSIMA aparecerá aquí.',
    fr: 'Portraits, retours de rencontres et analyses : les contenus publiés par MUSIMA apparaîtront ici.',
    en: 'Portraits, write-ups and analysis: whatever MUSIMA publishes will show up here.',
    ca: 'Retrats, cròniques de trobades i anàlisis: el que publiqui MUSIMA apareixerà aquí.',
  },
  parAuteur: { es: 'Por', fr: 'Par', en: 'By', ca: 'Per' },

  /* ---------------- Galerie ---------------- */
  galerieChapo: {
    es: 'Lo que pasó, en imágenes. Cada álbum reúne las fotos de un encuentro o de un proyecto.',
    fr: 'Ce qui s’est passé, en images. Chaque album regroupe les photos d’une rencontre ou d’un projet.',
    en: 'What happened, in pictures. Each album gathers the photos of one gathering or project.',
    ca: 'El que va passar, en imatges. Cada àlbum recull les fotos d’una trobada o d’un projecte.',
  },
  aucunAlbumTitre: {
    es: 'Todavía no hay álbumes', fr: 'Pas encore d’album', en: 'No albums yet', ca: 'Encara no hi ha àlbums',
  },
  aucunAlbumTexte: {
    es: 'Las fotos del primer encuentro se publicarán aquí.',
    fr: 'Les photos de la première rencontre seront publiées ici.',
    en: 'Photos from the first gathering will be published here.',
    ca: 'Les fotos de la primera trobada es publicaran aquí.',
  },

  /* ---------------- Compte à rebours ----------------
     Formulation neutre, jamais pressante : « Dans 16 jours », pas
     « il ne reste que 16 jours ». Aucune langue n'emploie de
     vocabulaire d'urgence. */
  rebourPrefixe: { es: 'Dentro de', fr: 'Dans', en: 'In', ca: 'D’aquí a' },
  rebourMaintenant: {
    es: 'Es ahora', fr: 'C’est maintenant', en: 'Happening now', ca: 'És ara',
  },
  /* La phrase lue par les lecteurs d'écran. {reste} vaut « 16 jours ». */
  rebourPhrase: {
    es: 'El encuentro es dentro de {reste}.',
    fr: 'La rencontre a lieu dans {reste}.',
    en: 'The gathering is in {reste}.',
    ca: 'La trobada és d’aquí a {reste}.',
  },
  unite_jour: { es: 'día', fr: 'jour', en: 'day', ca: 'dia' },
  unite_jour_p: { es: 'días', fr: 'jours', en: 'days', ca: 'dies' },
  unite_heure: { es: 'hora', fr: 'heure', en: 'hour', ca: 'hora' },
  unite_heure_p: { es: 'horas', fr: 'heures', en: 'hours', ca: 'hores' },
  unite_minute: { es: 'minuto', fr: 'minute', en: 'minute', ca: 'minut' },
  unite_minute_p: { es: 'minutos', fr: 'minutes', en: 'minutes', ca: 'minuts' },

  albumSurtitre: { es: 'Álbum', fr: 'Album', en: 'Album', ca: 'Àlbum' },
  /* Surtitre et pastille d'un album antérieur à MUSIMA. */
  albumArchive: { es: 'Archivo', fr: 'Archives', en: 'Archive', ca: 'Arxiu' },
  albumArchiveNote: {
    es: 'Imágenes anteriores a MUSIMA',
    fr: 'Images antérieures à MUSIMA',
    en: 'Images from before MUSIMA',
    ca: 'Imatges anteriors a MUSIMA',
  },
  albumRencontre: {
    es: 'Ver el encuentro', fr: 'Voir la rencontre associée',
    en: 'See the related gathering', ca: 'Veure la trobada',
  },
  mosaiqueAide: {
    es: 'Toca una foto para verla en grande.',
    fr: 'Touchez une photo pour la voir en grand.',
    en: 'Tap a photo to see it full size.',
    ca: 'Toca una foto per veure-la en gran.',
  },

  /* Image de la section « Quatre choses, concrètement ». */
  traceAlt: {
    es: 'Unas manos oscuras sostienen un cuaderno de rayas abierto y escriben en él con un bolígrafo negro, sobre ropa oscura.',
    fr: 'Des mains sombres tiennent un carnet ligné ouvert et y écrivent au stylo noir, sur des vêtements sombres.',
    en: 'Dark-skinned hands holding an open lined notebook and writing in it with a black pen, against dark clothing.',
    ca: 'Unes mans fosques sostenen una llibreta ratllada oberta i hi escriuen amb un bolígraf negre, sobre roba fosca.',
  },

  /* Image d'en-tête de la page Récits. */
  relatosAlt: {
    es: 'Una mano escribe con estilográfica en un cuaderno abierto sobre un mantel de lino, en una luz cálida y rasante que proyecta sombras largas.',
    fr: 'Une main écrit au stylo-plume sur un carnet ouvert posé sur une nappe de lin, dans une lumière chaude et rasante qui étire les ombres.',
    en: 'A hand writing with a fountain pen in an open notebook on a linen tablecloth, in warm raking light that stretches the shadows.',
    ca: 'Una mà escriu amb ploma estilogràfica en una llibreta oberta sobre unes estovalles de lli, amb una llum càlida i rasant que allarga les ombres.',
  },

  /* Photo d'ouverture de l'accueil. */
  ouvertureAlt: {
    es: 'Una mujer joven de pelo rizado recogido, con chaqueta de punto color crema, trabaja en su portátil ante una mesa blanca; a su lado, una taza y un cuaderno con un bolígrafo dorado.',
    fr: 'Une jeune femme aux cheveux bouclés relevés, en gilet crème, travaille sur son ordinateur portable devant une table blanche ; à côté d’elle, une tasse et un carnet posé avec un stylo doré.',
    en: 'A young woman with her curly hair tied up, in a cream cardigan, working at her laptop at a white table; beside her, a mug and a notebook with a gold pen resting on it.',
    ca: 'Una dona jove amb els cabells arrissats recollits, amb jaqueta de punt color crema, treballa al portàtil davant d’una taula blanca; al seu costat, una tassa i una llibreta amb un bolígraf daurat.',
  },

  /* ---------------- Visionneuse ---------------- */
  visionneuseTitre: {
    es: 'Visor de fotos', fr: 'Visionneuse', en: 'Photo viewer', ca: 'Visor de fotos',
  },
  visionneuseFermer: { es: 'Cerrar', fr: 'Fermer', en: 'Close', ca: 'Tanca' },
  visionneusePrec: {
    es: 'Foto anterior', fr: 'Photo précédente', en: 'Previous photo', ca: 'Foto anterior',
  },
  visionneuseSuiv: {
    es: 'Foto siguiente', fr: 'Photo suivante', en: 'Next photo', ca: 'Foto següent',
  },
  /* {i} et {n} sont remplacés à l'affichage. */
  visionneuseCompteur: {
    es: 'Foto {i} de {n}', fr: 'Photo {i} sur {n}', en: 'Photo {i} of {n}', ca: 'Foto {i} de {n}',
  },

  /* ---------------- 404 ---------------- */
  erreurSurtitre: { es: 'Error 404', fr: 'Erreur 404', en: 'Error 404', ca: 'Error 404' },
  erreurTitre: {
    es: 'Esta página no existe', fr: 'Cette page n’existe pas',
    en: 'This page does not exist', ca: 'Aquesta pàgina no existeix',
  },
  erreurTexte: {
    es: 'Puede que el enlace esté mal escrito, o que la página se haya movido. Desde el inicio se llega a todo.',
    fr: 'Le lien est peut-être mal orthographié, ou la page a été déplacée. Depuis l’accueil, on retrouve tout.',
    en: 'The link may be mistyped, or the page may have moved. Everything is reachable from the home page.',
    ca: 'Potser l’enllaç està mal escrit, o la pàgina s’ha mogut. Des de l’inici s’hi arriba a tot.',
  },
  retourAccueil: { es: 'Volver al inicio', fr: 'Retour à l’accueil', en: 'Back to home', ca: 'Torna a l’inici' },
} as const satisfies Record<string, Dico>;

export type CleUi = keyof typeof ui;

/** Le traducteur d'une page : `const t = traducteur(langue)` puis `t('accueil')`. */
export const traducteur = (langue: Langue) => (cle: CleUi) => ui[cle][langue];
