import type { Langue } from './config';

/* ==================================================================
   FORMULAIRE DE CONTACT — TEXTES ET MOTIFS
   ------------------------------------------------------------------
   Ce fichier est lu des deux côtés : par la page Contact au moment de
   la construction, et par la Cloudflare Pages Function au moment de
   l'envoi. C'est pour ça qu'il n'importe rien d'autre qu'un type —
   le paquet de la Function n'a pas les alias `~/` d'Astro.

   Conséquence pratique : les libellés d'un motif ne peuvent pas
   diverger entre le menu déroulant, l'e-mail de notification et
   l'accusé de réception. Il n'y a qu'une source.
   ================================================================== */

/** Jeton stable, neutre en langue. C'est lui qui part dans Brevo et
    dans l'e-mail : filtrer sur « inscription » doit marcher quelle que
    soit la langue de la personne qui a écrit. */
export const motifs =
  ['general', 'intervenir', 'adherer', 'benevolat', 'partenariat', 'inscription'] as const;
export type Motif = (typeof motifs)[number];

export const estMotif = (v: unknown): v is Motif =>
  typeof v === 'string' && (motifs as readonly string[]).includes(v);

/* Longueur maximale par champ. Au-delà, la soumission est refusée : on ne
   tronque pas en silence, sinon un message coupé au milieu partirait sans
   que personne ne le sache — ni le visiteur, ni nous. Le navigateur pose
   les mêmes bornes en `maxlength`, le serveur les vérifie pour de vrai. */
export const LIMITES = {
  motif: 40, prenom: 80, nom: 80, email: 160,
  telephone: 40, message: 4000, langue: 8, rencontre: 200,
} as const;

/** Nom du paramètre d'URL, traduit comme le reste de l'adresse. */
export const parametreMotif: Record<Langue, string> = {
  es: 'motivo', fr: 'motif', en: 'reason', ca: 'motiu',
};

/** Ancre du formulaire dans la page, traduite elle aussi. */
export const ancreFormulaire: Record<Langue, string> = {
  es: 'formulario', fr: 'formulaire', en: 'form', ca: 'formulari',
};

type Textes = {
  /* Libellés des motifs. `inscription` reçoit le titre de la rencontre. */
  motif: Record<Exclude<Motif, 'inscription'>, string>;
  motifInscription: (rencontre: string) => string;
  /* Ligne de l'accusé de réception qui change selon le motif. */
  suite: Record<Motif, string>;
  /* Champs */
  legende: string;
  labelMotif: string;
  labelPrenom: string;
  labelNom: string;
  labelEmail: string;
  labelTelephone: string;
  labelMessage: string;
  facultatif: string;
  consentement: string;
  consentementLien: string;
  conservation: string;
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
  courrielReponse: string;
  courrielRecapTitre: string;
  courrielSignature: string;
};

