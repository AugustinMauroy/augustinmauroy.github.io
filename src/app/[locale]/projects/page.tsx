import yml from 'js-yaml';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Card from '@/components/projects/card';
import { getContentBySlug } from '@/lib/getcontent';
import type { Params } from '@/types/params';
import type { Projects } from '@/types/projects';
import style from './page.module.css';
import type { Metadata } from 'next';
import type { FC } from 'react';

type PageProps = {
  params: Params;
};

const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('metadata.projects');

  return {
    title: t('title'),
    description: t('description'),
  };
};

const Page: FC<PageProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations();
  const RawProjects = getContentBySlug('projects', params.locale, 'yml');

  if (!RawProjects) return null;

  //@ts-ignore
  const Projects: Projects[] = yml.load(RawProjects);

  return (
    <article className={style.page}>
      <h1>{t('app.projects')}</h1>
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

export { generateMetadata };
export default Page;
