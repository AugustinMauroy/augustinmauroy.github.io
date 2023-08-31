'use client';
import { IntlProvider } from 'react-intl';
import type { FC, ReactNode } from 'react';

type LocalProviderProps = {
	children: ReactNode;
	lang: string;
	messages: Record<string, string>;
};

const LocalProvider: FC<LocalProviderProps> = ({
	children,
	lang,
	messages,
}) => (
	<IntlProvider locale={lang} messages={messages} defaultLocale='en'>
		{children}
	</IntlProvider>
);

export default LocalProvider;
