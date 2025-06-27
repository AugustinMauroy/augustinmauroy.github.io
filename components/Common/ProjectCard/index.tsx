import Image from 'next/image';
import ButtonLink from '../Button/Link/index.tsx';
import DotsIllustration from '../DotsIllustration/index.tsx';
import styles from './index.module.css';
import type { FC } from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  image?: string;
  link?: {
    href: string;
    label: string;
  };
};

const imageClassName =
  'h-auto w-full border-b-2 border-b-black lg:h-auto lg:w-96 lg:border-b-0 lg:border-r-2lg:border-r-black';

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
}) => (
  <figure className="mb-4 flex w-full flex-col items-start justify-start rounded-lg border-2 border-black bg-white lg:flex-row lg:items-center dark:border-white dark:bg-neutral-800">
    {image ? (
      <Image
        src={image}
        alt={title}
        width={160}
        height={90}
        className={imageClassName}
      />
    ) : (
      <DotsIllustration className={imageClassName} />
    )}
    <figcaption className="flex flex-col justify-between gap-2 p-4 lg:max-w-1/2">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
      {link && (
        <ButtonLink href={link.href} className="w-fit">
          {link.label}
        </ButtonLink>
      )}
    </figcaption>
  </figure>
);

export default ProjectCard;
