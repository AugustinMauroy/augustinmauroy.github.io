'use client';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import type { FC, ReactNode, MouseEventHandler } from 'react';
import type { UrlObject } from 'url';

type Props = {
  href: string | URL | URLSearchParams | UrlObject;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  activeClassName?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
};

const LocalizedLink: FC<Props> = ({
  href,
  children,
  className,
  target,
  rel,
  activeClassName,
  onClick,
}) => {
  const params = useParams();
  const pathname = usePathname();
  const path = `/${params.lang}${href}`;
  // if pathname is /en/about/slug and path is /en/about, then it's active
  const isActive = path === pathname.split('/').slice(0, 3).join('/');

  return (
    <Link
      href={path}
      className={`${className ? className : ''} ${
        isActive ? activeClassName : ''
      }`}
      target={target}
      rel={rel}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default LocalizedLink;
