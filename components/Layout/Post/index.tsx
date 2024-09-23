import BaseLayout from '~/components/Layout/Base';
import AuthorsList from '~/components/Common/AuthorsList';
import styles from './index.module.css';
import type { FC, PropsWithChildren } from 'react';

type PostLayoutProps = PropsWithChildren<{
  title: string;
  description?: string;
  date?: string;
  authors?: string;
}>;

const PostLayout: FC<PostLayoutProps> = ({
  title,
  description,
  children,
  authors,
  date,
}) => (
  <BaseLayout className={styles.article}>
    <header className={styles.header}>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      {date && (
        <time dateTime={date}>
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      )}
      {authors && <AuthorsList authors={authors} />}
    </header>
    <section className="articleContent">{children}</section>
  </BaseLayout>
);

export default PostLayout;
