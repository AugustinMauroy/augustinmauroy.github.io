'use client';
import { useTranslations } from 'next-intl';
import { dateIsBetween } from '@/utils/dateUtils';
import styles from './index.module.css';
import type { FC } from 'react';

const Pride: FC = () => {
  const t = useTranslations('components.home.pride');

  if (
    !dateIsBetween({
      startDate: '2024-06-01T00:00:00.000Z',
      endDate: '2024-06-30T00:00:00.000Z',
      careAboutYear: false,
    })
  )
    return null;

  return (
    <section className={styles.pride}>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
    </section>
  );
};

export default Pride;
