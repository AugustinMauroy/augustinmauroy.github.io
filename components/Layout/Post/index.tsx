import BaseLayout from '~/components/Layout/Base/index.tsx';
import AuthorsList from '~/components/Common/AuthorsList/index.tsx';
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
  <BaseLayout className="mx-auto w-full px-4 pb-4 md:px-8 lg:w-3/4 lg:px-0">
    <header className="mb-8 border-b-2 border-b-black py-4 dark:border-b-white">
      <h1 className="text-4xl font-semibold">{title}</h1>
      {description && (
        <p className="font-semibold text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      )}
      {date && (
        <time
          dateTime={date}
          className="text-sm font-light text-neutral-500 dark:text-neutral-400"
        >
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
