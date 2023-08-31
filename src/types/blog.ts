import type { Params } from './params';

export type BlogMetaData = {
	title: string;
	description: string;
	date: Date;
	thumbnail?: string;
	authors: string[];
};

export type BlogFrontMatter = {
	title: string;
	description: string;
	date: Date;
	thumbnail?: string;
	authors: string;
};

export type BlogParams = Params & {
	slug: string;
};
