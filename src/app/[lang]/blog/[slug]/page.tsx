import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import MDXComponents from '@/components/article/mdxComponents';
import BlogPostLayout from '@/components/layouts/blog';
import { getContentBySlug, getAllSlugs } from '@/lib/getcontent';
import type { BlogParams, BlogFrontMatter } from '@/types/blog';
import type { Metadata } from 'next';
import type { FC } from 'react';

type PageProps = {
  params: BlogParams;
};

const generateStaticParams = ({ params }: PageProps) => {
  const slugs = getAllSlugs('posts');
  return slugs.map(data => ({
    slug: data.slug,
  }));
};

const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const rawContent = getContentBySlug(`posts/${params.slug}`, params.lang);

  if (!rawContent) {
    return {
      title: '404',
    };
  }

  const { frontmatter } = await compileMDX<BlogFrontMatter>({
    source: rawContent,
    options: { parseFrontmatter: true },
  });

  const authors = () => {
    const authorsArray = frontmatter.authors
      .split(',')
      .map(author => author.trim());

    return authorsArray.map(author => {
      return {
        name: author,
        url: `https://github.com/${author}`,
      };
    });
  };

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    authors: authors(),
    keywords: frontmatter.keywords ?? [],
  };
};

const Page: FC<PageProps> = async ({ params }) => {
  const rawContent = getContentBySlug(`posts/${params.slug}`, params.lang);

  if (!rawContent) return notFound();

  const { content, frontmatter } = await compileMDX<BlogFrontMatter>({
    source: rawContent,
    components: MDXComponents,
    options: { parseFrontmatter: true },
  });

  const authors = frontmatter.authors.split(',').map(author => author.trim());

  return (
    <BlogPostLayout
      title={frontmatter.title}
      description={frontmatter.description}
      date={frontmatter.date}
      authors={authors}
      thumbnail={frontmatter.thumbnail}
    >
      {content}
    </BlogPostLayout>
  );
};

export { generateStaticParams, generateMetadata };
export default Page;
