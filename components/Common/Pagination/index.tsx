import classNames from 'classnames';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import ButtonLink from '../Button/Link/index.tsx';
import styles from './index.module.css';
import type { FC } from 'react';

const MAX_ITEMS = 5;

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const t = useTranslations('components.common.pagination');
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  let start = Math.max(currentPage - Math.floor(MAX_ITEMS / 2), 1);
  const end = Math.min(start + MAX_ITEMS - 1, totalPages);

  if (end - start < MAX_ITEMS - 1) {
    start = Math.max(end - MAX_ITEMS + 1, 1);
  }

  return (
    <div className={styles.pagination}>
      <ButtonLink
        href={`/blog/${currentPage - 1}`}
        aria-disabled={currentPage === 1}
      >
        <ArrowLeftIcon aria-label={t('previous')} />
      </ButtonLink>
      {start > 1 && (
        <span className={styles.ellipsis} role="presentation">
          ...
        </span>
      )}
      {pages.slice(start - 1, end).map(page => (
        <Link
          key={page}
          href={`/blog/${page === 1 ? '' : page}`}
          className={classNames(styles.item, {
            [styles.active]: currentPage === page,
            [styles.inactive]: currentPage !== page,
          })}
          aria-label={t('page', { page })}
          title={t('page', { page })}
          tabIndex={currentPage === page ? -1 : undefined}
        >
          {page}
        </Link>
      ))}
      {end < totalPages && (
        <span role="presentation" className={styles.ellipsis}>
          ...
        </span>
      )}
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
