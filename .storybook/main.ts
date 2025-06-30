import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
  ],
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  docs: { docsMode: false },
  framework: {
    name: '@storybook/nextjs',
    options: { builder: { useSWC: true } },
  },
  logLevel: 'error',
  previewBody:
    '<style>:root { color-scheme: light; } html[data-theme="dark"] { color-scheme: dark; }</style>' +
    // Warning: this should be same as the one in `src/styles/globals.css`
    '<body class="bg-yellow-50 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50">',
  staticDirs: ['../public'],
  stories: ['../**/*.stories.tsx'],
  typescript: { check: false, reactDocgen: false },
};
export default config;
