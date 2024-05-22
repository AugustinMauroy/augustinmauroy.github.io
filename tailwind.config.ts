import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInFromTop: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-in-left': 'slideInFromLeft 1.5s ease-out',
        'slide-in-top': 'slideInFromTop 1.5s ease-out',
      },
    },
  },
  // darkmode of next-themes
  darkMode: ['class', '[data-theme="dark"]'],
} as Config;
