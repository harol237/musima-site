import type { APIContext } from 'astro';

/* Généré plutôt qu'écrit en dur dans public/ : le fichier statique
   pointait encore vers www.musima.org après le passage à l'apex, et
   Google ne trouvait donc pas le plan du site. En le construisant à
   partir de `Astro.site`, il ne peut plus diverger de la configuration. */
export function GET({ site }: APIContext) {
  const lignes = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /admin',
    '',
    `Sitemap: ${new URL('sitemap-index.xml', site).href}`,
    '',
  ];
  return new Response(lignes.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
