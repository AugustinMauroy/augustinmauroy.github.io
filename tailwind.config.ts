import type { Config } from 'tailwindcss';

export default {
  content: ['./components/**/*.tsx', './app/**/*.tsx', './.storybook/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      boxShadow: {
        'neo-brutalism-sm-black': '1px 1px 0px rgba(0,0,0,1)',
        'neo-brutalism-black': '2px 2px 0px rgba(0,0,0,1)',
        'neo-brutalism-xl-black': '4px 4px 0px rgba(0,0,0,1)',
        'neo-brutalism-2xl-black': '8px 8px 0px rgba(0,0,0,1)',
        'neo-brutalism-sm-white': '1px 1px 0px rgba(255,255,255,1)',
        'neo-brutalism-white': '2px 2px 0px rgba(255,255,255,1)',
        'neo-brutalism-xl-white': '4px 4px 0px rgba(255,255,255,1)',
        'neo-brutalism-2xl-white': '8px 8px 0px rgba(255,255,255,1)',
      },
      // max-w-1/2
      spacing: {
        '1/2': '50%',
      },
    },
  },
  darkMode:
    process.env.BUILD_ENV === 'storybook'
      ? ['class', '[data-theme="dark"]']
      : 'media',
} as Config;
