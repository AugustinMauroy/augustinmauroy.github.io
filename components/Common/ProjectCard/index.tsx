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

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
}) => (
  <figure className={styles.figure}>
    {image ? (
      <Image
        src={image}
        alt={title}
        width={160}
        height={90}
        className={styles.image}
      />
    ) : (
      <DotsIllustration className={styles.image} />
    )}
    <figcaption>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <ButtonLink href={link.href} className={styles.button}>
          {link.label}
        </ButtonLink>
      )}
    </figcaption>
  </figure>
);

export default ProjectCard;
