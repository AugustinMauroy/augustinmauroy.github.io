import BaseLayout from '~/components/Layout/Base/index.tsx';
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
  <BaseLayout className="mx-auto w-full px-4 pb-4 md:px-8 lg:w-3/4 lg:px-0">
    <header className="mb-8 border-b-2 border-b-black py-4 dark:border-b-white">
      <h1 className="text-4xl font-bold">{title}</h1>
      {description && (
        <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
      )}
    </header>
    <section className="articleContent">{children}</section>
  </BaseLayout>
);

export default ArticleLayout;
