import { useMessages, NextIntlClientProvider, useTimeZone } from 'next-intl';
import type { FC, PropsWithChildren } from 'react';

type LocaleProviderProps = PropsWithChildren<{
  locale: string;
}>;

export const LocaleProvider: FC<LocaleProviderProps> = ({
  children,
  locale,
}) => {
  const messages = useMessages();
  const timezone = useTimeZone();

  return (
    <NextIntlClientProvider
      messages={messages}
      timeZone={timezone}
      locale={locale}
    >
      {children}
    </NextIntlClientProvider>
  );
};
