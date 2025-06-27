import { RssIcon } from '@heroicons/react/24/solid';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import type { FC } from 'react';
import ButtonLink from '~/components/Common/Button/Link/index.tsx';
import Pagination from '~/components/Common/Pagination/index.tsx';
import PostCard from '~/components/Common/PostCard/index.tsx';
import BaseLayout from '~/components/Layout/Base/index.tsx';
import { getFrontmatter, getSlugs } from '~/lib/content.ts';
import type { BlogFrontmatter } from '~/types/frontmatter.ts';
import type { BaseParams } from '~/types/params.ts';

const MAX_POSTS_PER_PAGE = 6;

type PageProps = {
  params: Promise<{
    page?: string[];
  }>;
} & BaseParams;

type StaticParams = {
  params: {
    locale: string;
  };
};

export const dynamic = 'force-static';

export const generateMetadata = async (): Promise<Metadata | null> => {
  const t = await getTranslations('app.blog');

  return {
    description: t('description'),
    title: t('title'),
  };
};

export const generateStaticParams = async ({ params }: StaticParams) => {
  const posts = await getSlugs({ lang: params.locale, section: 'blog' });
  const totalPages = Math.ceil(posts.length / MAX_POSTS_PER_PAGE);

  const result = Array.from({ length: totalPages }, (_, i) => ({
    page: [i.toString()],
  }));

  return [{ page: ['index'] }, ...result];
};

const Page: FC<PageProps> = async ({ params }) => {
  const { page, locale } = await params;
  let pageNumbers = null;
  if (page && page[0] === 'index') {
    pageNumbers = 0;
  } else if (page && Number.isInteger(parseInt(page[0], 10))) {
    pageNumbers = parseInt(page[0], 10);
  }

  if (pageNumbers === null) notFound();

  const posts = await getSlugs({
    lang: (await params).locale,
    section: 'blog',
  });
  const metadata = await Promise.all(
    posts
      .slice(
        pageNumbers * MAX_POSTS_PER_PAGE,
        (pageNumbers + 1) * MAX_POSTS_PER_PAGE,
      )
      .map((slug) =>
        getFrontmatter<BlogFrontmatter>({
          lang: locale,
          section: 'blog',
          slug,
        }),
      ),
  );
  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / MAX_POSTS_PER_PAGE);
  const t = await getTranslations('app.blog');

  return (
    <BaseLayout className="mx-auto w-full p-4 md:px-8 lg:w-3/4 lg:px-0">
      <header className="relative mb-4 border-b-2 border-b-black py-4 dark:border-b-white">
        <h1 className="font-bold text-4xl">{t('title')}</h1>
        <ButtonLink
          aria-label={t('rss')}
          className="absolute top-0 right-0 mt-4 mr-4"
          href="/feed/blog/rss.xml"
        >
          <RssIcon aria-label={t('rss')} />
        </ButtonLink>
      </header>
      <section className="mb-4 flex flex-wrap gap-4">
        {metadata
          .sort(
            (a, b) =>
              new Date(b.frontmatter.date).getTime() -
              new Date(a.frontmatter.date).getTime(),
          )
          .map((post) => (
            <PostCard key={post.slug} {...post} {...post.frontmatter} />
          ))}
      </section>
      {totalPages > 1 && (
        <Pagination currentPage={pageNumbers} totalPages={totalPages} />
      )}
    </BaseLayout>
  );
};

export default Page;
