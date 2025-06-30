import type { MetadataRoute } from 'next';
import { availableLocaleCodes } from '~/lib/i18n/config.ts';
import { generateSitemap } from '~/lib/sitemap';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const lang of availableLocaleCodes) {
    const blogSitemap = await generateSitemap({ lang, section: 'blog' });
    const aboutSitemap = await generateSitemap({ lang, section: 'about' });

    sitemapEntries.push(...blogSitemap, ...aboutSitemap);
  }

  return sitemapEntries;
}
