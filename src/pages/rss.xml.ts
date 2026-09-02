import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import site from '~/data/site.json';
import { chargerRecits } from '~/lib/contenu';

export async function GET(context: APIContext) {
  const recits = await chargerRecits();

  return rss({
    title: `Récits — ${site.nom}`,
    description: site.description_courte,
    site: context.site!,
    customData: '<language>fr-FR</language>',
    items: recits.map((recit) => ({
      title: recit.data.titre,
      description: recit.data.resume ?? '',
      pubDate: recit.data.date,
      link: `/recits/${recit.id}`,
      categories: [recit.data.categorie, ...recit.data.mots_cles],
      ...(recit.data.auteur ? { author: recit.data.auteur } : {}),
    })),
  });
}
