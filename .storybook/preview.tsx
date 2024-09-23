import React from 'react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { IntlProvider } from 'next-intl';
import messages from '../i18n/locales/en.json';
import type { Preview, ReactRenderer } from '@storybook/react';
import '../styles/globals.css';

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
    Story => (
      <IntlProvider messages={messages} locale="en">
        <Story />
      </IntlProvider>
    ),
  ],
};

export default preview;
