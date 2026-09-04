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
  menuApercu: { es: 'Vista previa', fr: 'Aperçu', en: 'Preview', ca: 'Vista prèvia' },
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
  navIntervenantsDesc: {
    es: 'Quienes toman la palabra',
    fr: 'Celles et ceux qui prennent la parole',
    en: 'The people who speak',
    ca: 'Qui pren la paraula',
  },
  navProjets: { es: 'Proyectos', fr: 'Projets', en: 'Projects', ca: 'Projectes' },
  navProjetsDesc: {
    es: 'Lo que la asociación está construyendo',
    fr: 'Ce que l’association construit',
    en: 'What the association is building',
    ca: 'El que l’associació està construint',
  },
  navRecits: { es: 'Relatos', fr: 'Récits', en: 'Stories', ca: 'Relats' },
  navRecitsDesc: {
    es: 'Retratos, crónicas y análisis',
    fr: 'Portraits, retours et analyses',
    en: 'Portraits, write-ups and analysis',
    ca: 'Retrats, cròniques i anàlisis',
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
    fr: 'Les prochaines rencontres, les nouveaux portraits, ce qui se construit autour de MUSIMA. Quelques envois par an, pas plus — on n’a ni le temps ni l’envie de vous encombrer.',
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
  badgeModele: { es: 'Plantilla', fr: 'Modèle', en: 'Template', ca: 'Plantilla' },
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
  heroTitre1: { es: 'Dar luz a lo que los', fr: 'Mettre en lumière ce que les', en: 'Shining a light on what', ca: 'Donar llum al que els' },
  heroTitreAccent: { es: 'africanos', fr: 'Africains', en: 'Africans', ca: 'africans' },
  heroTitre2: { es: 'están construyendo.', fr: 'construisent.', en: 'are building.', ca: 'estan construint.' },
  heroChapo: {
    es: 'MUSIMA da luz a personas, trayectorias, proyectos e iniciativas de africanos que emprenden, crean, innovan y aportan valor en sus ámbitos.',
    fr: 'MUSIMA met en lumière des personnes, des parcours, des projets et des initiatives d’Africains qui entreprennent, créent, innovent et apportent de la valeur dans leurs domaines.',
    en: 'MUSIMA shines a light on the people, paths, projects and initiatives of Africans who start things, create, innovate and add value in their fields.',
    ca: 'MUSIMA dona llum a persones, trajectòries, projectes i iniciatives d’africans que emprenen, creen, innoven i aporten valor en els seus àmbits.',
  },
  heroBoutonEvenements: {
    es: 'Ver los encuentros', fr: 'Voir les rencontres', en: 'See the gatherings', ca: 'Veure les trobades',
  },
  heroBoutonProchain: {
    es: 'Ven al próximo', fr: 'Venez à la prochaine',
    en: 'Come to the next one', ca: 'Vine a la propera',
  },
  heroBoutonAssociation: {
    es: 'Conocer la asociación', fr: 'Découvrir l’association', en: 'About the association', ca: 'Conèixer l’associació',
  },
  intentionsSurtitre: {
    es: 'Lo que hace MUSIMA', fr: 'Ce que fait MUSIMA', en: 'What MUSIMA does', ca: 'El que fa MUSIMA',
  },
  intentionsTitre: {
    es: 'Cuatro cosas, en concreto', fr: 'Quatre choses, concrètement',
    en: 'Four things, concretely', ca: 'Quatre coses, en concret',
  },
  sectionRencontres: { es: 'Encuentros', fr: 'Rencontres', en: 'Gatherings', ca: 'Trobades' },
  prochaineRencontre: {
    es: 'Próximo encuentro', fr: 'Prochaine rencontre', en: 'Next gathering', ca: 'Propera trobada',
  },
  prochaineRencontreLe: {
    es: 'El próximo es el {date}', fr: 'La prochaine, c’est le {date}',
    en: 'The next one is on {date}', ca: 'La propera és el {date}',
  },
  tousLesEvenements: {
    es: 'Todos los encuentros', fr: 'Tous les événements', en: 'All events', ca: 'Totes les trobades',
  },
  sectionVoix: { es: 'Las voces', fr: 'Les voix', en: 'The voices', ca: 'Les veus' },
  ceuxQuiParlent: {
    es: 'Quienes ya lo están haciendo', fr: 'Celles et ceux qui font déjà',
    en: 'The people already doing it', ca: 'Qui ja ho està fent',
  },
  tousLesIntervenants: {
    es: 'Todos los ponentes', fr: 'Tous les intervenants', en: 'All speakers', ca: 'Tots els ponents',
  },
  ceQueLAssociationConstruit: {
    es: 'Lo que tenemos entre manos', fr: 'Ce qu’on a sur le feu',
    en: 'What we have on our hands', ca: 'El que tenim entre mans',
  },
  tousLesProjets: { es: 'Todos los proyectos', fr: 'Tous les projets', en: 'All projects', ca: 'Tots els projectes' },
  portraitsRetoursIdees: {
    es: 'Lo que se dijo, y lo que quedó', fr: 'Ce qui s’est dit, et ce qu’il en reste',
    en: 'What was said, and what stayed', ca: 'El que es va dir, i el que en va quedar',
  },
  tousLesRecits: { es: 'Todos los relatos', fr: 'Tous les récits', en: 'All stories', ca: 'Tots els relats' },

  /* ---------------- Bandeau d'appel ---------------- */
  ctaParticiperSurtitre: { es: 'Participar', fr: 'Participer', en: 'Take part', ca: 'Participar' },
  ctaParticiperTitre: {
    es: '¿Tienes una experiencia, un oficio o un proyecto que compartir?',
    fr: 'Vous avez une expérience, un savoir-faire ou un projet à partager ?',
    en: 'Got experience, a craft or a project to share?',
    ca: 'Tens una experiència, un ofici o un projecte per compartir?',
  },
  ctaParticiperTexte: {
    es: 'MUSIMA se construye con quienes hacen. Intervenir, asociarse, echar una mano o ser socio colaborador: hay varias maneras de aportar.',
    fr: 'MUSIMA se construit avec celles et ceux qui font. Intervenir, adhérer, devenir bénévole ou partenaire : il y a plusieurs façons de contribuer.',
    en: 'MUSIMA is built with the people who do things. Speaking, joining, volunteering, partnering — there is more than one way in.',
    ca: 'MUSIMA es construeix amb qui fa coses. Intervenir, associar-s’hi, donar un cop de mà o ser-ne soci col·laborador: hi ha diverses maneres d’aportar-hi.',
  },
  ctaVoirEngagement: {
    es: 'Ver cómo participar', fr: 'Voir comment s’engager', en: 'See how to take part', ca: 'Veure com participar-hi',
  },
  ctaNousEcrire: { es: 'Escríbenos', fr: 'Nous écrire', en: 'Write to us', ca: 'Escriu-nos' },

  /* ---------------- Événements ---------------- */
  evenementsChapo: {
    es: 'Una tarde, gente que ya lo ha hecho, y sitio para preguntar. Eso es un encuentro de MUSIMA.',
    fr: 'Une après-midi, des gens qui l’ont déjà fait, et de la place pour poser des questions. C’est ça, une rencontre MUSIMA.',
    en: 'An afternoon, people who have already done it, and room to ask. That is a MUSIMA gathering.',
    ca: 'Una tarda, gent que ja ho ha fet, i lloc per preguntar. Això és una trobada de MUSIMA.',
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
    fr: 'Les prochaines dates seront publiées ici. Pour être prévenu, inscrivez-vous à l’infolettre en bas de page.',
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
  sInscrire: { es: 'Guardar mi sitio', fr: 'Garder ma place', en: 'Save my seat', ca: 'Guardar el meu lloc' },
  surScene: { es: 'En el escenario', fr: 'Sur scène', en: 'On stage', ca: 'A l’escenari' },
  lesIntervenants: { es: 'Los ponentes', fr: 'Les intervenants', en: 'The speakers', ca: 'Els ponents' },
  lIntervenant: { es: 'El ponente', fr: 'L’intervenant·e', en: 'The speaker', ca: 'El ponent' },
  rencontrePassee: { es: 'Encuentro pasado', fr: 'Rencontre passée', en: 'Past gathering', ca: 'Trobada passada' },
  passe: { es: 'Pasado', fr: 'Passé', en: 'Past', ca: 'Passat' },
  complet: { es: 'Completo', fr: 'Complet', en: 'Full', ca: 'Complet' },
  enLigne: { es: 'En línea', fr: 'En ligne', en: 'Online', ca: 'En línia' },
  ctaProposerSurtitre: { es: 'Proponer', fr: 'Proposer', en: 'Propose', ca: 'Proposar' },
  ctaProposerTitre: {
    es: '¿Una intervención, un local, una colaboración?',
    fr: 'Une intervention, un lieu, un partenariat ?',
    en: 'A talk, a venue, a partnership?',
    ca: 'Una intervenció, un local, una col·laboració?',
  },
  ctaProposerTexte: {
    es: 'Los encuentros de MUSIMA se construyen con personas que tienen algo que contar y con espacios dispuestos a acogerlas.',
    fr: 'Les rencontres MUSIMA se construisent avec des personnes qui ont une expérience à partager et des lieux qui veulent les accueillir.',
    en: 'MUSIMA gatherings are built with people who have something to share and places willing to host them.',
    ca: 'Les trobades de MUSIMA es construeixen amb persones que tenen alguna cosa a explicar i espais disposats a acollir-les.',
  },
  ctaProposerBouton: {
    es: 'Proponer una intervención', fr: 'Proposer une intervention',
    en: 'Propose a talk', ca: 'Proposar una intervenció',
  },

  /* ---------------- Intervenants ---------------- */
  intervenantsChapo: {
    es: 'De dónde vienen, qué han montado, qué contaron aquí.',
    fr: 'D’où elles viennent, ce qu’elles ont monté, ce qu’elles sont venues raconter.',
    en: 'Where they come from, what they built, what they came here to tell.',
    ca: 'D’on vénen, què han muntat, què van venir a explicar.',
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
    es: 'Lo que la asociación lleva adelante o acompaña: la intención, en qué punto está y cómo echar una mano.',
    fr: 'Ce que l’association porte ou accompagne : l’intention, l’avancement, et comment y contribuer.',
    en: 'What the association runs or supports: the intention, where it stands, and how to pitch in.',
    ca: 'El que l’associació duu endavant o acompanya: la intenció, en quin punt és i com donar-hi un cop de mà.',
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
  labelStatut: { es: 'Estado', fr: 'Statut', en: 'Status', ca: 'Estat' },
  labelAnnee: { es: 'Año', fr: 'Année', en: 'Year', ca: 'Any' },
  labelTerritoire: { es: 'Territorio', fr: 'Territoire', en: 'Territory', ca: 'Territori' },
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
    es: 'Retratos, crónicas de encuentros y análisis. Lo que se dijo, y lo que quedó después.',
    fr: 'Portraits, retours de rencontres et analyses. Ce qui s’est dit, et ce qu’il en reste.',
    en: 'Portraits, write-ups and analysis. What was said, and what stayed with us.',
    ca: 'Retrats, cròniques de trobades i anàlisis. El que es va dir, i el que en va quedar.',
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
  minDeLecture: { es: 'min de lectura', fr: 'min de lecture', en: 'min read', ca: 'min de lectura' },
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

  albumSurtitre: { es: 'Álbum', fr: 'Album', en: 'Album', ca: 'Àlbum' },
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

  /* Photo d'ouverture de l'accueil — tirée de l'archive 2025, en
     attendant un portrait fait pour cette place. */
  ouvertureAlt: {
    es: 'Primer plano de un hombre con polo azul claro hablando por el micrófono, delante de las letras doradas INSPIRE BCN.',
    fr: 'Gros plan d’un homme en polo bleu clair qui parle au micro, devant les lettres dorées INSPIRE BCN.',
    en: 'Close-up of a man in a light blue polo shirt speaking into a microphone, in front of the gold INSPIRE BCN letters.',
    ca: 'Primer pla d’un home amb polo blau clar parlant pel micròfon, davant de les lletres daurades INSPIRE BCN.',
  },

  /* Photo de salle, page Association — archive 2025. */
  salleAlt: {
    es: 'Vista general de la sala: una veintena de personas sentadas en filas, con un reloj de pared encima.',
    fr: 'Vue générale de la salle : une vingtaine de personnes assises en rangées, une horloge murale au-dessus.',
    en: 'Wide view of the room: about twenty people seated in rows, a wall clock above them.',
    ca: 'Vista general de la sala: una vintena de persones assegudes en files, amb un rellotge de paret a sobre.',
  },

  /* Décrit l'image de partage pour qui ne la voit pas : certains
     lecteurs de flux et messageries lisent cette description. */
  partageAlt: {
    es: 'Nueve personas posan juntas al final de un encuentro de MUSIMA; una de ellas sostiene un ramo de flores.',
    fr: 'Neuf personnes posent ensemble à la fin d’une rencontre MUSIMA ; l’une d’elles tient un bouquet de fleurs.',
    en: 'Nine people posing together at the end of a MUSIMA gathering; one of them holds a bunch of flowers.',
    ca: 'Nou persones posen juntes al final d’una trobada de MUSIMA; una d’elles sosté un ram de flors.',
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
