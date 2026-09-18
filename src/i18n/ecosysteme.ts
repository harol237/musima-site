import type { Langue } from './config';

/* ==================================================================
   ÉCOSYSTÈME — PAGE ET FORMULAIRE
   ------------------------------------------------------------------
   Lu des deux côtés, comme formulaire.ts : par la page au moment de la
   construction, et par la Pages Function au moment de l'envoi. Il
   n'importe donc qu'un type — le paquet de la Function n'a pas les
   alias `~/` d'Astro.

   Les quatre versions sont écrites, pas traduites. MUSIMA dit « nous »,
   le visiteur est tutoyé en français.
   ================================================================== */

/** Profils, une seule valeur. Le jeton part dans Brevo (attribut
    PERFIL, de type catégorie) ; le libellé s'affiche. */
export const profils =
  ['emprendedor', 'profesional', 'estudiante', 'proyecto', 'creador', 'organizacion', 'otro'] as const;
export type Profil = (typeof profils)[number];

/** Ce qu'on apporte et ce qu'on cherche : deux listes en miroir. Chaque
    jeton devient un attribut booléen dans Brevo — APORTA_COMPETENCIA,
    BUSCA_CONEXIONES… — pour que la base reste interrogeable : qui
    apporte une compétence, qui en cherche une. */
export const aportes =
  ['competencia', 'experiencia', 'idea', 'contacto', 'recurso', 'proyecto'] as const;
export const busquedas =
  ['conexiones', 'competencia', 'colaboracion', 'oportunidad', 'conocimientos'] as const;
export type Aporte = (typeof aportes)[number];
export type Busqueda = (typeof busquedas)[number];

export const estProfil = (v: unknown): v is Profil =>
  typeof v === 'string' && (profils as readonly string[]).includes(v);

/** Origine de la visite, sans cookie ni traceur : le paramètre `via` de
    l'adresse imprimée sur la bâche (musima.org/ecosistema?via=qr) est
    recopié dans un champ caché. Toute autre valeur devient « web ». */
export const origines = ['qr', 'web'] as const;
export type Origine = (typeof origines)[number];

/* Mêmes bornes que le formulaire de contact pour les champs communs. */
export const LIMITES = {
  prenom: 80, nom: 80, email: 160, telephone: 40,
  proyecto: 200, enlaces: 300, langue: 8, origen: 8,
} as const;

/** Ancre du formulaire dans la page, traduite. */
export const ancreFormulaireEcosysteme: Record<Langue, string> = {
  es: 'formulario', fr: 'formulaire', en: 'form', ca: 'formulari',
};

type Textes = {
  /* Page */
  meta: string;
  surtitre: string;
  titre: string;
  intro: string[];
  /* Champs */
  labelPrenom: string;
  labelNom: string;
  labelEmail: string;
  labelTelephone: string;
  aideTelephone: string;
  labelProfil: string;
  profil: Record<Profil, string>;
  labelAporta: string;
  aporta: Record<Aporte, string>;
  labelBusca: string;
  busca: Record<Busqueda, string>;
  labelProyecto: string;
  labelEnlaces: string;
  facultatif: string;
  consentement: string;
  consentementLien: string;
  envoyer: string;
  envoiEnCours: string;
  /* Retours */
  merci: string;
  merciDetail: string;
  erreurGenerale: string;
  erreurReseau: string;
  erreurChamp: Record<'requis' | 'email' | 'telephone' | 'trop', string>;
  sansJs: string;
  /* Accusé de réception */
  courrielObjet: string;
  courrielBonjour: (prenom: string) => string;
  courrielRecu: string;
  courrielSuite: string;
  courrielRecapTitre: string;
  courrielSignature: string;
};

