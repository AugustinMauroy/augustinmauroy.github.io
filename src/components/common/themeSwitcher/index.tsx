'use client';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa6';
import type { FC } from 'react';

const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useTheme();
  const t = useTranslations();

  return (
    <button
      aria-label={t('components.common.themeSelector')}
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeSwitcher;
