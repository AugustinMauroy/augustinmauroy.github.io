import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing.ts';
import { availableLocaleCodes } from './config.ts';

// Loads the Application Locales/Translations Dynamically
const loadLocaleDictionary = async (locale: string) => {
  if (locale === 'en') {
    // This enables HMR on the English Locale, so that instant refresh
    // happens while we add/change texts on the source locale
    return import('../../i18n/locales/en.json').then(f => f.default);
  }

  if (availableLocaleCodes.includes(locale)) {
    // Other languages don't really require HMR as they will never be development languages
    // so we can load them dynamically
    return import(`../../i18n/locales/${locale}.json`).then(f => f.default);
  }

  throw new Error(`Unsupported locale: ${locale}`);
};

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that the incoming locale is valid
  if (!locale || !routing.locales.includes(locale))
    locale = routing.defaultLocale;

  const messages = await loadLocaleDictionary(locale);

  return {
    locale,
    messages,
  };
});
