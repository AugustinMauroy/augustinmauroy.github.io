import classNames from 'classnames';
import BaseLayout from '~/components/Layout/Base';
import styles from './index.module.css';
import type { FC, PropsWithChildren } from 'react';

type ArticleLayoutProps = PropsWithChildren<{
  title: string;
  description?: string;
  markdownContent?: boolean;
}>;

const ArticleLayout: FC<ArticleLayoutProps> = ({
  title,
  description,
  markdownContent = true,
  children,
}) => (
  <BaseLayout className={styles.article}>
    <header className={styles.header}>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </header>
    <section className={classNames({ ['articleContent']: markdownContent })}>
      {children}
    </section>
  </BaseLayout>
);

export default ArticleLayout;
