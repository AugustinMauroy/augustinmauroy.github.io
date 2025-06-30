import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import type { FC } from 'react';
import ArticleLayout from '~/components/Layout/Article/index.tsx';
import { getContent } from '~/lib/content.ts';
import compileMDX from '~/lib/mdx';
import { projectsMdxComponents } from '~/lib/mdxComponents.ts';
import type { ProjectsFrontmatter } from '~/types/frontmatter.ts';
import type { BaseParams } from '~/types/params.ts';

type PageProps = BaseParams;

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata | null> => {
  const rawSource = await getContent({
    lang: (await params).locale,
    section: 'projects',
  });

  if (!rawSource) return null;

  const { frontmatter } = await compileMDX<ProjectsFrontmatter>({
    parseFrontmatter: true,
    source: rawSource,
  });

  return {
    description: frontmatter.description,
    title: frontmatter.title,
  };
};

const Page: FC<PageProps> = async ({ params }) => {
  const { locale } = await params;
  const rawSource = await getContent({
    lang: locale,
    section: 'projects',
  });

  if (!rawSource) notFound();
  setRequestLocale(locale);

  const { content, frontmatter } = await compileMDX<ProjectsFrontmatter>({
    components: projectsMdxComponents,
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
