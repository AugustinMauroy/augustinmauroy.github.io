import classNames from 'classnames';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/sections/footer';
import Header from '@/components/sections/header';
import getMessages from '@/lib/getMessage';
import LocalProvider from '@/provider/localProvider';
import ThemeProviderWrapper from '@/provider/themeProvider';
import type { Params } from '@/types/params';
import { availableLocales } from '@/utils/i18n';
import type { Metadata } from 'next';
import type { FC, PropsWithChildren } from 'react';
import '@/styles/globals.css';

const font = Open_Sans({
  weight: ['300', '400', '600', '700'],
  display: 'fallback',
  subsets: ['latin'],
  variable: '--font-open-sans',
});

type RootLayoutProps = PropsWithChildren<{
  params: Params;
}>;

const metadata: Metadata = {
  metadataBase: new URL('https://augustinmauroy.github.io/'),
  title: "Augustin M.' website",
  description: 'Augustin M. personal website',
};

const generateStaticParams = () => {
  return availableLocales().map(lang => ({
    lang: lang.code,
  }));
};

const RootLayout: FC<RootLayoutProps> = ({ children, params }) => {
  const messages = () => ({
    ...getMessages('en'),
    ...getMessages(params.lang),
  });

  return (
    <html lang={params.lang} style={{ scrollBehavior: 'smooth' }}>
      <body className={classNames('font-open-sans', font.variable)}>
        <LocalProvider lang={params.lang} messages={messages()}>
          <ThemeProviderWrapper>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProviderWrapper>
        </LocalProvider>
      </body>
    </html>
  );
};

export { metadata, generateStaticParams };
export default RootLayout;
