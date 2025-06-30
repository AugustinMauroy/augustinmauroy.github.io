import Image from 'next/image';
import type { FC } from 'react';
import ButtonLink from '../Button/Link/index.tsx';
import DotsIllustration from '../DotsIllustration/index.tsx';

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
        alt={title}
        className={imageClassName}
        height={90}
        src={image}
        width={160}
      />
    ) : (
      <DotsIllustration className={imageClassName} />
    )}
    <figcaption className="flex flex-col justify-between gap-1 p-4 lg:max-w-1/2">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
      {link && (
        <ButtonLink className="w-fit" href={link.href}>
          {link.label}
        </ButtonLink>
      )}
    </figcaption>
  </figure>
);

export default ProjectCard;
