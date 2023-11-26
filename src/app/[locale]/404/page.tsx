// not-found doesn't work with i18n
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';
import { FC } from 'react';
import LocalizedLink from '@/components/i18n/localizedLink';
import type { Params } from '@/types/params';
import styles from './page.module.css';
import type { Metadata } from 'next';

type NotFoundPageProps = {
  params: Params;
};

const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('metadata.404');

  return {
    title: t('title'),
    description: t('description'),
  };
};
const NotFoundPage: FC<NotFoundPageProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations('app.notFound');

  return (
    <div className={styles.container}>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <LocalizedLink href="/">{t('home')}</LocalizedLink>
    </div>
  );
};

export { generateMetadata };
export default NotFoundPage;
