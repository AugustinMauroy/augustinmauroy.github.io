"use client";
import { useTranslations } from 'next-intl';
import { getAge, isBirthday } from '@/utils/getAge';
import Pictures from './pictures';
import styles from './index.module.css';
import type { FC } from 'react';

const Hero: FC = () => {
  const t = useTranslations('components.home.hero');

  return (
    <section className={styles.hero}>
      <Pictures />
      <div className={styles.content}>
        <h1>{t('title')}</h1>
        <p>{t('description', { age: getAge(new Date(2006, 5, 18)) })}</p>
        <p>{isBirthday(new Date(2006, 5, 18)) ? t('birthday') : null}</p>
      </div>
    </section>
  );
};

export default Hero;
