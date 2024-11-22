import { getFormatter, getTranslations } from 'next-intl/server';
import ButtonLink from '../Button/Link/index.tsx';
import styles from './index.module.css';
import type { FC } from 'react';

type PostCardProps = {
  title: string;
  description: string;
  slug: string;
  date: string;
  // xxx, xxx, xxx
  authors?: string;
};

const PostCard: FC<PostCardProps> = async ({
  title,
  description,
  slug,
  date,
  authors,
}) => {
  const t = await getTranslations('components.common.postCard');
  const format = await getFormatter();

  return (
    <div className={styles.card}>
      <div>
        <h2>{title}</h2>
        <p className={styles.description}>{description}</p>
        <time>
          {format.dateTime(new Date(date), {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <p className={styles.authors}>{t('by', { authors })}</p>
      </div>
      <ButtonLink
        title={t('readMoreAbout', { title })}
        aria-label={t('readMoreAbout', { title })}
        href={`/blog/post/${slug}`}
      >
        {t('readMore')}
      </ButtonLink>
    </div>
  );
};

export default PostCard;
