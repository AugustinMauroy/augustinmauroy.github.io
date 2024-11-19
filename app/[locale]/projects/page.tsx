import { notFound } from 'next/navigation';
import compileMDX from '~/lib/mdx';
import { getContent } from '~/lib/content';
import { projectsMdxComponents } from '~/lib/mdxComponents';
import ArticleLayout from '~/components/Layout/Article';
import type { FC } from 'react';
import type { Metadata } from 'next';
import type { ProjectsFrontmatter } from '~/types/frontmatter';
import type { BaseParams } from '~/types/params';

type PageProps = {
  params: BaseParams;
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata | null> => {
  const rawSource = await getContent({
    section: 'projects',
    lang: params.locale,
  });

  if (!rawSource) return null;

  const { frontmatter } = await compileMDX<ProjectsFrontmatter>({
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
    section: 'projects',
    lang: params.locale,
  });

  if (!rawSource) notFound();

  const { content, frontmatter } = await compileMDX<ProjectsFrontmatter>({
    source: rawSource,
    components: projectsMdxComponents,
    parseFrontmatter: true,
  });

  return (
    <ArticleLayout
      title={frontmatter.title}
      description={frontmatter.description}
      markdownContent={false}
    >
      {content}
    </ArticleLayout>
  );
};

export default Page;