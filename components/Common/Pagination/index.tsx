import classNames from 'classnames';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import ButtonLink from '../Button/Link/index.tsx';
import type { FC } from 'react';

const MAX_ITEMS = 5;

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

const Ellipsis: FC = () => (
  <span
    className="rounded-none border-2 border-transparent px-4 py-2 text-neutral-500 dark:text-neutral-400"
    role="presentation"
  >
    ...
  </span>
);

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const t = useTranslations('components.common.pagination');
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  let start = Math.max(currentPage - Math.floor(MAX_ITEMS / 2), 1);
  const end = Math.min(start + MAX_ITEMS - 1, totalPages);

  if (end - start < MAX_ITEMS - 1) {
    start = Math.max(end - MAX_ITEMS + 1, 1);
  }

  return (
    <div className="flex w-full justify-center space-x-2">
      <ButtonLink
        href={`/blog/${currentPage - 1}`}
        aria-disabled={currentPage === 1}
      >
        <ArrowLeftIcon aria-label={t('previous')} />
      </ButtonLink>
      {start > 1 && <Ellipsis />}
      {pages.slice(start - 1, end).map(page => (
        <Link
          key={page}
          href={`/blog/${page === 1 ? '' : page}`}
          className={classNames(
            'rounded-none border-2 border-black px-4 py-2 shadow-neo-brutalism-black dark:border-white dark:shadow-neo-brutalism-white',
            {
              ['bg-neutral-950 text-white dark:bg-white dark:text-black']:
                currentPage === page,
              ['bg-white text-black dark:bg-neutral-950 dark:text-white hover:bg-neutral-950 hover:text-white hover:dark:bg-white hover:dark:text-black']:
                currentPage !== page,
            }
          )}
          aria-label={t('page', { page })}
          title={t('page', { page })}
          tabIndex={currentPage === page ? -1 : undefined}
        >
          {page}
        </Link>
      ))}
      {end < totalPages && <Ellipsis />}
      <ButtonLink
        href={`/blog/${currentPage + 1}`}
        aria-disabled={currentPage === totalPages}
      >
        <ArrowRightIcon aria-label={t('next')} />
      </ButtonLink>
    </div>
  );
};

export default Pagination;
