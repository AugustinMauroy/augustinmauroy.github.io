import { generateSitemap } from '~/lib/sitemap';
import { availableLocaleCodes } from '~/lib/i18n/config.ts';
import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const lang of availableLocaleCodes) {
    const blogSitemap = await generateSitemap({ section: 'blog', lang });
    const aboutSitemap = await generateSitemap({ section: 'about', lang });

    sitemapEntries.push(...blogSitemap, ...aboutSitemap);
  }

  return sitemapEntries;
}
