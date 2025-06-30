import type { MetadataRoute } from 'next';
import type { BlogFrontmatter } from '~/types/frontmatter.ts';
import { getFrontmatter, getSlugs } from './content.ts';
import { availableLocaleCodes } from './i18n/config.ts';

type GenerateSitemapProps = {
  section: string;
  lang: string;
};

export const generateSitemap = async ({
  section,
  lang,
}: GenerateSitemapProps): Promise<MetadataRoute.Sitemap> => {
  const slugs = await getSlugs({ lang, section });

  const sitemap: MetadataRoute.Sitemap = [];

  for (const slug of slugs) {
    try {
      const { frontmatter } = await getFrontmatter<BlogFrontmatter>({
        lang,
        section,
        slug,
      });

      const url = `https://augustinmauroy.github.io/${lang}/${section}/${slug}`;
      const alternates = {
        languages: availableLocaleCodes.reduce(
          (acc, localeCode) => {
            if (localeCode !== lang) {
              acc[localeCode] = url.replace(`/${lang}/`, `/${localeCode}/`);
            }

            return acc;
          },
          {} as Record<string, string>,
        ),
      };

      sitemap.push({
        alternates,
        changeFrequency: 'weekly',
        lastModified: frontmatter.date,
        priority: 0.7,
        url,
      });
    } catch (error) {
      console.error(`Error generating sitemap for ${slug}:`, error);
    }
  }

  return sitemap;
};
