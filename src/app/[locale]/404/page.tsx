// not-found doesn't work with i18n
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { FC } from 'react';
import LocalizedLink from '@/components/i18n/localizedLink';
import type { Params } from '@/types/params';
import styles from './page.module.css';

type NotFoundPageProps = {
  params: Params;
};

const metadata = {
  title: '404',
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

export { metadata };
export default NotFoundPage;
