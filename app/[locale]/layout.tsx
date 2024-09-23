import { unstable_setRequestLocale } from 'next-intl/server';
import classNames from 'classnames';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { LocaleProvider } from '~/providers/localeProvider';
import { availableLocales } from '~/utils/i18n';
import type { FC, PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import type { BaseParams } from '~/types/params';
import '~/styles/globals.css';

type RootLayoutProps = PropsWithChildren<{
  params: BaseParams;
}>;

export const generateStaticParams = () => {
  return availableLocales.map(lang => ({
    locale: lang.code,
  }));
};

export const metadata: Metadata = {
  title: 'A Funny Blog',
  description: 'About Augustin Mauroy',
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