export const textes: Record<Langue, Textes> = {
  es: {
    meta: 'Únete al ecosistema MUSIMA: personas, proyectos y organizaciones que pueden encontrarse, compartir y colaborar. Déjanos tus datos y dinos cómo quieres participar.',
    surtitre: 'Ecosistema',
    titre: 'Únete al ecosistema MUSIMA',
    intro: [
      'MUSIMA reúne a personas, proyectos y organizaciones que pueden encontrarse, compartir y colaborar.',
      '¿Quieres descubrir MUSIMA, participar en los encuentros, compartir una competencia, proponer una idea o desarrollar una colaboración? Déjanos tus datos y dinos cómo quieres participar.',
    ],
    labelPrenom: 'Nombre',
    labelNom: 'Apellidos',
    labelEmail: 'Correo electrónico',
    labelTelephone: 'Teléfono / WhatsApp',
    aideTelephone: 'Solo si prefieres que te contactemos por WhatsApp.',
    labelProfil: 'Eres…',
    profil: {
      emprendedor: 'Emprendedor/a', profesional: 'Profesional', estudiante: 'Estudiante',
      proyecto: 'Con un proyecto', creador: 'Creador/a', organizacion: 'Asociación · Organización', otro: 'Otro',
    },
    labelAporta: '¿Qué puedes aportar?',
    aporta: {
      competencia: 'Una competencia', experiencia: 'Una experiencia', idea: 'Una idea',
      contacto: 'Un contacto', recurso: 'Un recurso', proyecto: 'Un proyecto',
    },
    labelBusca: '¿Qué buscas?',
    busca: {
      conexiones: 'Conexiones', competencia: 'Una competencia', colaboracion: 'Una colaboración',
      oportunidad: 'Una oportunidad', conocimientos: 'Conocimientos',
    },
    labelProyecto: 'Tu proyecto, organización o actividad',
    labelEnlaces: 'Instagram / LinkedIn / web',
    facultatif: 'opcional',
    consentement: 'Acepto que MUSIMA utilice mis datos de contacto para contactarme sobre sus actividades y posibilidades de colaboración.',
    consentementLien: 'Política de privacidad',
    envoyer: 'Unirme al ecosistema',
    envoiEnCours: 'Enviando…',
    merci: '¡Gracias! Ya formas parte del ecosistema MUSIMA.',
    merciDetail: 'Te hemos enviado una confirmación por correo.',
    erreurGenerale: 'No hemos podido registrar tus datos.',
    erreurReseau: 'No hemos podido contactar con el servidor.',
    erreurChamp: {
      requis: 'Falta este campo.',
      email: 'Esta dirección de correo no parece válida.',
      telephone: 'Este número no parece válido.',
      trop: 'Este campo es demasiado largo (máximo {max} caracteres).',
    },
    sansJs: 'El formulario necesita JavaScript. Escríbenos directamente a',
    courrielObjet: 'Bienvenido/a al ecosistema MUSIMA',
    courrielBonjour: (p) => `Hola ${p},`,
    courrielRecu: 'Gracias por unirte al ecosistema MUSIMA. Hemos recibido tus datos: esto es la confirmación automática.',
    courrielSuite: 'Te escribiremos cuando haya una actividad, una conexión o una posibilidad que pueda interesarte. Si quieres añadir algo, basta con contestar a este correo.',
    courrielRecapTitre: 'Lo que nos has contado',
    courrielSignature: 'MUSIMA',
  },
  fr: {
    meta: 'Rejoins l’écosystème MUSIMA : des personnes, des projets et des organisations qui peuvent se rencontrer, partager et collaborer. Laisse-nous tes coordonnées et dis-nous comment tu souhaites participer.',
    surtitre: 'Écosystème',
    titre: 'Rejoindre l’écosystème MUSIMA',
    intro: [
      'MUSIMA réunit des personnes, des projets et des organisations qui peuvent se rencontrer, partager et collaborer.',
      'Tu veux découvrir MUSIMA, participer à nos rencontres, partager une compétence, proposer une idée ou développer une collaboration ? Laisse-nous simplement tes coordonnées et dis-nous comment tu souhaites participer.',
    ],
    labelPrenom: 'Prénom',
    labelNom: 'Nom',
    labelEmail: 'Adresse e-mail',
    labelTelephone: 'Téléphone / WhatsApp',
    aideTelephone: 'Uniquement si tu préfères être contacté·e par WhatsApp.',
    labelProfil: 'Tu es…',
    profil: {
      emprendedor: 'Entrepreneur·e', profesional: 'Professionnel·le', estudiante: 'Étudiant·e',
      proyecto: 'Porteur·se de projet', creador: 'Créateur·rice', organizacion: 'Association · Organisation', otro: 'Autre',
    },
    labelAporta: 'Qu’est-ce que tu peux apporter ?',
    aporta: {
      competencia: 'Une compétence', experiencia: 'Une expérience', idea: 'Une idée',
      contacto: 'Un contact', recurso: 'Une ressource', proyecto: 'Un projet',
    },
    labelBusca: 'Qu’est-ce que tu cherches ?',
    busca: {
      conexiones: 'Des connexions', competencia: 'Une compétence', colaboracion: 'Une collaboration',
      oportunidad: 'Une opportunité', conocimientos: 'Des savoirs',
    },
    labelProyecto: 'Ton projet, organisation ou activité',
    labelEnlaces: 'Instagram / LinkedIn / site',
    facultatif: 'facultatif',
    consentement: 'J’accepte que MUSIMA utilise mes coordonnées pour me contacter au sujet de ses activités et de ses possibilités de collaboration.',
    consentementLien: 'Politique de confidentialité',
    envoyer: 'Rejoindre l’écosystème',
    envoiEnCours: 'Envoi…',
    merci: 'Merci ! Tu fais maintenant partie de l’écosystème MUSIMA.',
    merciDetail: 'On t’a envoyé une confirmation par e-mail.',
    erreurGenerale: 'On n’a pas pu enregistrer tes coordonnées.',
    erreurReseau: 'On n’a pas pu joindre le serveur.',
    erreurChamp: {
      requis: 'Ce champ manque.',
      email: 'Cette adresse e-mail ne semble pas valide.',
      telephone: 'Ce numéro ne semble pas valide.',
      trop: 'Ce champ est trop long ({max} caractères maximum).',
    },
    sansJs: 'Le formulaire a besoin de JavaScript. Écris-nous directement à',
    courrielObjet: 'Bienvenue dans l’écosystème MUSIMA',
    courrielBonjour: (p) => `Bonjour ${p},`,
    courrielRecu: 'Merci d’avoir rejoint l’écosystème MUSIMA. On a bien reçu tes coordonnées — ceci est la confirmation automatique.',
    courrielSuite: 'On t’écrira quand il y aura une activité, une connexion ou une possibilité qui peut t’intéresser. Si tu veux ajouter quelque chose, il suffit de répondre à cet e-mail.',
    courrielRecapTitre: 'Ce que tu nous as dit',
    courrielSignature: 'MUSIMA',
  },
  en: {
    meta: 'Join the MUSIMA ecosystem: people, projects and organisations that can meet, share and work together. Leave us your details and tell us how you’d like to take part.',
    surtitre: 'Ecosystem',
    titre: 'Join the MUSIMA ecosystem',
    intro: [
      'MUSIMA brings together people, projects and organisations that can meet, share and work together.',
      'Want to discover MUSIMA, come to our gatherings, share a skill, suggest an idea or build a collaboration? Just leave us your details and tell us how you’d like to take part.',
    ],
    labelPrenom: 'First name',
    labelNom: 'Last name',
    labelEmail: 'Email address',
    labelTelephone: 'Phone / WhatsApp',
    aideTelephone: 'Only if you’d rather we reach you on WhatsApp.',
    labelProfil: 'You are…',
    profil: {
      emprendedor: 'Entrepreneur', profesional: 'Professional', estudiante: 'Student',
      proyecto: 'Carrying a project', creador: 'Maker', organizacion: 'Association · Organisation', otro: 'Other',
    },
    labelAporta: 'What can you bring?',
    aporta: {
      competencia: 'A skill', experiencia: 'An experience', idea: 'An idea',
      contacto: 'A contact', recurso: 'A resource', proyecto: 'A project',
    },
    labelBusca: 'What are you looking for?',
    busca: {
      conexiones: 'Connections', competencia: 'A skill', colaboracion: 'A collaboration',
      oportunidad: 'An opportunity', conocimientos: 'Knowledge',
    },
    labelProyecto: 'Your project, organisation or activity',
    labelEnlaces: 'Instagram / LinkedIn / website',
    facultatif: 'optional',
    consentement: 'I agree that MUSIMA may use my contact details to get in touch about its activities and possible collaborations.',
    consentementLien: 'Privacy policy',
    envoyer: 'Join the ecosystem',
    envoiEnCours: 'Sending…',
    merci: 'Thank you! You are now part of the MUSIMA ecosystem.',
    merciDetail: 'We have sent you a confirmation by email.',
    erreurGenerale: 'We could not record your details.',
    erreurReseau: 'We could not reach the server.',
    erreurChamp: {
      requis: 'This field is missing.',
      email: 'This email address does not look valid.',
      telephone: 'This number does not look valid.',
      trop: 'This field is too long ({max} characters at most).',
    },
    sansJs: 'The form needs JavaScript. Write to us directly at',
    courrielObjet: 'Welcome to the MUSIMA ecosystem',
    courrielBonjour: (p) => `Hello ${p},`,
    courrielRecu: 'Thank you for joining the MUSIMA ecosystem. We have received your details — this is the automatic confirmation.',
    courrielSuite: 'We will write to you when there is an activity, a connection or a possibility that might interest you. If you want to add anything, just reply to this email.',
    courrielRecapTitre: 'What you told us',
    courrielSignature: 'MUSIMA',
  },
  ca: {
    meta: 'Uneix-te a l’ecosistema MUSIMA: persones, projectes i organitzacions que poden trobar-se, compartir i col·laborar. Deixa’ns les teves dades i digues-nos com vols participar.',
    surtitre: 'Ecosistema',
    titre: 'Uneix-te a l’ecosistema MUSIMA',
    intro: [
      'MUSIMA reuneix persones, projectes i organitzacions que poden trobar-se, compartir i col·laborar.',
      'Vols descobrir MUSIMA, participar en les trobades, compartir una competència, proposar una idea o desenvolupar una col·laboració? Deixa’ns les teves dades i digues-nos com vols participar.',
    ],
    labelPrenom: 'Nom',
    labelNom: 'Cognoms',
    labelEmail: 'Correu electrònic',
    labelTelephone: 'Telèfon / WhatsApp',
    aideTelephone: 'Només si prefereixes que et contactem per WhatsApp.',
    labelProfil: 'Ets…',
    profil: {
      emprendedor: 'Emprenedor/a', profesional: 'Professional', estudiante: 'Estudiant',
      proyecto: 'Amb un projecte', creador: 'Creador/a', organizacion: 'Associació · Organització', otro: 'Altre',
    },
    labelAporta: 'Què pots aportar?',
    aporta: {
      competencia: 'Una competència', experiencia: 'Una experiència', idea: 'Una idea',
      contacto: 'Un contacte', recurso: 'Un recurs', proyecto: 'Un projecte',
    },
    labelBusca: 'Què busques?',
    busca: {
      conexiones: 'Connexions', competencia: 'Una competència', colaboracion: 'Una col·laboració',
      oportunidad: 'Una oportunitat', conocimientos: 'Coneixements',
    },
    labelProyecto: 'El teu projecte, organització o activitat',
    labelEnlaces: 'Instagram / LinkedIn / web',
    facultatif: 'opcional',
    consentement: 'Accepto que MUSIMA utilitzi les meves dades de contacte per contactar-me sobre les seves activitats i possibilitats de col·laboració.',
    consentementLien: 'Política de privacitat',
    envoyer: 'Unir-me a l’ecosistema',
    envoiEnCours: 'Enviant…',
    merci: 'Gràcies! Ja formes part de l’ecosistema MUSIMA.',
    merciDetail: 'T’hem enviat una confirmació per correu.',
    erreurGenerale: 'No hem pogut registrar les teves dades.',
    erreurReseau: 'No hem pogut contactar amb el servidor.',
    erreurChamp: {
      requis: 'Falta aquest camp.',
      email: 'Aquesta adreça de correu no sembla vàlida.',
      telephone: 'Aquest número no sembla vàlid.',
      trop: 'Aquest camp és massa llarg (màxim {max} caràcters).',
    },
    sansJs: 'El formulari necessita JavaScript. Escriu-nos directament a',
    courrielObjet: 'Benvingut/da a l’ecosistema MUSIMA',
    courrielBonjour: (p) => `Hola ${p},`,
    courrielRecu: 'Gràcies per unir-te a l’ecosistema MUSIMA. Hem rebut les teves dades: això és la confirmació automàtica.',
    courrielSuite: 'T’escriurem quan hi hagi una activitat, una connexió o una possibilitat que et pugui interessar. Si vols afegir alguna cosa, només cal que responguis a aquest correu.',
    courrielRecapTitre: 'El que ens has explicat',
    courrielSignature: 'MUSIMA',
  },
};
