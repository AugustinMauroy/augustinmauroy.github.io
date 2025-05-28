import classNames from 'classnames';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import LocalizedLink from '../LocalizedLink.tsx';
import ButtonLink from '../Button/Link/index.tsx';
import styles from './index.module.css';
import type { FC } from 'react';

const MAX_ITEMS = 5;

type PaginationProps = {
  /**
   * The current page number.
   * 0 means the first page.
   */
  currentPage: number;
  /**
   * The total number of pages.
   */
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
        aria-disabled={currentPage === 0}
      >
        <ArrowLeftIcon aria-label={t('previous')} />
      </ButtonLink>
      {start > 1 && (
        <span className={styles.ellipsis} role="presentation">
          ...
        </span>
      )}
      {pages.slice(start - 1, end).map(page => (
        <LocalizedLink
          key={page}
          href={`/blog/${page === 0 ? '' : page - 1}`}
          className={classNames(styles.item, {
            [styles.active]: currentPage === page - 1,
            [styles.inactive]: currentPage !== page,
          })}
          aria-label={t('page', { page })}
          title={t('page', { page })}
          tabIndex={currentPage === page - 1 ? -1 : undefined}
        >
          {page}
        </LocalizedLink>
      ))}
      {end < totalPages && (
        <span role="presentation" className={styles.ellipsis}>
          ...
        </span>
      )}
      <ButtonLink
        href={`/blog/${currentPage + 1}`}
        aria-disabled={currentPage === totalPages - 1}
      >
        <ArrowRightIcon aria-label={t('next')} />
      </ButtonLink>
    </div>
  );
};

export default Pagination;
