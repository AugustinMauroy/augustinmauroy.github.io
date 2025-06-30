import { ArrowRightIcon } from '@heroicons/react/24/outline';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { FC } from 'react';
import ButtonLink from '~/components/Common/Button/Link/index.tsx';
import type { BaseParams } from '~/types/params.ts';

type NotFoundProps = BaseParams;

export const generateMetadata = async ({
  params,
}: NotFoundProps): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'app.notFound',
  });

  return {
    description: t('message'),
    title: t('title'),
  };
};

const NotFound: FC<NotFoundProps> = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('app.notFound');

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 font-bold text-4xl">{t('title')}</h1>
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
