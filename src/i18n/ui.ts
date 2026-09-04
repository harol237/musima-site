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
  /* Deux phrases, en antithèse. Elles s'affichent l'une sous l'autre :
     c'est la structure qui porte le propos, pas une couleur. */
  /* Une seule phrase, coupée après la virgule. La seconde moitié garde
     l'encre pleine : le titre se lit en deux temps sans être haché. */
  heroTitreA: {
    es: 'Se construye mucho,', fr: 'On construit beaucoup,',
    en: 'A lot gets built,', ca: 'Es construeix molt,',
  },
  heroTitreB: {
    es: 'se cuenta poco.', fr: 'on en parle peu.',
    en: 'and hardly any of it gets told.', ca: 'se’n parla poc.',
  },
  heroChapo: {
    es: 'En Barcelona y en otros sitios hay africanos montando empresas, proyectos y oficios. Lo hacen bien, y casi nadie se entera. MUSIMA existe para que eso deje de pasar, y para que esas historias salgan por fin del círculo.',
    fr: 'À Barcelone et ailleurs, des Africains montent des entreprises, des projets, des métiers. Ils le font bien, et presque personne ne le sait. MUSIMA existe pour que ça change, et pour que ces histoires sortent enfin du cercle.',
    en: 'In Barcelona and elsewhere, Africans are starting businesses, projects and trades. They do it well, and almost nobody hears about it. MUSIMA exists to change that, and to get these stories out of the small circle that already knows them.',
    ca: 'A Barcelona i en altres llocs hi ha africans muntant empreses, projectes i oficis. Ho fan bé, i gairebé ningú se n’assabenta. MUSIMA existeix perquè això deixi de passar, i perquè aquestes històries surtin per fi del cercle.',
  },
  heroBoutonEvenements: {
    es: 'Ver los encuentros', fr: 'Voir les rencontres', en: 'See the gatherings', ca: 'Veure les trobades',
  },
  heroBoutonProchain: {
    es: 'Ven al próximo', fr: 'Viens à la prochaine',
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
  /* Courtes introductions sous les titres de sections de l'accueil.
     Passées en enfants de <EnteteSection>, qui a gagné un emplacement. */
  introRencontres: {
    es: 'Nos juntamos unas cuantas veces al año, en un sitio que nos acoge, alrededor de gente que tiene algo que contar.',
    fr: 'On se réunit quelques fois par an, dans un lieu qui nous accueille, autour de gens qui ont quelque chose à raconter.',
    en: 'We meet a few times a year, in a place that takes us in, around people who have something to tell.',
    ca: 'Ens trobem unes quantes vegades l’any, en un lloc que ens acull, al voltant de gent que té alguna cosa a explicar.',
  },
  introVoix: {
    es: 'Montaron una actividad, un proyecto, un oficio. Les pedimos el detalle, no la versión pulida.',
    fr: 'Ils ont monté une activité, un projet, un métier. On leur a demandé le détail, pas la version lisse.',
    en: 'They started an activity, a project, a trade. We asked them for the detail, not the tidy version.',
    ca: 'Van muntar una activitat, un projecte, un ofici. Els vam demanar el detall, no la versió polida.',
  },
  introProjets: {
    es: 'Lo que la asociación lleva adelante, con lo que está en marcha y lo que aún queda por montar.',
    fr: 'Ce que l’association porte elle-même, avec ses chantiers en cours et ce qui reste à monter.',
    en: 'What the association runs itself, with the work in progress and the parts still to build.',
    ca: 'El que l’associació duu endavant, amb el que està en marxa i el que encara queda per muntar.',
  },
  introRecits: {
    es: 'Los encuentros pasan. Lo que se dijo en ellos se queda aquí, escrito, a disposición de quien lo necesite.',
    fr: 'Les rencontres passent. Ce qui s’y est dit reste ici, écrit, à disposition de qui en aura besoin.',
    en: 'Gatherings pass. What was said at them stays here, written down, for whoever needs it.',
    ca: 'Les trobades passen. El que s’hi va dir es queda aquí, escrit, a disposició de qui ho necessiti.',
  },
  tousLesEvenements: {
    es: 'Todos los encuentros', fr: 'Tous les événements', en: 'All events', ca: 'Totes les trobades',
  },
  sectionVoix: { es: 'Las voces', fr: 'Les voix', en: 'The voices', ca: 'Les veus' },
  ceuxQuiParlent: {
    es: 'Quienes ya pasaron por ahí', fr: 'Celles et ceux qui sont passés par là',
    en: 'Those who’ve been through it', ca: 'Els qui ja hi han passat',
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
    es: '¿Has construido algo?',
    fr: 'Tu as construit quelque chose ?',
    en: 'Have you built something?',
    ca: 'Has construït alguna cosa?',
  },
  ctaParticiperTexte: {
    es: 'Da igual el tamaño. Si has montado una actividad, un proyecto o un oficio y puedes contar cómo, hay sitio para ti en un encuentro. Y si prefieres estar del otro lado, colocando sillas o haciendo las fotos, también hay sitio.',
    fr: 'Peu importe la taille. Si tu as monté une activité, un projet ou un métier et que tu peux raconter comment, il y a une place pour toi dans une rencontre. Et si tu préfères être de l’autre côté, à installer les chaises ou à prendre les photos, il y a de la place aussi.',
    en: 'Size doesn’t matter. If you’ve started an activity, a project or a trade and you can say how, there’s a place for you at a gathering. And if you’d rather be on the other side, setting out chairs or taking the photographs, there’s room for that too.',
    ca: 'Tant se val la mida. Si has muntat una activitat, un projecte o un ofici i pots explicar com, hi ha lloc per a tu en una trobada. I si prefereixes ser a l’altra banda, posant cadires o fent les fotos, també hi ha lloc.',
  },
  /* Phrase clé, posée au pied de la page Participer. */
  phraseClef: {
    es: 'Si te reconoces en esta manera de hacer las cosas, hay un lugar para ti en MUSIMA.',
    fr: 'Si tu te reconnais dans cette démarche, il y a une place pour toi à MUSIMA.',
    en: 'If any of this sounds like you, there’s a place for you at MUSIMA.',
    ca: 'Si et reconeixes en aquesta manera de fer les coses, hi ha un lloc per a tu a MUSIMA.',
  },
  ctaVoirEngagement: {
    es: 'Ver cómo participar', fr: 'Voir comment s’engager', en: 'See how to take part', ca: 'Veure com participar-hi',
  },
  ctaNousEcrire: { es: 'Escríbenos', fr: 'Nous écrire', en: 'Write to us', ca: 'Escriu-nos' },

  /* ---------------- Événements ---------------- */
  evenementsChapo: {
    es: 'Una tarde, gente que ya lo ha hecho, y sitio para preguntar.',
    fr: 'Une après-midi, des gens qui l’ont déjà fait, et de la place pour poser des questions.',
    en: 'An afternoon, people who have already done it, and room to ask.',
    ca: 'Una tarda, gent que ja ho ha fet, i lloc per preguntar.',
  },
  /* Corps de texte des quatre pages de rubrique, sous le chapô. */
  evenementsCorpsA: {
    es: 'El formato es sencillo y no cambia demasiado. Invitamos a personas que han montado algo, cuentan su trayectoria durante unos veinte minutos, y después toma la palabra la sala. Ese es el momento que más nos gusta, cuando alguien se atreve con la pregunta que creía tonta y otros tres se dan cuenta de que también se la hacían.',
    fr: 'Le format est simple et ne bouge pas beaucoup. On invite des personnes qui ont monté quelque chose, elles racontent leur parcours pendant une vingtaine de minutes, et ensuite la salle prend la main. C’est le moment qu’on préfère, celui où quelqu’un ose la question qu’il croyait bête et où trois autres se rendent compte qu’ils se la posaient aussi.',
    en: 'The format is simple and doesn’t change much. We invite people who have built something, they talk through how they got there for twenty minutes or so, and then the room takes over. That’s the part we like best, when somebody risks the question they thought was stupid and three others realise they were wondering the same thing.',
    ca: 'El format és senzill i no canvia gaire. Convidem persones que han muntat alguna cosa, expliquen la seva trajectòria durant uns vint minuts, i després pren la paraula la sala. És el moment que més ens agrada, quan algú s’atreveix amb la pregunta que creia ximple i tres més s’adonen que també se la feien.',
  },
  evenementsCorpsB: {
    es: 'Nos quedamos después. Las conversaciones que cuentan suelen empezar ahí, con las sillas ya recogidas.',
    fr: 'On reste après. Les conversations qui comptent commencent souvent là, une fois les chaises rangées.',
    en: 'We stay afterwards. The conversations that matter often start there, once the chairs have been put away.',
    ca: 'Ens quedem després. Les converses que compten solen començar aquí, amb les cadires ja recollides.',
  },
  intervenantsCorpsA: {
    es: 'No son conferenciantes. Son personas que abrieron una tienda, arrancaron una actividad, aprendieron un oficio o sostuvieron una asociación, y que aceptan contar el detalle en lugar de la versión presentable.',
    fr: 'Ce ne sont pas des conférenciers. Ce sont des gens qui ont ouvert une boutique, lancé une activité, appris un métier, tenu une association — et qui acceptent de raconter le détail plutôt que la version présentable.',
    en: 'They aren’t public speakers. They’re people who opened a shop, started something up, learned a trade or held an association together, and who agree to give the detail rather than the presentable version.',
    ca: 'No són conferenciants. Són persones que van obrir una botiga, van arrencar una activitat, van aprendre un ofici o van sostenir una associació, i que accepten explicar el detall en lloc de la versió presentable.',
  },
  intervenantsCorpsB: {
    es: 'Les preguntamos siempre lo mismo: cómo lo hiciste, con qué dinero, quién te ayudó, qué no viste venir. Las respuestas no se parecen nunca entre sí, y eso es justo lo que las hace útiles.',
    fr: 'On leur demande toujours la même chose : comment tu t’y es pris, avec quel argent, qui t’a aidé, qu’est-ce que tu n’avais pas vu venir. Les réponses ne se ressemblent jamais, et c’est précisément ce qui les rend utiles.',
    en: 'We always ask them the same things: how did you go about it, with what money, who helped, what did you not see coming. The answers never resemble each other, and that is exactly what makes them useful.',
    ca: 'Els preguntem sempre el mateix: com ho vas fer, amb quins diners, qui et va ajudar, què no vas veure venir. Les respostes no s’assemblen mai entre si, i això és justament el que les fa útils.',
  },
  projetsCorpsA: {
    es: 'No está todo terminado, y no disimulamos. Cada proyecto dice en qué punto está, qué busca y qué le falta todavía.',
    fr: 'Tout n’est pas terminé, et on ne fait pas semblant. Chaque projet dit où il en est, ce qu’il cherche, et ce qui lui manque encore.',
    en: 'Not everything is finished, and we don’t pretend otherwise. Each project says where it stands, what it’s looking for, and what it still lacks.',
    ca: 'No està tot acabat, i no ho dissimulem. Cada projecte diu en quin punt és, què busca i què li falta encara.',
  },
  projetsCorpsB: {
    es: 'El primer proyecto de MUSIMA es la propia MUSIMA: montarla, encontrarle un local, reunir a las primeras personas alrededor de una mesa. Lo hacemos a la vista de todo el mundo, porque no hay ninguna razón para esconder cómo se hace.',
    fr: 'Le premier projet de MUSIMA, c’est MUSIMA elle-même : la monter, lui trouver un lieu, réunir les premières personnes autour d’une table. On le fait à la vue de tout le monde, parce qu’il n’y a aucune raison de cacher comment on s’y prend.',
    en: 'MUSIMA’s first project is MUSIMA itself: setting it up, finding it a room, getting the first people around a table. We do it in plain sight, because there’s no reason to hide how it’s done.',
    ca: 'El primer projecte de MUSIMA és la mateixa MUSIMA: muntar-la, trobar-li un local, reunir les primeres persones al voltant d’una taula. Ho fem a la vista de tothom, perquè no hi ha cap raó per amagar com es fa.',
  },
  recitsCorpsA: {
    es: 'Escribimos lo que escuchamos: retratos, crónicas de encuentros y, de vez en cuando, una idea que no conseguimos soltar. La intención es sencilla — alguien que no estaba en la sala tiene que poder sacar algo de aquí.',
    fr: 'On écrit ce qu’on entend : des portraits, des retours de rencontres, parfois une idée qu’on n’arrive pas à lâcher. L’intention est simple — quelqu’un qui n’était pas dans la salle doit pouvoir en tirer quelque chose.',
    en: 'We write down what we hear: portraits, write-ups of gatherings and, now and then, an idea we can’t let go of. The intention is simple — somebody who wasn’t in the room should be able to take something away.',
    ca: 'Escrivim el que escoltem: retrats, cròniques de trobades i, de tant en tant, una idea que no aconseguim deixar anar. La intenció és senzilla — algú que no era a la sala ha de poder treure’n alguna cosa.',
  },
  recitsCorpsB: {
    es: 'Son textos, no notas de prensa. Dejamos dentro las dudas y las contradicciones, porque suele ser ahí donde está la información que sirve.',
    fr: 'Ce sont des textes, pas des communiqués. On y garde les hésitations et les contradictions, parce que c’est souvent là que se trouve l’information utile.',
    en: 'These are pieces of writing, not press releases. We keep the hesitations and the contradictions in, because that’s often where the useful part hides.',
    ca: 'Són textos, no notes de premsa. Hi deixem els dubtes i les contradiccions, perquè sol ser aquí on hi ha la informació que serveix.',
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
  /* ---------------- Inscription à une rencontre ---------------- */
  inscriptionTitre: {
    es: 'Apúntate a este encuentro', fr: 'Inscris-toi à cette rencontre',
    en: 'Sign up for this gathering', ca: 'Apunta’t a aquesta trobada',
  },
  inscriptionTexte: {
    es: 'La entrada es libre, pero saber cuántos seremos nos ayuda a preparar la sala.',
    fr: 'L’entrée est libre, mais savoir combien on sera nous aide à préparer la salle.',
    en: 'Entry is free, but knowing how many of us there will be helps us set the room up.',
    ca: 'L’entrada és lliure, però saber quants serem ens ajuda a preparar la sala.',
  },
  inscriptionNom: { es: 'Nombre y apellidos', fr: 'Nom et prénom', en: 'Name', ca: 'Nom i cognoms' },
  inscriptionEmail: { es: 'Dirección de correo', fr: 'Adresse e-mail', en: 'Email address', ca: 'Adreça electrònica' },
  inscriptionTelephone: {
    es: 'Teléfono (opcional)', fr: 'Téléphone (facultatif)',
    en: 'Phone (optional)', ca: 'Telèfon (opcional)',
  },
  inscriptionConsentement: {
    es: 'Acepto que mis datos se usen para contactarme sobre este encuentro.',
    fr: 'J’accepte que mes données soient utilisées pour me contacter au sujet de cette rencontre.',
    en: 'I agree that my details may be used to contact me about this gathering.',
    ca: 'Accepto que les meves dades s’usin per contactar-me sobre aquesta trobada.',
  },
  inscriptionEnvoyer: { es: 'Apuntarme', fr: 'Je m’inscris', en: 'Sign me up', ca: 'Apuntar-m’hi' },
  inscriptionMerci: {
    es: '¡Gracias! Tu inscripción está confirmada.',
    fr: 'Merci ! Votre inscription est confirmée.',
    en: 'Thank you! Your registration is confirmed.',
    ca: 'Gràcies! La teva inscripció està confirmada.',
  },
  /* Par e-mail, l'inscription n'est réelle qu'une fois le message parti :
     on ne peut pas la déclarer confirmée avant. */
  inscriptionPrete: {
    es: '¡Gracias! Tu mensaje de inscripción está listo en tu programa de correo, solo falta enviarlo.',
    fr: 'Merci ! Ton message d’inscription est prêt dans ta messagerie, il ne reste qu’à l’envoyer.',
    en: 'Thank you! Your sign-up message is ready in your mail app, all that’s left is to send it.',
    ca: 'Gràcies! El teu missatge d’inscripció és a punt al teu programa de correu, només falta enviar-lo.',
  },
  inscriptionSansJs: {
    es: 'El formulario necesita JavaScript. Escríbenos directamente a',
    fr: 'Le formulaire a besoin de JavaScript. Écris-nous directement à',
    en: 'The form needs JavaScript. Write to us directly at',
    ca: 'El formulari necessita JavaScript. Escriu-nos directament a',
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
    es: 'Lo que la asociación lleva o acompaña, con el estado real de las cosas.',
    fr: 'Ce que l’association porte ou accompagne, avec l’état réel des choses.',
    en: 'What the association runs or supports, with the real state of things.',
    ca: 'El que l’associació duu o acompanya, amb l’estat real de les coses.',
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
    es: 'Un encuentro dura una tarde. Lo que se dice en él puede servir mucho más tiempo.',
    fr: 'Une rencontre dure une après-midi. Ce qui s’y dit peut servir bien plus longtemps.',
    en: 'A gathering lasts an afternoon. What gets said there can be useful for much longer.',
    ca: 'Una trobada dura una tarda. El que s’hi diu pot servir molt més temps.',
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

  /* Les trois images de l'accueil. Aucun visage : elles montrent un
     geste, un lieu, une trace — jamais quelqu'un dont on laisserait
     croire qu'il fait partie de MUSIMA. */
  triptyqueMetierAlt: {
    es: 'Manos oscuras dando forma a la parte superior de un zapato sobre un banco de trabajo, con un martillo envuelto en tela.',
    fr: 'Des mains sombres façonnent l’empeigne d’une chaussure sur un établi, un marteau enveloppé de tissu à côté.',
    en: 'Dark-skinned hands shaping the upper of a shoe on a workbench, a cloth-wrapped hammer beside them.',
    ca: 'Mans fosques donant forma a la part superior d’una sabata sobre un banc de treball, amb un martell embolicat en tela.',
  },
  triptyqueSalleAlt: {
    es: 'Un micrófono en primer plano y, detrás, desenfocadas, las filas de sillas vacías de una sala.',
    fr: 'Un micro au premier plan et, derrière, floues, les rangées de chaises vides d’une salle.',
    en: 'A microphone in the foreground and, behind it out of focus, the empty rows of chairs in a hall.',
    ca: 'Un micròfon en primer pla i, al darrere desenfocades, les fileres de cadires buides d’una sala.',
  },
  triptyqueTraceAlt: {
    es: 'Una mano oscura escribe con bolígrafo en un cuaderno abierto sobre una mesa oscura.',
    fr: 'Une main sombre écrit au stylo dans un carnet ouvert, sur une table sombre.',
    en: 'A dark-skinned hand writing with a pen in an open notebook on a dark table.',
    ca: 'Una mà fosca escriu amb bolígraf en una llibreta oberta sobre una taula fosca.',
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
