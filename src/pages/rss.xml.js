import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog')).sort((a, b) => +b.data.date - +a.data.date);
  return rss({
    title: 'shalenkov.dev — блог',
    description: 'Личные записи Макса Шаленкова',
    site: context.site,
    items: posts.map((p) => ({
      link: `/posts/${p.slug}`,
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description,
    })),
  });
}


