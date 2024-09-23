'use client';
import { useTranslations } from 'next-intl';
import styles from './index.module.css';
import type { FC } from 'react';

const Footer: FC = () => {
  const t = useTranslations('components.sections.footer');

  return (
    <nav className={styles.footer}>
      <span className={styles.hightlight}>
        {t('text', { date: new Date().getFullYear() })}
      </span>
    </nav>
  );
};

export default Footer;
