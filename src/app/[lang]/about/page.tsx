import { compileMDX } from 'next-mdx-remote/rsc';
import * as Icons from 'react-icons/fa';
import { getContentBySlug } from '@/lib/getcontent';
import ArticleLayout from '@/components/layouts/article';
import type { FC } from 'react';
import type { Metadata } from 'next';
import type { Params } from '@/types/params';

type PageProps = {
	params: Params;
};

const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
	const rawContent = getContentBySlug('about', params.lang);

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
	const rawContent = getContentBySlug('about', params.lang);

	if (!rawContent) return null;

	const { content, frontmatter } = await compileMDX<{
		title: string;
		description: string;
	}>({
		source: rawContent,
		components: Icons,
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
