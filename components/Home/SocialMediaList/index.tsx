import Link from 'next/link';
import Github from '~/components/Icons/Github.tsx';
import Instagram from '~/components/Icons/Instagram.tsx';
import LinkedIn from '~/components/Icons/Linkedin.tsx';
import Mastodon from '~/components/Icons/Mastodon.tsx';
import Twitch from '~/components/Icons/Twitch.tsx';
import Twitter from '~/components/Icons/Twitter.tsx';
import type { FC } from 'react';

const LIST = [
  {
    name: 'Github',
    href: 'https://www.github.com/AugustinMauroy',
    icon: Github,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/augustin_mauroy/',
    icon: Instagram,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/augustin-mauroy/',
    icon: LinkedIn,
  },
  {
    name: 'Mastodon',
    href: 'https://mastodon.social/@augustin_mauroy',
    icon: Mastodon,
  },
  {
    name: 'Twitch',
    href: 'https://www.twitch.tv/augustin_ma',
    icon: Twitch,
  },
  {
    name: 'Twitter',
    href: 'https://x.com/_August1_',
    icon: Twitter,
  },
];

const SocialMediaList: FC = () => (
  <section className="flex justify-center border-t-2 border-black bg-teal-100 dark:border-white dark:bg-teal-300">
    <ul className="flex max-w-1/2 flex-wrap justify-center gap-10 py-20">
      {LIST.map(({ href, icon: Icon, name }, index) => (
        <li key={index} title={name}>
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
