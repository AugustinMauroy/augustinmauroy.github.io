import { notFound } from 'next/navigation';
import compileMDX from '~/lib/mdx';
import { getContent } from '~/lib/content.ts';
import { aboutMdxComponents } from '~/lib/mdxComponents.ts';
import ArticleLayout from '~/components/Layout/Article/index.tsx';
import type { FC } from 'react';
import type { Metadata } from 'next';
import type { AboutFrontmatter } from '~/types/frontmatter.ts';
import type { BaseParams } from '~/types/params.ts';

type PageProps = BaseParams;

export const dynamic = 'force-static';

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata | null> => {
  const rawSource = await getContent({
    section: 'about',
    lang: (await params).locale,
  });

  if (!rawSource) return null;

  const { frontmatter } = await compileMDX<AboutFrontmatter>({
    source: rawSource,
    parseFrontmatter: true,
  });

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
};

const Page: FC<PageProps> = async ({ params }) => {
  const rawSource = await getContent({
    section: 'about',
    lang: (await params).locale,
  });

  if (!rawSource) notFound();

  const { content, frontmatter } = await compileMDX<AboutFrontmatter>({
    source: rawSource,
    components: aboutMdxComponents,
    parseFrontmatter: true,
  });

  return (
    <ArticleLayout
      title={frontmatter.title}
      description={frontmatter.description}
    >
      {content}
    </ArticleLayout>
  );
};

export default Page;
