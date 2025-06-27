'use client';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import type { FC, PropsWithChildren } from 'react';
import LocalizedLink from './LocalizedLink.tsx';

type ActiveLinkProps = PropsWithChildren<{
  href: string;
  className?: string;
  activeClassName?: string;
}>;

export const ActiveLink: FC<ActiveLinkProps> = ({
  href,
  children,
  className = '',
  activeClassName = '',
}) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href);

  return (
    <LocalizedLink
      className={classNames(className, {
        [activeClassName]: isActive,
      })}
      href={href}
    >
      {children}
    </LocalizedLink>
  );
};
