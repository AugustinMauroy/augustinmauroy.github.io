import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ButtonLink from '~/components/Common/Button/Link/index.tsx';
import styles from './page.module.css';
import type { FC } from 'react';
import type { Metadata } from 'next';
import type { BaseParams } from '~/types/params.ts';

type NotFoundProps = BaseParams;

export const dynamic = 'force-static';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('app.notFound');

  return {
    title: t('title'),
    description: t('message'),
  };
};

const NotFound: FC<NotFoundProps> = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('app.notFound');

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">{t('title')}</h1>
      <p className="mb-4 text-center text-lg text-neutral-600 dark:text-neutral-400">
        {t('message')}
      </p>
      <ButtonLink href="/">
        {t('back')}
        <ArrowRightIcon />
      </ButtonLink>
    </div>
  );
};

export default NotFound;
