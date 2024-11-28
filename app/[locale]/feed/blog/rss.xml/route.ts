import { generateRssFeed } from '~/lib/rss.ts';
import { availableLocales } from '~/lib/i18n/config.ts';
import type { BaseParams } from '~/types/params.ts';

export const dynamic = 'force-static';

export const generateStaticParams = () => {
  return availableLocales.map(lang => ({
    locale: lang.code,
  }));
};

export const GET = async (_: Request, { params }: BaseParams) => {
  const feed = await generateRssFeed({
    section: 'blog',
    lang: (await params).locale,
  });

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
