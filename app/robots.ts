import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    host: 'https://augustinmauroy.github.io',
    rules: {
      allow: '/',
      userAgent: '*',
    },
    sitemap: 'https://augustinmauroy.github.io/sitemap.xml',
  };
}
