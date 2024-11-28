import { getTranslations, setRequestLocale } from 'next-intl/server';
import classNames from 'classnames';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { LocaleProvider } from '~/providers/localeProvider.tsx';
import { routing } from '~/lib/i18n/routing';
import type { FC, PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import type { BaseParams } from '~/types/params.ts';
import '~/styles/globals.css';

type RootLayoutProps = PropsWithChildren<BaseParams>;

export const dynamic = 'force-static';

// Generate params for all available locales
// It's allow us to build the website statically for all locales
export const generateStaticParams = () =>
  routing.locales.map(locale => ({ locale }));

export const generateMetadata = async (): Promise<Metadata | null> => {
  const t = await getTranslations('app.metadata');

  return {
    title: t('title'),
    description: t('description'),
  };
};

const RootLayout: FC<RootLayoutProps> = async ({ children, params }) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={classNames(GeistSans.className, GeistMono.className)}>
        <LocaleProvider locale={locale}>{children}</LocaleProvider>
      </body>
    </html>
  );
};

export default RootLayout;
