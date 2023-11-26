import { unstable_setRequestLocale } from 'next-intl/server';
import { compileMDX } from 'next-mdx-remote/rsc';
import * as Icons from 'react-icons/fa6';
import TextWithImages from '@/components/article/textWithImages';
import ArticleLayout from '@/components/layouts/article';
import { getContentBySlug } from '@/lib/getcontent';
import type { Params } from '@/types/params';
import type { Metadata } from 'next';
import type { FC } from 'react';

type PageProps = {
  params: Params;
};

const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  unstable_setRequestLocale(params.locale);
  const rawContent = getContentBySlug('about', params.locale);

  if (!rawContent) {
    return {
      title: '404',
    };
  }

  const { frontmatter } = await compileMDX<{
    title: string;
    description: string;
  }>({
    source: rawContent,
    options: { parseFrontmatter: true },
  });

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
};

const Page: FC<PageProps> = async ({ params }) => {
  const rawContent = getContentBySlug('about', params.locale);

  if (!rawContent) return null;

  const { content, frontmatter } = await compileMDX<{
    title: string;
    description: string;
  }>({
    source: rawContent,
    components: {
      TextWithImages,
      ...Icons,
    },
    options: { parseFrontmatter: true },
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

export { generateMetadata };
export default Page;
