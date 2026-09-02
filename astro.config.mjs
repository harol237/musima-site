// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domaine officiel de l'association, enregistré chez Cloudflare.
// Alimente le sitemap, le flux RSS et les URLs canoniques.
// www.musima.org redirige ici (voir public/_redirects).
const SITE = 'https://musima.org';

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: { format: 'file' },

  integrations: [
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR' } },
      // Hors du plan du site : l'admin, et les fiches de démonstration
      // encore à remplir — elles portent toutes « -modele- » dans leur
      // nom de fichier et sont déjà en noindex.
      filter: (page) => !page.includes('/admin') && !page.includes('-modele-'),
    }),
  ],

  // Polices auto-hébergées : téléchargées au build, servies depuis notre
  // domaine, avec métriques de repli calculées pour supprimer le
  // décalage de mise en page pendant le chargement.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Bricolage Grotesque',
      cssVariable: '--font-display',
      weights: ['400 800'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Segoe UI', 'system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Newsreader',
      cssVariable: '--font-read',
      weights: ['300 600'],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Iowan Old Style', 'Georgia', 'serif'],
    },
  ],

  image: {
    responsiveStyles: true,
    layout: 'constrained',
  },

  markdown: {
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
