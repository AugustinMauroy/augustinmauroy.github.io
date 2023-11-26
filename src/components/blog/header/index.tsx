import Image from 'next/image';
import { useFormatter } from 'next-intl';
import { useTranslations } from 'next-intl';
import type { BlogMetaData } from '@/types/blog';
import { getAuthorName, getAuthorUrl } from '@/utils/stringUtils';
import AuthorsList from '../avatarGroup';
import styles from './index.module.css';
import type { FC } from 'react';

const BlogHeader: FC<BlogMetaData> = ({
  title,
  description,
  date,
  authors,
  thumbnail,
}) => {
  const format = useFormatter();
  const t = useTranslations('components.blog.header');

  const avatars = authors.map(author => ({
    src: getAuthorUrl(author),
    alt: getAuthorName(author),
  }));

  return (
    <section className={styles.header}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>
          {t('posted')}:{' '}
          <time dateTime={date.toISOString()}>{format.dateTime(date)}</time>
        </p>
        <AuthorsList avatars={avatars} />
      </div>
      {thumbnail && (
        <Image
          src={`/static/${thumbnail}`}
          alt={title}
          height={169}
          width={300}
          className={styles.thumbnail}
        />
      )}
    </section>
  );
};

export default BlogHeader;
