import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* ------------------------------------------------------------------ *
 *  ARCHITECTURE DE CONTENU MUSIMA
 *  ------------------------------------------------------------------
 *  Chaque collection = un type de contenu éditable depuis /admin.
 *  Ajouter un nouveau type = ajouter une collection ici + un bloc
 *  dans public/admin/config.yml. Rien d'autre à toucher.
 *
 *  Les images vivent dans src/assets/uploads/ pour être optimisées
 *  automatiquement (AVIF/WebP, tailles multiples) par Astro.
 * ------------------------------------------------------------------ */

/** Champs présents sur tous les contenus publiables. */
const base = {
  /** Masque l'entrée du site public sans la supprimer. */
  brouillon: z.boolean().default(false),
  /** Marque une fiche de démonstration : badge visible, à supprimer. */
  modele: z.boolean().default(false),
  /**
   * Identifiant partagé par les quatre versions linguistiques d'un même
   * contenu. C'est lui qui permet au sélecteur de langue d'emmener le
   * visiteur sur la traduction de la page qu'il lit, et non sur l'accueil.
   * La langue, elle, se déduit du dossier : evenements/es/... est en espagnol.
   */
  cle: z.string(),
};

const seo = {
  meta_titre: z.string().optional(),
  meta_description: z.string().optional(),
};

const evenements = defineCollection({
  loader: glob({ base: './src/content/evenements', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      titre: z.string(),
      /** Format éditorial de la rencontre. */
      format: z
        .enum(['Conférence', 'Rencontre', 'Table ronde', 'Atelier', 'Projection', 'Autre'])
        .default('Rencontre'),
      date_debut: z.coerce.date(),
      date_fin: z.coerce.date().optional(),
      heure: z.string().optional(),
      lieu: z
        .object({
          nom: z.string().optional(),
          adresse: z.string().optional(),
          ville: z.string().optional(),
          pays: z.string().optional(),
          en_ligne: z.boolean().default(false),
        })
        .default({ en_ligne: false }),
      resume: z.string().optional(),
      image: image().optional(),
      image_alt: z.string().optional(),
      credit_photo: z.string().optional(),
      intervenants: z.array(reference('intervenants')).default([]),
      projets: z.array(reference('projets')).default([]),
      lien_inscription: z.string().optional(),
      tarif: z.string().optional(),
      /** Alimente les données structurées : Google veut un prix chiffré,
          pas la formule libre saisie dans `tarif`. */
      gratuit: z.boolean().default(false),
      complet: z.boolean().default(false),
      en_avant: z.boolean().default(false),
      ...base,
      ...seo,
    }),
});

const intervenants = defineCollection({
  loader: glob({ base: './src/content/intervenants', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      nom: z.string(),
      /** Fonction courte affichée sous le nom. */
      fonction: z.string().optional(),
      organisation: z.string().optional(),
      territoire: z.string().optional(),
      domaines: z.array(z.string()).default([]),
      photo: image().optional(),
      photo_alt: z.string().optional(),
      credit_photo: z.string().optional(),
      /** Une phrase d'accroche, affichée sur la fiche annuaire. */
      accroche: z.string().optional(),
      liens: z
        .object({
          site: z.string().optional(),
          linkedin: z.string().optional(),
          instagram: z.string().optional(),
          youtube: z.string().optional(),
        })
        .default({}),
      en_avant: z.boolean().default(false),
      ...base,
      ...seo,
    }),
});

const projets = defineCollection({
  loader: glob({ base: './src/content/projets', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      titre: z.string(),
      statut: z.enum(['Idée', 'En préparation', 'En cours', 'Réalisé']).default('En cours'),
      annee: z.string().optional(),
      territoire: z.string().optional(),
      resume: z.string().optional(),
      image: image().optional(),
      image_alt: z.string().optional(),
      credit_photo: z.string().optional(),
      partenaires: z.array(z.string()).default([]),
      intervenants: z.array(reference('intervenants')).default([]),
      lien: z.string().optional(),
      en_avant: z.boolean().default(false),
      ...base,
      ...seo,
    }),
});

const recits = defineCollection({
  loader: glob({ base: './src/content/recits', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      titre: z.string(),
      date: z.coerce.date(),
      categorie: z
        .enum(['Portrait', "Retour d'événement", 'Idées & analyses', 'Actualité'])
        .default('Portrait'),
      auteur: z.string().optional(),
      resume: z.string().optional(),
      image: image().optional(),
      image_alt: z.string().optional(),
      credit_photo: z.string().optional(),
      mots_cles: z.array(z.string()).default([]),
      intervenants: z.array(reference('intervenants')).default([]),
      temps_lecture: z.string().optional(),
      en_avant: z.boolean().default(false),
      ...base,
      ...seo,
    }),
});

const albums = defineCollection({
  loader: glob({ base: './src/content/albums', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      titre: z.string(),
      date: z.coerce.date().optional(),
      lieu: z.string().optional(),
      evenement: reference('evenements').optional(),
      couverture: image().optional(),
      couverture_alt: z.string().optional(),
      photos: z
        .array(
          z.object({
            fichier: image(),
            /** Obligatoire : décrit l'image pour les lecteurs d'écran. */
            alt: z.string(),
            credit: z.string().optional(),
            /**
             * Place de la photo dans la mosaïque. Une grille où tout est
             * au même format donne un damier ; on varie les hauteurs.
             * `large` ne recadre pas — à réserver aux photos de groupe,
             * où un recadrage couperait quelqu'un au bord du cadre.
             */
            cadrage: z.enum(['large', 'standard', 'portrait']).default('standard'),
          }),
        )
        .default([]),
      ...base,
      ...seo,
    }),
});

export const collections = { evenements, intervenants, projets, recits, albums };
