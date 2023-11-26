import Image from 'next/image';
import Link from 'next/link';
import type { Projects } from '@/types/projects';
import styles from './index.module.css';
import type { FC } from 'react';

type CardProps = Projects;

const Card: FC<CardProps> = ({
  title,
  description,
  link,
  linkText,
  thumbnail,
}) => (
  <section className={styles.card}>
    <Image
      src={
        thumbnail ? `/static/${thumbnail}` : '/static/thumbnail withou bg.svg'
        //'/static/projects-illustration.svg'
      }
      alt={thumbnail ? title : 'Illustration'}
      width={400}
      height={400}
    />
    <div className={styles.content}>
      <h2>{title}</h2>
      <p>{description}</p>
      {link && (
        <Link href={link} target="_blank" rel="noopener noreferrer">
          {linkText ? linkText : link}
        </Link>
      )}
    </div>
  </section>
);

export default Card;
