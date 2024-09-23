import { generateSitemap } from '~/lib/sitemap';
import { availableLocaleCodes } from '~/utils/i18n';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const lang of availableLocaleCodes) {
    const blogSitemap = await generateSitemap({ section: 'blog', lang });
    const aboutSitemap = await generateSitemap({ section: 'about', lang });

    sitemapEntries.push(...blogSitemap, ...aboutSitemap);
  }

  return sitemapEntries;
}
