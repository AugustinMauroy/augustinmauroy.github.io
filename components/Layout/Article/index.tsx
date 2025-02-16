import BaseLayout from '~/components/Layout/Base/index.tsx';
import styles from './index.module.css';
import type { FC, PropsWithChildren } from 'react';

type ArticleLayoutProps = PropsWithChildren<{
  title: string;
  description?: string;
}>;

const ArticleLayout: FC<ArticleLayoutProps> = ({
  title,
  description,
  children,
}) => (
  <BaseLayout className={styles.article}>
    <header className={styles.header}>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </header>
    <section className="articleContent">{children}</section>
  </BaseLayout>
);

export default ArticleLayout;
