import Link from 'next/link';
import Github from '~/components/Icons/Github.tsx';
import Instagram from '~/components/Icons/Instagram.tsx';
import LinkedIn from '~/components/Icons/Linkedin.tsx';
import Mastodon from '~/components/Icons/Mastodon.tsx';
import Twitch from '~/components/Icons/Twitch.tsx';
import Twitter from '~/components/Icons/Twitter.tsx';
import styles from './index.module.css';
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
  <section className={styles.socialMediaList}>
    <ul>
      {LIST.map(({ href, icon: Icon, name }, index) => (
        <li key={index} title={name}>
          <Link href={href}>
            <Icon aria-label={name} />
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default SocialMediaList;
