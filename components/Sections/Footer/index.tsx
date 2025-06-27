'use client';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

const Footer: FC = () => {
  const t = useTranslations('components.sections.footer');

  return (
    <nav className="flex h-16 w-full flex-row items-center justify-end border-t-2 border-t-black bg-white dark:border-t-white dark:bg-neutral-950">
      <span className="inline-flex h-full items-center justify-center bg-neutral-950 px-4 font-semibold text-white dark:bg-white dark:text-black">
        {t('text', { date: new Date().getFullYear() })}
      </span>
    </nav>
  );
};

export default Footer;
