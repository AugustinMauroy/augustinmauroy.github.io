import { getTranslations } from 'next-intl/server';
import type { FC } from 'react';
import { ActiveLink } from '~/components/Common/ActiveLink.tsx';
import LanguageSelector from '~/components/Common/LanguageSelector/index.tsx';
import LocalizedLink from '~/components/Common/LocalizedLink.tsx';

const RIGHT_LINKS = [
  {
    href: '/about',
  },
  {
    href: '/projects',
  },
  {
    href: '/blog',
  },
];

const TopNav: FC = async () => {
  const t = await getTranslations('components.sections.topNav');

  return (
    <nav className="flex h-fit w-full flex-col items-center justify-between gap-4 border-b-2 border-b-black bg-white pb-2 md:h-16 md:flex-row md:gap-0 md:pb-0 dark:border-b-white dark:bg-neutral-950">
      <LocalizedLink
        className="inline-flex size-full items-center justify-center bg-teal-100 px-4 font-semibold shadow-sm shadow-teal-100 hover:underline md:w-fit md:border-r-2 md:border-r-black dark:bg-teal-400 dark:text-black dark:shadow-teal-500 md:dark:border-r-white"
        href="/"
      >
        Augustin M.
      </LocalizedLink>
      <ul className="flex flex-row items-center gap-2 px-4 lg:gap-8 lg:px-8">
        <li>
          <LanguageSelector />
        </li>
        {RIGHT_LINKS.map((item) => (
          <li key={item.href}>
            <ActiveLink
              activeClassName="border-2 border-black bg-violet-100 text-black shadow-neo-brutalism-xl-black dark:border-white dark:bg-violet-400 dark:shadow-neo-brutalism-xl-white"
              className="px-2 py-1 font-semibold hover:underline"
              href={item.href}
            >
              {t(item.href.replace('/', ''))}
            </ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNav;
