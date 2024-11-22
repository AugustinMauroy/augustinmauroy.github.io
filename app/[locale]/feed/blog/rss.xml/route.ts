import { generateRssFeed } from '~/lib/rss.ts';
import { availableLocales } from '~/utils/i18n/index.ts';
import type { BaseParams } from '~/types/params.ts';

export const generateStaticParams = () => {
  return availableLocales.map(lang => ({
    locale: lang.code,
  }));
};

type GETProps = {
  params: BaseParams;
};

export const GET = async (_: Request, { params }: GETProps) => {
  const feed = await generateRssFeed({
    section: 'blog',
    lang: params.locale,
  });

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
