import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: 'tag',
  },
  previewBody:
    // This `<style>` is necessary to simulate what `next-themes` (ThemeProvider) does on real applications
    // `next-theme` automatically injects the color-scheme based on the system preference or the current applied theme
    // on Storybook we don't use `next-theme` as we want to simulate themes
    '<style>:root { color-scheme: light; } html[data-theme="dark"] { color-scheme: dark; }</style>' +
    // This adds the base styling for dark/light themes within Storybook. This is a Storybook-only style
    // Warning: this should be same as the one in `src/styles/globals.css`
    '<body class="bg-gray-50 text-gray-950 dark:bg-gray-900 transition-colors dark:text-gray-50"></body>',
  core: { disableTelemetry: true, disableWhatsNewNotifications: true },
  webpackFinal: async config => {
    // @ts-ignore
    config.resolve.alias['@'] = __dirname + '/../src';
    return config;
  },
};
export default config;
