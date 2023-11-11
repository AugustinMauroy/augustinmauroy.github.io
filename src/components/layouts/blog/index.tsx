import BlogHeader from '@/components/blog/header';
import type { BlogMetaData } from '@/types/blog';
import styles from './index.module.css';
import type { FC, PropsWithChildren } from 'react';

type ArticleLayoutProps = PropsWithChildren<BlogMetaData>;

const BlogPostLayout: FC<ArticleLayoutProps> = ({
  title,
  description,
  date,
  thumbnail,
  authors,
  children,
}) => (
  <div className={styles.article}>
    <BlogHeader
      title={title}
      description={description}
      date={date}
      thumbnail={thumbnail}
      authors={authors}
    />
    <article>{children}</article>
  </div>
);

export default BlogPostLayout;
