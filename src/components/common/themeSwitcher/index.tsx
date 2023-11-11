'use client';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa6';
import { useIntl } from 'react-intl';
import type { FC } from 'react';

const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useTheme();
  const intl = useIntl();

  return (
    <button
      aria-label={intl.formatMessage({
        id: 'components.common.themeSelector.theme',
      })}
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeSwitcher;
