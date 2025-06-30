import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { FC } from 'react';
import PostLayout from '~/components/Layout/Post/index.tsx';
import { getContent, getSlugs } from '~/lib/content.ts';
import compileMDX from '~/lib/mdx.ts';
import { blogMdxComponents } from '~/lib/mdxComponents';
import type { BlogFrontmatter } from '~/types/frontmatter.ts';
import type { BaseParams } from '~/types/params.ts';
import { getGithubProfileUrl } from '~/utils/gitHubUtils.ts';

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
    lang: (await params).locale,
    section: 'blog',
    slug: (await params).post,
  });

  if (!rawSource) return null;

  const { frontmatter } = await compileMDX<BlogFrontmatter>({
    parseFrontmatter: true,
    source: rawSource,
  });

  const authors = frontmatter.authors
    .split(', ')
    .map((author) => ({ name: author, url: getGithubProfileUrl(author) }));

  return {
    authors,
    description: frontmatter.description,
    title: frontmatter.title,
  };
};

export const generateStaticParams = async () => {
  const slugs = await getSlugs({ section: 'blog' });

  return slugs.map((slug) => ({ post: slugToParams(slug) }));
};

const Page: FC<PageProps> = async ({ params }) => {
  const rawSource = await getContent({
    lang: (await params).locale,
    section: 'blog',
    slug: (await params).post,
  });

  if (!rawSource) notFound();

  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    components: blogMdxComponents,
    parseFrontmatter: true,
    source: rawSource,
  });

  return <PostLayout {...frontmatter}>{content}</PostLayout>;
};

export default Page;
