import { Feed } from 'feed';
import { getFrontmatter, getSlugs } from './content';
import type { BlogFrontmatter } from '~/types/frontmatter';

type GenerateRssFeedProps = {
  section: string;
  lang: string;
};

export const generateRssFeed = async ({
  section,
  lang,
}: GenerateRssFeedProps): Promise<string> => {
  const feed = new Feed({
    title: `Augustin M - ${section}`,
    description: `Augustin M Website - ${section}`,
    id: 'https://augustinmauroy.github.io/',
    link: 'https://augustinmauroy.github.io/',
    language: lang,
    copyright: `Licence MIT Copyright (c) ${new Date().getFullYear} Augustin Mauroy`,
  });

  const slugs = await getSlugs({ section, lang });

  for (const slug of slugs) {
    const { frontmatter } = await getFrontmatter<BlogFrontmatter>({
      section,
      lang,
      slug,
    });

    feed.addItem({
      title: frontmatter.title,
      id: `https://augustinmauroy.github.io/${lang}/${section}/${slug}`,
      link: `https://augustinmauroy.github.io/${lang}/${section}/${slug}`,
      description: frontmatter.description,
      date: new Date(frontmatter.date),
    });
  }

  return feed.rss2();
};
