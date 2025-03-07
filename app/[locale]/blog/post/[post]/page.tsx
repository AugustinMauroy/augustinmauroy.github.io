import { notFound } from 'next/navigation';
import compileMDX from '~/lib/mdx.ts';
import { getContent, getSlugs } from '~/lib/content.ts';
import PostLayout from '~/components/Layout/Post/index.tsx';
import { blogMdxComponents } from '~/lib/mdxComponents';
import { getGithubProfileUrl } from '~/utils/gitHubUtils.ts';
import type { FC } from 'react';
import type { Metadata } from 'next';
import type { BlogFrontmatter } from '~/types/frontmatter.ts';
import type { BaseParams } from '~/types/params.ts';

type PageProps = BaseParams & {
  params: Promise<{ post: string }>;
};

const slugToParams = (slug: string) => {
  const post = slug.split('.');

  return post[0];
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata | null> => {
  const rawSource = await getContent({
    section: 'blog',
    lang: (await params).locale,
    slug: (await params).post,
  });

  if (!rawSource) return null;

  const { frontmatter } = await compileMDX<BlogFrontmatter>({
    source: rawSource,
    parseFrontmatter: true,
  });

  const authors = frontmatter.authors
    .split(', ')
    .map(author => ({ name: author, url: getGithubProfileUrl(author) }));

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    authors,
  };
};

export const generateStaticParams = async () => {
  const slugs = await getSlugs({ section: 'blog' });

  return slugs.map(slug => ({ post: slugToParams(slug) }));
};

const Page: FC<PageProps> = async ({ params }) => {
  const rawSource = await getContent({
    section: 'blog',
    slug: (await params).post,
    lang: (await params).locale,
  });

  if (!rawSource) notFound();

  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source: rawSource,
    parseFrontmatter: true,
    components: blogMdxComponents,
  });

  return <PostLayout {...frontmatter}>{content}</PostLayout>;
};

export default Page;
