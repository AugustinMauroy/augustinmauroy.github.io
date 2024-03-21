import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getAuthorName, getAuthorUrl } from '@/utils/stringUtils';
import FormattedTime from '@/components/common/formattedTime';
import AuthorsList from '../avatarGroup';
import styles from './index.module.css';
import type { BlogMetaData } from '@/types/blog';
import type { FC } from 'react';

const BlogHeader: FC<BlogMetaData> = ({
  title,
  description,
  date,
  authors,
  thumbnail,
}) => {
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
          {t('posted')}: <FormattedTime date={date} />
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
