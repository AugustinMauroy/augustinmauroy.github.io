import yml from 'js-yaml';
import { unstable_setRequestLocale } from 'next-intl/server';
import Card from '@/components/projects/card';
import { getContentBySlug } from '@/lib/getcontent';
import type { Params } from '@/types/params';
import type { Projects } from '@/types/projects';
import style from './page.module.css';
import type { FC } from 'react';

type PageProps = {
  params: Params;
};

const Page: FC<PageProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale);
  const RawProjects = getContentBySlug('projects', params.locale, 'yml');

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
