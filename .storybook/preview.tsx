import React from 'react';
import type { Preview, ReactRenderer } from '@storybook/react';
import '../src/styles/globals.css';
import messages from '../i18n/locales/en.json';
import { IntlProvider } from 'react-intl';
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
      <IntlProvider locale="en" messages={messages}>
        <Story />
      </IntlProvider>
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