export const textes: Record<Langue, Textes> = {
  es: {
    motif: {
      general: 'Contacto general',
      intervenir: 'Intervenir en un encuentro',
      adherer: 'Hacerme socio/a',
      benevolat: 'Ser voluntario/a',
      partenariat: 'Colaboración',
    },
    motifInscription: (r) => `Apuntarme a «${r}»`,
    suite: {
      general: 'Leemos todo lo que llega y respondemos nosotros mismos.',
      intervenir: 'Te escribiremos para saber qué te gustaría contar y cuándo te vendría bien.',
      adherer: 'Te enviamos cómo funciona la adhesión y qué cambia en la práctica.',
      benevolat: 'Te diremos qué hace falta ahora mismo y cuánto tiempo supone.',
      partenariat: 'Te contamos en qué punto estamos y qué tiene sentido montar juntos.',
      inscription: 'Tu sitio queda apuntado. Te confirmamos los detalles prácticos unos días antes.',
    },
    legende: 'Escríbenos',
    labelMotif: 'Motivo del mensaje',
    labelPrenom: 'Nombre',
    labelNom: 'Apellidos',
    labelEmail: 'Correo electrónico',
    labelTelephone: 'Teléfono',
    labelMessage: 'Mensaje',
    facultatif: 'opcional',
    consentement: 'Acepto que MUSIMA trate estos datos para responder a mi mensaje.',
    consentementLien: 'Política de privacidad',
    conservation: 'Acepto que MUSIMA conserve mis datos de contacto para informarme de los próximos encuentros.',
    envoyer: 'Enviar',
    envoiEnCours: 'Enviando…',
    merci: '¡Gracias! Tu mensaje ha llegado.',
    merciDetail: 'Te hemos enviado una confirmación por correo. Respondemos en pocos días.',
    erreurGenerale: 'No hemos podido enviar tu mensaje.',
    erreurReseau: 'No hemos podido contactar con el servidor.',
    erreurChamp: {
      requis: 'Falta este campo.',
      email: 'Esta dirección de correo no parece válida.',
      telephone: 'Este número no parece válido.',
      trop: 'Este campo es demasiado largo (máximo {max} caracteres).',
    },
    sansJs: 'El formulario necesita JavaScript. Escríbenos directamente a',
    courrielObjet: 'Hemos recibido tu mensaje',
    courrielBonjour: (p) => `Hola ${p},`,
    courrielRecu: 'Tu mensaje ha llegado a MUSIMA. Esto es solo la confirmación automática: alguien lo leerá de verdad.',
    courrielReponse: 'Respondemos en pocos días. Si es urgente, puedes contestar directamente a este correo.',
    courrielRecapTitre: 'Lo que nos has enviado',
    courrielSignature: 'MUSIMA',
  },
  fr: {
    motif: {
      general: 'Contact général',
      intervenir: 'Intervenir lors d’une rencontre',
      adherer: 'Adhérer à l’association',
      benevolat: 'Devenir bénévole',
      partenariat: 'Partenariat',
    },
    motifInscription: (r) => `M’inscrire à « ${r} »`,
    suite: {
      general: 'On lit tout ce qui arrive, et c’est nous qui répondons.',
      intervenir: 'On revient vers toi pour savoir ce que tu aimerais raconter, et quand ça t’arrange.',
      adherer: 'On t’envoie les modalités d’adhésion, et ce que ça change concrètement.',
      benevolat: 'On te dira ce dont on a besoin en ce moment, et le temps que ça demande.',
      partenariat: 'On t’explique où on en est et ce qui aurait du sens à monter ensemble.',
      inscription: 'Ta place est notée. On te confirme les détails pratiques quelques jours avant.',
    },
    legende: 'Écris-nous',
    labelMotif: 'Motif du message',
    labelPrenom: 'Prénom',
    labelNom: 'Nom',
    labelEmail: 'Adresse e-mail',
    labelTelephone: 'Téléphone',
    labelMessage: 'Message',
    facultatif: 'facultatif',
    consentement: 'J’accepte que MUSIMA traite ces informations pour répondre à mon message.',
    consentementLien: 'Politique de confidentialité',
    conservation: 'J’accepte que MUSIMA conserve mes coordonnées pour m’informer des prochaines rencontres.',
    envoyer: 'Envoyer',
    envoiEnCours: 'Envoi en cours…',
    merci: 'Merci ! Ton message est bien arrivé.',
    merciDetail: 'On t’a envoyé une confirmation par e-mail. On répond sous quelques jours.',
    erreurGenerale: 'On n’a pas réussi à envoyer ton message.',
    erreurReseau: 'On n’a pas réussi à joindre le serveur.',
    erreurChamp: {
      requis: 'Ce champ manque.',
      email: 'Cette adresse e-mail ne semble pas valide.',
      telephone: 'Ce numéro ne semble pas valide.',
      trop: 'Ce champ est trop long ({max} caractères au maximum).',
    },
    sansJs: 'Le formulaire a besoin de JavaScript. Écris-nous directement à',
    courrielObjet: 'On a bien reçu ton message',
    courrielBonjour: (p) => `Bonjour ${p},`,
    courrielRecu: 'Ton message est bien arrivé chez MUSIMA. Ceci n’est que la confirmation automatique : quelqu’un va vraiment le lire.',
    courrielReponse: 'On répond sous quelques jours. Si c’est urgent, tu peux répondre directement à cet e-mail.',
    courrielRecapTitre: 'Ce que tu nous as envoyé',
    courrielSignature: 'MUSIMA',
  },
  en: {
    motif: {
      general: 'General enquiry',
      intervenir: 'Speak at a gathering',
      adherer: 'Join the association',
      benevolat: 'Volunteer',
      partenariat: 'Partnership',
    },
    motifInscription: (r) => `Sign up for “${r}”`,
    suite: {
      general: 'We read everything that comes in, and we answer it ourselves.',
      intervenir: 'We will get back to you about what you would like to talk about, and when suits you.',
      adherer: 'We will send you how membership works, and what it changes in practice.',
      benevolat: 'We will tell you what is needed right now, and how much time it takes.',
      partenariat: 'We will tell you where we are and what would make sense to build together.',
      inscription: 'Your seat is noted. We will confirm the practical details a few days beforehand.',
    },
    legende: 'Write to us',
    labelMotif: 'What is it about',
    labelPrenom: 'First name',
    labelNom: 'Last name',
    labelEmail: 'Email address',
    labelTelephone: 'Phone',
    labelMessage: 'Message',
    facultatif: 'optional',
    consentement: 'I agree that MUSIMA may process these details to answer my message.',
    consentementLien: 'Privacy policy',
    conservation: 'I agree that MUSIMA may keep my contact details to tell me about upcoming gatherings.',
    envoyer: 'Send',
    envoiEnCours: 'Sending…',
    merci: 'Thank you! Your message got through.',
    merciDetail: 'We have sent you a confirmation by email. We answer within a few days.',
    erreurGenerale: 'We could not send your message.',
    erreurReseau: 'We could not reach the server.',
    erreurChamp: {
      requis: 'This field is missing.',
      email: 'That email address does not look right.',
      telephone: 'That number does not look right.',
      trop: 'This field is too long ({max} characters at most).',
    },
    sansJs: 'The form needs JavaScript. Write to us directly at',
    courrielObjet: 'We got your message',
    courrielBonjour: (p) => `Hello ${p},`,
    courrielRecu: 'Your message reached MUSIMA. This is only the automatic confirmation — someone will actually read it.',
    courrielReponse: 'We answer within a few days. If it is urgent, you can reply straight to this email.',
    courrielRecapTitre: 'What you sent us',
    courrielSignature: 'MUSIMA',
  },
  ca: {
    motif: {
      general: 'Contacte general',
      intervenir: 'Intervenir en una trobada',
      adherer: 'Fer-me’n soci/sòcia',
      benevolat: 'Fer-me voluntari/ària',
      partenariat: 'Col·laboració',
    },
    motifInscription: (r) => `Apuntar-me a «${r}»`,
    suite: {
      general: 'Llegim tot el que arriba i responem nosaltres mateixos.',
      intervenir: 'T’escriurem per saber què t’agradaria explicar i quan et va bé.',
      adherer: 'T’enviem com funciona l’adhesió i què canvia a la pràctica.',
      benevolat: 'Et direm què fa falta ara mateix i quant de temps suposa.',
      partenariat: 'T’expliquem on som i què tindria sentit muntar plegats.',
      inscription: 'El teu lloc queda apuntat. Et confirmem els detalls pràctics uns dies abans.',
    },
    legende: 'Escriu-nos',
    labelMotif: 'Motiu del missatge',
    labelPrenom: 'Nom',
    labelNom: 'Cognoms',
    labelEmail: 'Adreça electrònica',
    labelTelephone: 'Telèfon',
    labelMessage: 'Missatge',
    facultatif: 'opcional',
    consentement: 'Accepto que MUSIMA tracti aquestes dades per respondre el meu missatge.',
    consentementLien: 'Política de privacitat',
    conservation: 'Accepto que MUSIMA conservi les meves dades de contacte per informar-me de les properes trobades.',
    envoyer: 'Envia',
    envoiEnCours: 'Enviant…',
    merci: 'Gràcies! El teu missatge ha arribat.',
    merciDetail: 'T’hem enviat una confirmació per correu. Responem en pocs dies.',
    erreurGenerale: 'No hem pogut enviar el teu missatge.',
    erreurReseau: 'No hem pogut contactar amb el servidor.',
    erreurChamp: {
      requis: 'Falta aquest camp.',
      email: 'Aquesta adreça electrònica no sembla vàlida.',
      telephone: 'Aquest número no sembla vàlid.',
      trop: 'Aquest camp és massa llarg (màxim {max} caràcters).',
    },
    sansJs: 'El formulari necessita JavaScript. Escriu-nos directament a',
    courrielObjet: 'Hem rebut el teu missatge',
    courrielBonjour: (p) => `Hola ${p},`,
    courrielRecu: 'El teu missatge ha arribat a MUSIMA. Això només és la confirmació automàtica: algú el llegirà de debò.',
    courrielReponse: 'Responem en pocs dies. Si és urgent, pots respondre directament a aquest correu.',
    courrielRecapTitre: 'El que ens has enviat',
    courrielSignature: 'MUSIMA',
  },
};

/** Le libellé affiché d'un motif, dans une langue. */
export function libelleMotif(motif: Motif, langue: Langue, rencontre?: string) {
  const t = textes[langue];
  return motif === 'inscription'
    ? t.motifInscription(rencontre ?? '')
    : t.motif[motif];
}
