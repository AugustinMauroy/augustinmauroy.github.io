import classNames from 'classnames';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { FC, PropsWithChildren } from 'react';
import { routing } from '~/lib/i18n/routing';
import { LocaleProvider } from '~/providers/localeProvider.tsx';
import type { BaseParams } from '~/types/params.ts';
import '~/styles/globals.css';

type RootLayoutProps = PropsWithChildren<BaseParams>;

const GeistSans = Geist({
  display: 'swap',
  subsets: ['latin'],
  variable: '--geist-sans',
});

const GeistMono = Geist_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--geist-mono',
});

export const dynamic = 'force-static';

// Generate params for all available locales
// It's allow us to build the website statically for all locales
export const generateStaticParams = () =>
  routing.locales.map((locale) => ({ locale }));

export const generateMetadata = async (): Promise<Metadata | null> => {
  const t = await getTranslations('app.metadata');

  return {
    description: t('description'),
    title: t('title'),
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
