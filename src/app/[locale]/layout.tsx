import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';
import Footer from '@/components/sections/footer';
import Header from '@/components/sections/header';
import { LocaleProvider } from '@/provider/localeProvider';
import ThemeProviderWrapper from '@/provider/themeProvider';
import { availableLocales } from '@/utils/i18n';
import type { Params } from '@/types/params';
import type { Metadata } from 'next';
import type { FC, PropsWithChildren } from 'react';
import '@/styles/globals.css';

type RootLayoutProps = PropsWithChildren<{
  params: Params;
}>;

const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('metadata.root');

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL(`https://augustinmauroy.github.io/`),
  };
};

const generateStaticParams = () => {
  return availableLocales.map(lang => ({
    locale: lang.code,
  }));
};

const RootLayout: FC<RootLayoutProps> = ({ children, params }) => {
  unstable_setRequestLocale(params.locale);

  return (
    <html lang={params.locale} style={{ scrollBehavior: 'smooth' }}>
      <body>
        <LocaleProvider>
          <ThemeProviderWrapper>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProviderWrapper>
        </LocaleProvider>
      </body>
    </html>
  );
};

export { generateMetadata, generateStaticParams };
export default RootLayout;
