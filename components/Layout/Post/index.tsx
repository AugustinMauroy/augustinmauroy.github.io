import type { FC, PropsWithChildren } from 'react';
import AuthorsList from '~/components/Common/AuthorsList/index.tsx';
import BaseLayout from '~/components/Layout/Base/index.tsx';

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
      <h1 className="font-semibold text-4xl">{title}</h1>
      {description && (
        <p className="font-semibold text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      )}
      {date && (
        <time
          className="font-light text-neutral-500 text-sm dark:text-neutral-400"
          dateTime={date}
        >
          {new Date(date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>
      )}
      {authors && <AuthorsList authors={authors} />}
    </header>
    <section className="articleContent">{children}</section>
    <iframe
      className="mx-auto border-0"
      height="225"
      src="https://github.com/sponsors/AugustinMauroy/card"
      title="Sponsor AugustinMauroy"
      width="600"
    />
  </BaseLayout>
);

export default PostLayout;
