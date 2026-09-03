import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import site from '~/data/site.json';
import { champ } from '~/i18n/site';
import { chargerRecits } from '~/lib/contenu';
import { chemin, langues, langueDefaut, type Langue } from '~/i18n/config';
import { traducteur } from '~/i18n/ui';

export function getStaticPaths() {
  return langues
    .filter((l) => l !== langueDefaut)
    .map((langue) => ({ params: { langue }, props: { langue } }));
}

export async function GET(context: APIContext) {
  const langue = context.props.langue as Langue;
  const t = traducteur(langue);
  const recits = await chargerRecits(langue);

  return rss({
    title: `${t('navRecits')} — ${site.nom}`,
    description: champ(site.description_courte, langue),
    site: context.site!,
    customData: `<language>${langue}</language>`,
    items: recits.map((recit) => ({
      title: recit.data.titre,
      description: recit.data.resume ?? '',
      pubDate: recit.data.date,
      link: chemin(langue, 'recits', recit.id.split('/').slice(1).join('/')),
      categories: [recit.data.categorie, ...recit.data.mots_cles],
      ...(recit.data.auteur ? { author: recit.data.auteur } : {}),
    })),
  });
}
