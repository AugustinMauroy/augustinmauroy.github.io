import { routing } from '~/lib/i18n/routing';
import { generateRssFeed } from '~/lib/rss.ts';
import type { BaseParams } from '~/types/params.ts';

export const dynamic = 'force-static';

export const generateStaticParams = () =>
  routing.locales.map((locale) => ({ locale }));

export const GET = async (_: Request, { params }: BaseParams) => {
  const { locale } = await params;
  const feed = await generateRssFeed({
    lang: locale,
    section: 'blog',
  });

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
