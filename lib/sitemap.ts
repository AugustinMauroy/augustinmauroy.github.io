import { availableLocaleCodes } from '~/utils/i18n';
import { getSlugs, getFrontmatter } from './content';
import type { MetadataRoute } from 'next';
import type { BlogFrontmatter } from '~/types/frontmatter';

type GenerateSitemapProps = {
  section: string;
  lang: string;
};

export const generateSitemap = async ({
  section,
  lang,
}: GenerateSitemapProps): Promise<MetadataRoute.Sitemap> => {
  const slugs = await getSlugs({ section, lang });

  const sitemap: MetadataRoute.Sitemap = [];

  for (const slug of slugs) {
    try {
      const { frontmatter } = await getFrontmatter<BlogFrontmatter>({
        section,
        lang,
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
          {} as Record<string, string>
        ),
      };

      sitemap.push({
        url,
        lastModified: frontmatter.date,
        changeFrequency: 'weekly',
        priority: 0.7,
        alternates,
      });
    } catch (error) {
      console.error(`Error generating sitemap for ${slug}:`, error);
    }
  }

  return sitemap;
};
