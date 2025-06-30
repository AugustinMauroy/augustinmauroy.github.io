import Link from 'next/link';
import type { FC } from 'react';
import Github from '~/components/Icons/Github.tsx';
import Instagram from '~/components/Icons/Instagram.tsx';
import LinkedIn from '~/components/Icons/Linkedin.tsx';
import Twitch from '~/components/Icons/Twitch.tsx';
import Twitter from '~/components/Icons/Twitter.tsx';

const LIST = [
  {
    href: 'https://www.github.com/AugustinMauroy',
    icon: Github,
    name: 'Github',
  },
  {
    href: 'https://www.instagram.com/augustin_mauroy/',
    icon: Instagram,
    name: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/in/augustin-mauroy/',
    icon: LinkedIn,
    name: 'LinkedIn',
  },
  {
    href: 'https://www.twitch.tv/augustin_ma',
    icon: Twitch,
    name: 'Twitch',
  },
  {
    href: 'https://x.com/_August1_',
    icon: Twitter,
    name: 'Twitter',
  },
];

const SocialMediaList: FC = () => (
  <section className="flex justify-center border-black border-t-2 bg-teal-100 dark:border-white dark:bg-teal-300">
    <ul className="flex max-w-1/2 flex-wrap justify-center gap-10 py-20">
      {LIST.map(({ href, icon: Icon, name }, index) => (
        <li key={`${index} ${name}`} title={name}>
          <Link href={href}>
            <Icon
              aria-label={name}
              className="size-20 transform text-black transition-transform hover:scale-110"
            />
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default SocialMediaList;
