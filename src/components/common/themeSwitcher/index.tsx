'use client';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa6';
import Button from '../button';
import type { FC } from 'react';

const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useTheme();
  const t = useTranslations();

  return (
    <Button
      variant="icon"
      aria-label={t('components.common.themeSelector')}
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </Button>
  );
};

export default ThemeSwitcher;
