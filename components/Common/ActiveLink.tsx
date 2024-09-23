'use client';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import LocalizedLink from './LocalizedLink';
import type { FC, PropsWithChildren } from 'react';

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
      href={href}
      className={classNames(className, {
        [activeClassName]: isActive,
      })}
    >
      {children}
    </LocalizedLink>
  );
};
