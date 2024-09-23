'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import type {
  FC,
  AnchorHTMLAttributes,
  HTMLAttributeAnchorTarget,
} from 'react';

type LocalizedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
};

const LocalizedLink: FC<LocalizedLinkProps> = ({
  href,
  children,
  className,
  target,
  rel,
  ...props
}) => {
  const params = useParams();
  const path =
    href && (href.startsWith('http') || href.startsWith('#'))
      ? href
      : `/${params.locale}${href}`;

  return (
    <Link
      href={path}
      className={className}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LocalizedLink;
