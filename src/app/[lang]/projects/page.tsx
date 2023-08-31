import yml from 'js-yaml';
import { getContentBySlug } from '@/lib/getcontent';
import Card from '@/components/projects/card';
import style from './page.module.scss';
import type { FC } from 'react';
import type { Params } from '@/types/params';
import type { Projects } from '@/types/projects';

type PageProps = {
	params: Params;
};

const Page: FC<PageProps> = ({ params }) => {
	const RawProjects = getContentBySlug('projects', params.lang, 'yml');

	if (!RawProjects) return null;

	//@ts-ignore
	const Projects: Projects[] = yml.load(RawProjects);

	return (
		<article className={style.container}>
			<div className={style.cardContainer}>
				{Projects.map((project, index) => (
					<Card
						key={index}
						title={project.title}
						description={project.description}
						link={project.link}
						linkText={project.linkText}
						thumbnail={project.thumbnail}
					/>
				))}
			</div>
		</article>
	);
};

export default Page;
