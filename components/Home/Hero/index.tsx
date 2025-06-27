'use client';
import { useTranslations } from 'next-intl';
import { getAge, isBirthday } from '~/utils/date.ts';
import ButtonLink from '~/components/Common/Button/Link/index.tsx';
import Images from './Images/index.tsx';
import type { FC } from 'react';

const Hero: FC = () => {
  const age = getAge(new Date('2006-05-18'));
  const t = useTranslations('components.home.hero');
  const isAuthorBirthday = isBirthday('2006-05-18');

  return (
    <section className="flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-center gap-8 md:flex-row lg:gap-10">
      <Images />
      <div className="flex max-w-80 flex-col gap-4">
        <h1 className="text-3xl font-black leading-10">
          {t.rich('title', {
            highlight: chunks => (
              <span className="rotate-45 rounded-md border-2 border-black bg-teal-100 p-2 text-xl dark:border-white dark:bg-teal-400 dark:text-black">
                {chunks}
              </span>
            ),
            br: () => <br />,
          })}
        </h1>
        <p className="mt-4 text-lg text-neutral-600 md:text-xl dark:text-neutral-400">
          {t('description', { age })}
        </p>
        {isAuthorBirthday && <p>{t('birthday')}</p>}
        <ButtonLink href="/about" className="w-full">
          {t('learnMore')}
        </ButtonLink>
      </div>
    </section>
  );
};

export default Hero;
