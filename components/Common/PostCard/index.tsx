import { getFormatter, getTranslations } from 'next-intl/server';
import ButtonLink from '../Button/Link/index.tsx';
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
    <div className="flex w-full shrink flex-col justify-between gap-2 rounded-xs border-2 border-black bg-violet-50 p-4 md:w-80 dark:border-white dark:bg-violet-300 transition-all has-[a:hover]:shadow-neo-brutalism-black dark:has-[a:hover]:shadow-neo-brutalism-white">
      <div>
        <h2 className="text-3xl font-bold text-black">{title}</h2>
        <p className="truncate text-base text-neutral-700">{description}</p>
        <time className="text-sm font-light text-neutral-700">
          {format.dateTime(new Date(date), {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <p className="truncate text-sm text-neutral-700">
          {' '}
          {authors && t('by', { authors })}
        </p>
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
