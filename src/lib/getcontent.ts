import fs from 'node:fs';
import path from 'node:path';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { BlogFrontMatter } from '@/types/blog';

const basePath = path.join(process.cwd(), 'content');

function getContentBySlug(
	slug: string,
	lang: string,
	ext: string = 'mdx',
): string | undefined {
	try {
		const filePath = path.join(basePath, `${slug}.${lang}.${ext}`);
		return fs.readFileSync(filePath, 'utf8');
	} catch (e) {
		try {
			const defaultFilePath = path.join(basePath, `${slug}.en.${ext}`);
			return fs.readFileSync(defaultFilePath, 'utf8');
		} catch (e) {
			return undefined;
		}
	}
}

type AllSlug = {
	slug: string;
	lang: string;
};

function getAllSlugs(dir: string): AllSlug[] {
	const files = fs.readdirSync(path.join(basePath, dir));
	const slugs = files.map((file) => {
		const slug = file.replace('.mdx', '');
		return slug;
	});
	const allSlugs: AllSlug[] = [];
	slugs.forEach((slug) => {
		const lang = slug.split('.')[1];
		const slugName = slug.split('.')[0];
		const allSlug: AllSlug = {
			slug: slugName,
			lang,
		};
		if (lang === undefined || slug === undefined) return;
		allSlugs.push(allSlug);
	});
	return allSlugs;
}

type BlogMetadata = {
	slug: string;
	lang: string;
	thumbnail?: string;
	title: string;
	description: string;
	date: Date;
};

async function getBlogMetadata(lang: string): Promise<BlogMetadata[]> {
	const allSlugs = getAllSlugs('posts');
	const blogMetadata: BlogMetadata[] = [];
	for (const slug of allSlugs) {
		const rawContent = getContentBySlug(`posts/${slug.slug}`, slug.lang);
		if (rawContent) {
			const { frontmatter } = await compileMDX<BlogFrontMatter>({
				source: rawContent,
				options: { parseFrontmatter: true },
			});
			const blogMeta: BlogMetadata = {
				slug: slug.slug,
				lang: slug.lang,
				thumbnail: frontmatter.thumbnail,
				title: frontmatter.title,
				description: frontmatter.description,
				date: frontmatter.date,
			};
			blogMetadata.push(blogMeta);
		}
	}

	const uniqueBlogMetadata: BlogMetadata[] = [];
	blogMetadata.forEach((blogMeta) => {
		const isExist = uniqueBlogMetadata.find(
			(meta) => meta.slug === blogMeta.slug,
		);
		if (isExist) {
			const index = uniqueBlogMetadata.findIndex(
				(meta) => meta.slug === blogMeta.slug,
			);
			uniqueBlogMetadata[index].lang = lang;
		} else {
			uniqueBlogMetadata.push(blogMeta);
		}
	});

	uniqueBlogMetadata.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		return dateB.getTime() - dateA.getTime();
	});
	return uniqueBlogMetadata;
}

export { getContentBySlug, getAllSlugs, getBlogMetadata };
