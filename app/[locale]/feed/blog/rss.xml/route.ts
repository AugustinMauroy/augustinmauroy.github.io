import { generateRssFeed } from '~/lib/rss';
import { availableLocales } from '~/utils/i18n';
import type { BaseParams } from '~/types/params';

export const generateStaticParams = () => {
  return availableLocales.map(lang => ({
    locale: lang.code,
  }));
};

type GETProps = {
  params: BaseParams;
};

export const GET = async (req: Request, { params }: GETProps) => {
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
