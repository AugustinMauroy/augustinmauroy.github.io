import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import ButtonLink from '~/components/Common/Button/Link';
import styles from './page.module.css';
import type { FC } from 'react';
import type { Metadata } from 'next';
import type { BaseParams } from '~/types/params';

type NotFoundProps = {
  params: BaseParams;
};

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('app.notFound');

  return {
    title: t('title'),
    description: t('message'),
  };
};

const NotFound: FC<NotFoundProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations('app.notFound');

  return (
    <div className={styles.container}>
      <h1>{t('title')}</h1>
      <p>{t('message')}</p>
      <ButtonLink href="/">
        {t('back')}
        <ArrowRightIcon />
      </ButtonLink>
    </div>
  );
};

export const dynamic = 'error';

export default NotFound;
