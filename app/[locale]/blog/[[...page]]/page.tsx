import { RssIcon } from '@heroicons/react/24/solid';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import BaseLayout from '~/components/Layout/Base/index.tsx';
import ButtonLink from '~/components/Common/Button/Link/index.tsx';
import PostCard from '~/components/Common/PostCard/index.tsx';
import Pagination from '~/components/Common/Pagination/index.tsx';
import { getSlugs, getFrontmatter } from '~/lib/content.ts';
import styles from './page.module.css';
import type { FC } from 'react';
import type { Metadata } from 'next';
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
    title: t('title'),
    description: t('description'),
  };
};

export const generateStaticParams = async ({ params }: StaticParams) => {
  const posts = await getSlugs({ section: 'blog', lang: params.locale });
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
    section: 'blog',
    lang: (await params).locale,
  });
  const metadata = await Promise.all(
    posts
      .slice(
        pageNumbers * MAX_POSTS_PER_PAGE,
        (pageNumbers + 1) * MAX_POSTS_PER_PAGE
      )
      .map(slug =>
        getFrontmatter<BlogFrontmatter>({
          section: 'blog',
          lang: locale,
          slug,
        })
      )
  );
  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / MAX_POSTS_PER_PAGE);
  const t = await getTranslations('app.blog');

  return (
    <BaseLayout className={styles.page}>
      <header className={styles.header}>
        <h1>{t('title')}</h1>
        <ButtonLink
          href="/feed/blog/rss.xml"
          aria-label={t('rss')}
          className={styles.rss}
        >
          <RssIcon aria-label={t('rss')} />
        </ButtonLink>
      </header>
      <section className={styles.posts}>
        {metadata
          .sort(
            (a, b) =>
              new Date(b.frontmatter.date).getTime() -
              new Date(a.frontmatter.date).getTime()
          )
          .map(post => (
            <PostCard key={post.slug} {...post} {...post.frontmatter} />
          ))}
      </section>
      <pre>
        {JSON.stringify(
          {
            pageNumbers,
            totalPosts,
            totalPages,
            posts: metadata.map(post => post.slug),
          },
          null,
          2
        )}
      </pre>
      {totalPages > 1 && (
        <Pagination currentPage={pageNumbers} totalPages={totalPages} />
      )}
    </BaseLayout>
  );
};

export default Page;
