import { notFound } from 'next/navigation';
import compileMDX from '~/lib/mdx';
import { getContent, getSlugs } from '~/lib/content';
import PostLayout from '~/components/Layout/Post';
import { blogMdxComponents } from '~/lib/mdxComponents';
import type { FC } from 'react';
import type { Metadata } from 'next';
import type { BlogFrontmatter } from '~/types/frontmatter';
import type { BaseParams } from '~/types/params';

type PageProps = {
  params: {
    post: string;
  } & BaseParams;
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
    lang: params.locale,
    slug: params.post,
  });

  if (!rawSource) return null;

  const { frontmatter } = await compileMDX<BlogFrontmatter>({
    source: rawSource,
    parseFrontmatter: true,
  });

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
};

export const generateStaticParams = async () => {
  const slugs = await getSlugs({ section: 'blog' });

  return slugs.map(slug => ({ post: slugToParams(slug) }));
};

const Page: FC<PageProps> = async ({ params }) => {
  const rawSource = await getContent({
    section: 'blog',
    slug: params.post,
    lang: params.locale,
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
