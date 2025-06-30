import { Feed } from 'feed';
import type { BlogFrontmatter } from '~/types/frontmatter.ts';
import { getFrontmatter, getSlugs } from './content.ts';

type GenerateRssFeedProps = {
  section: string;
  lang: string;
};

export const generateRssFeed = async ({
  section,
  lang,
}: GenerateRssFeedProps): Promise<string> => {
  const feed = new Feed({
    copyright: `Licence MIT Copyright (c) ${new Date().getFullYear()} Augustin Mauroy`,
    description: `Augustin M Website - ${section}`,
    generator: '',
    id: 'https://augustinmauroy.github.io/',
    language: lang,
    link: 'https://augustinmauroy.github.io/',
    title: `Augustin M - ${section}`,
  });

  const slugs = await getSlugs({ lang, section });

  for (const slug of slugs) {
    const { frontmatter } = await getFrontmatter<BlogFrontmatter>({
      lang,
      section,
      slug,
    });

    feed.addItem({
      date: new Date(frontmatter.date),
      description: frontmatter.description,
      id: `https://augustinmauroy.github.io/${lang}/${section}/${slug}`,
      link: `https://augustinmauroy.github.io/${lang}/${section}/${slug}`,
      title: frontmatter.title,
    });
  }

  return feed.rss2();
};
