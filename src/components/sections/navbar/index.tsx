'use client';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Language from '@/components/common/languageSelector';
import LocalizedLink from '@/components/i18n/localizedLink';
import ThemeSwitcher from '@/components/common/themeSwitcher';
import styles from './index.module.css';

const navItems = ['about', 'projects', 'blog'];

const variants = {
  initial: { width: 0 },
  animate: { width: '100%' },
};

export default function NavBar() {
  const t = useTranslations('components.sections.nav');
  const pathname = usePathname() || '/';

  return (
    <div className={styles.nav}>
      <LocalizedLink href="/" className="text-xl font-bold">
        Augustin M.
      </LocalizedLink>
      <nav className={styles.links}>
        <ThemeSwitcher />
        <Language />
        {navItems.map((item, index) => {
          // /en/about => /about
          const isActive = item === pathname.split('/').slice(2, 3).join('');

          return (
            <LocalizedLink
              key={`/${item}`}
              className={classNames(
                'relative rounded-md px-4 py-2 text-sm no-underline duration-300 ease-in lg:text-base',
                { '!text-white': isActive }
              )}
              data-active={isActive}
              href={`/${item}`}
            >
              {t(item)}
              {isActive && (
                <motion.div
                  className="absolute bottom-0 left-0 -z-10 h-full w-full rounded-md bg-teal-500"
                  layoutId="navbar"
                  aria-hidden="true"
                  transition={{
                    type: 'spring',
                    bounce: 0.1,
                    stiffness: 80,
                    damping: 15,
                    duration: 0.3,
                  }}
                />
              )}
            </LocalizedLink>
          );
        })}
      </nav>
    </div>
  );
}
