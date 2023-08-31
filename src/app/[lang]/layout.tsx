import { Open_Sans } from 'next/font/google';
import LocalProvider from '@/provider/localProvider';
import ThemeProviderWrapper from '@/provider/themeProvider';
import getMessages from '@/lib/getMessage';
import { availableLocales } from '@/utils/i18n';
import { classes } from '@/utils/classes';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import styles from './layout.module.scss';
import type { FC, PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import type { Params } from '@/types/params';
import '@/styles/globals.scss';

const font = Open_Sans({
	subsets: ['latin'],
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
	return availableLocales().map((lang) => ({
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
			<body className={classes([styles.body, font.className])}>
				<LocalProvider lang={params.lang} messages={messages()}>
					<ThemeProviderWrapper>
						<Header />
						<main className={styles.main}>{children}</main>
						<Footer />
					</ThemeProviderWrapper>
				</LocalProvider>
			</body>
		</html>
	);
};

export { metadata, generateStaticParams };
export default RootLayout;
