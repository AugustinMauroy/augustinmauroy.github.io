import { getFormatter, getTranslations } from 'next-intl/server';
import type { FC } from 'react';
import ButtonLink from '../Button/Link/index.tsx';

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
    <div className="flex w-full shrink flex-col justify-between gap-2 rounded-xs border-2 border-black bg-violet-50 p-4 transition-all has-[a:hover]:shadow-neo-brutalism-black md:w-80 dark:border-white dark:bg-violet-300 dark:has-[a:hover]:shadow-neo-brutalism-white">
      <div>
        <h2 className="font-bold text-3xl text-black">{title}</h2>
        <p className="truncate text-base text-neutral-700">{description}</p>
        <time className="font-light text-neutral-700 text-sm">
          {format.dateTime(new Date(date), {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>
        <p className="truncate text-neutral-700 text-sm">
          {' '}
          {authors && t('by', { authors })}
        </p>
      </div>
      <ButtonLink
        aria-label={t('readMoreAbout', { title })}
        href={`/blog/post/${slug}`}
        title={t('readMoreAbout', { title })}
      >
        {t('readMore')}
      </ButtonLink>
    </div>
  );
};

export default PostCard;
