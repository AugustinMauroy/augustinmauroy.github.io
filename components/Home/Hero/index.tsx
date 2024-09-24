'use client';
import { useTranslations } from 'next-intl';
import { getAge, isBirthday } from '~/utils/date';
import ButtonLink from '~/components/Common/Button/Link';
import Images from './Images';
import styles from './index.module.css';
import type { FC } from 'react';

const Hero: FC = () => {
  const age = getAge(new Date('2006-05-18'));
  const t = useTranslations('components.home.hero');
  const isAuthorBirthday = isBirthday('2006-05-18');

  return (
    <section className={styles.hero}>
      <Images />
      <div className={styles.content}>
        <h1>
          {t.rich('title', {
            highlight: chunks => <span>{chunks}</span>,
            br: () => <br />,
          })}
        </h1>
        <p>{t('description', { age })}</p>
        {isAuthorBirthday && <p>{t('birthday')}</p>}
        <ButtonLink href="/about" className={styles.button}>
          {t('learnMore')}
        </ButtonLink>
      </div>
    </section>
  );
};

export default Hero;
