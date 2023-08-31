'use client';
import { useTheme } from 'next-themes';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useIntl } from 'react-intl';
import styles from './index.module.scss';
import type { FC } from 'react';

const ThemeSwitcher: FC = () => {
	const { theme, setTheme } = useTheme();
	const intl = useIntl();

	return (
		<button
			aria-label={intl.formatMessage({
				id: 'components.common.themeSelector.theme',
			})}
			type='button'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className={styles.themeSwitcher}
		>
			{theme === 'dark' ? <BsFillSunFill /> : <BsFillMoonFill />}
		</button>
	);
};

export default ThemeSwitcher;
