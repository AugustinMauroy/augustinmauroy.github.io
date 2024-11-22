import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import classNames from 'classnames';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { LocaleProvider } from '~/providers/localeProvider.tsx';
import { availableLocales } from '~/utils/i18n/index.ts';
import type { FC, PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import type { BaseParams } from '~/types/params.ts';
import '~/styles/globals.css';

type RootLayoutProps = PropsWithChildren<{
  params: BaseParams;
}>;

export const generateStaticParams = () => {
  return availableLocales.map(lang => ({
    locale: lang.code,
  }));
};

// @TODO: Generate metadata using i18n
export const generateMetadata = async (): Promise<Metadata | null> => {
  const t = await getTranslations('app.metadata');

  return {
    title: t('title'),
    description: t('description'),
  };
};
const RootLayout: FC<RootLayoutProps> = ({ children, params }) => {
  unstable_setRequestLocale(params.locale);

  return (
    <html lang={params.locale}>
      <body className={classNames(GeistSans.className, GeistMono.className)}>
        <LocaleProvider locale={params.locale}>{children}</LocaleProvider>
      </body>
    </html>
  );
};

export default RootLayout;
