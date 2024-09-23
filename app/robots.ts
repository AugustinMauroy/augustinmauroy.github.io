import type { MetadataRoute } from 'next';

function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://augustinmauroy.github.io',
    sitemap: 'https://augustinmauroy.github.io/sitemap.xml',
  };
}

export default robots;
