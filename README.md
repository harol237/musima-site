# Site MUSIMA

Site de l’association MUSIMA : événements, intervenants, projets, récits et galerie photo,
avec une interface d’administration pour tout modifier sans toucher au code.

---

## Démarrer

```bash
npm install     # une seule fois
npm run dev     # site sur http://localhost:4321
```

| Commande | Ce qu’elle fait |
| --- | --- |
| `npm run dev` | Lance le site en local, rechargement automatique à chaque modification |
| `npm run build` | Vérifie les types puis génère le site dans `dist/` |
| `npm run preview` | Sert le site généré, exactement comme en production |
| `npm run verifier` | Vérifie les types sans générer le site |
| `npm run cms` | Lance le pont d’édition locale (voir « Modifier le contenu ») |
| `npm run cms:maj` | Met à jour l’interface d’administration après `npm update @sveltia/cms` |
| `npm run nettoyer-modeles` | Supprime toutes les fiches de démonstration |

---

## Modifier le contenu

### En ligne (une fois le site déployé)

Aller sur `https://votre-domaine/admin`, se connecter, modifier, publier.
Chaque publication crée un commit dans le dépôt et redéploie le site automatiquement.

### En local

```bash
npm run cms     # dans un premier terminal
npm run dev     # dans un second
```

Puis ouvrir <http://localhost:4321/admin>. Les modifications s’écrivent directement dans
`src/content/`, sans passer par GitHub.

---

## Où vivent les choses

```
src/
├── content/          ← LE CONTENU (un fichier Markdown = une fiche)
│   ├── evenements/
│   ├── intervenants/
│   ├── projets/
│   ├── recits/
│   └── albums/
├── assets/uploads/   ← LES PHOTOS (optimisées automatiquement)
├── data/
│   ├── site.json         ← nom, baseline, coordonnées, réseaux, infolettre
│   └── navigation.ts     ← le menu principal
├── styles/
│   ├── tokens.css        ← COULEURS, TYPO, ESPACEMENTS — tout se change ici
│   └── global.css        ← styles partagés
├── components/       ← briques réutilisables (cartes, en-têtes, filtres…)
├── layouts/Base.astro ← squelette commun à toutes les pages
├── pages/            ← une page du site = un fichier
└── content.config.ts ← les champs de chaque type de contenu

public/admin/config.yml ← les champs tels qu’ils apparaissent dans l’interface d’admin
```

### Changer une couleur ou une police

Tout est dans `src/styles/tokens.css`. Les trois couleurs de marque viennent du logo
(`logo.svg`) ; les variantes « encre » sont des versions assombries calculées pour rester
lisibles sur fond clair. Les polices se déclarent dans `astro.config.mjs`.

### Ajouter un champ à un type de contenu

Deux fichiers à modifier, dans cet ordre :

1. `src/content.config.ts` — ajouter le champ au schéma (il devient typé et validé) ;
2. `public/admin/config.yml` — ajouter le champ correspondant dans l’interface d’admin.

Puis l’afficher dans la page ou le composant concerné.

### Ajouter un type de contenu

Même principe : une nouvelle collection dans `src/content.config.ts`, un nouveau bloc dans
`public/admin/config.yml`, un dossier dans `src/content/`, et les pages de liste et de détail
dans `src/pages/`. Le reste (SEO, thèmes, navigation, styles) suit tout seul.

---

## Emplacements à compléter

Les zones où il manque une information s’affichent en clair sur le site :

- `[PHOTO À AJOUTER]`
- `[TEXTE À FINALISER]`
- `[LIEN À AJOUTER]`

Elles disparaissent dès que l’information est saisie. Pour les retrouver toutes :

```bash
grep -rn "À AJOUTER\|À FINALISER\|À CONFIRMER\|À DÉFINIR\|À COMPLÉTER" src/ public/admin/
```

### Fiches de démonstration

Les fiches marquées `modele: true` portent un badge « Modèle » sur le site. Elles existent
uniquement pour montrer le rendu des listes et des pages de détail.

```bash
npm run nettoyer-modeles
```

---

## Choix techniques

| Sujet | Choix | Pourquoi |
| --- | --- | --- |
| Générateur | Astro 7, sortie 100 % statique | Pages HTML pures : rapides à charger, faciles à héberger, bien indexées |
| CMS | Sveltia CMS, servi depuis `/admin` | Contenu versionné dans Git, aucune base de données, aucun abonnement |
| Polices | Auto-hébergées via l’API Fonts d’Astro | Aucune requête vers un service tiers, aucun décalage au chargement |
| Images | `astro:assets` | Conversion AVIF/WebP, tailles multiples, dimensions figées |
| Styles | CSS natif avec variables | Aucune dépendance à maintenir, lisible dans dix ans |
| JavaScript | Uniquement pour le menu, le thème et les filtres | Le site reste entièrement consultable sans JavaScript |

### Accessibilité

Contrastes vérifiés au niveau AA dans les deux thèmes, navigation clavier complète avec focus
visible, lien d’évitement, structure de titres hiérarchisée, description obligatoire pour les
photos de galerie, animations désactivées si le système le demande.

### Vérification des types

`npm run verifier` utilise `tsc` directement. La commande `astro check` n’est pas utilisée :
elle sature la mémoire avec cette version d’Astro (problème en amont, sans rapport avec le code
du projet).

---

## Avant la mise en ligne

- [ ] Remplacer le domaine dans `astro.config.mjs` et `public/robots.txt`
- [ ] Renseigner le dépôt GitHub dans `public/admin/config.yml`
- [ ] Configurer l’authentification de l’admin (`base_url`)
- [ ] Ajouter une image de partage 1200×630 et la déclarer dans `src/components/Seo.astro`
- [ ] Remplir `src/data/site.json` (e-mail, adresse, réseaux, infolettre)
- [ ] Compléter les mentions légales et la politique de confidentialité
- [ ] Brancher le formulaire de contact et l’infolettre
- [ ] Supprimer les fiches de démonstration
