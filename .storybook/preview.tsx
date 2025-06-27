import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview, ReactRenderer } from '@storybook/react';
import { IntlProvider } from 'next-intl';
import messages from '../i18n/locales/en.json';
import '../styles/globals.css';

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      attributeName: 'data-theme',
      defaultTheme: 'light',
      themes: {
        dark: 'dark',
        light: '',
      },
    }),
    (Story) => (
      <IntlProvider locale="en" messages={messages}>
        <Story />
      </IntlProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: { disable: true },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
