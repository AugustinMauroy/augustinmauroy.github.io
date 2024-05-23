'use client';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import type {
  FC,
  AnchorHTMLAttributes,
  HTMLAttributeAnchorTarget,
} from 'react';

type Props = AnchorHTMLAttributes<HTMLAttributeAnchorTarget>;

const LocalizedLink: FC<Props> = ({
  href,
  children,
  className,
  target,
  rel,
}) => {
  const params = useParams();
  const path = `/${params.locale}${href}`;

  return (
    <Link href={path} className={className} target={target} rel={rel}>
      {children}
    </Link>
  );
};

export default LocalizedLink;
