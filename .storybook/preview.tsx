import React from 'react';
import type { Preview, ReactRenderer } from '@storybook/react';
import '../src/styles/globals.css';
import messages from '../i18n/locales/en.json';
import { NextIntlClientProvider } from 'next-intl';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    nextjs: {
      appDirectory: true,
      router: {
        basePath: '',
        pathname: '/en/',
      },
      navigation: {
        segments: [['lang', 'en']],
      },
    },
  },
  decorators: [
    Story => (
      <NextIntlClientProvider locale="en" messages={messages}>
        <Story />
      </NextIntlClientProvider>
    ),
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
  ],
};

export default preview;
