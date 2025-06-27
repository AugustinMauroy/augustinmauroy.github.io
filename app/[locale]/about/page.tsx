import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { FC } from 'react';
import ArticleLayout from '~/components/Layout/Article/index.tsx';
import { getContent } from '~/lib/content.ts';
import compileMDX from '~/lib/mdx';
import { aboutMdxComponents } from '~/lib/mdxComponents.ts';
import type { AboutFrontmatter } from '~/types/frontmatter.ts';
import type { BaseParams } from '~/types/params.ts';

type PageProps = BaseParams;

export const dynamic = 'force-static';

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata | null> => {
  const rawSource = await getContent({
    lang: (await params).locale,
    section: 'about',
  });

  if (!rawSource) return null;

  const { frontmatter } = await compileMDX<AboutFrontmatter>({
    parseFrontmatter: true,
    source: rawSource,
  });

  return {
    description: frontmatter.description,
    title: frontmatter.title,
  };
};

const Page: FC<PageProps> = async ({ params }) => {
  const rawSource = await getContent({
    lang: (await params).locale,
    section: 'about',
  });

  if (!rawSource) notFound();

  const { content, frontmatter } = await compileMDX<AboutFrontmatter>({
    components: aboutMdxComponents,
    parseFrontmatter: true,
    source: rawSource,
  });

  return (
    <ArticleLayout
      description={frontmatter.description}
      title={frontmatter.title}
    >
      {content}
    </ArticleLayout>
  );
};

export default Page;
