import classNames from 'classnames';
import type { AnchorHTMLAttributes, FC } from 'react';
import LocalizedLink from '~/components/Common/LocalizedLink';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const ButtonLink: FC<ButtonLinkProps> = ({ children, className, ...props }) => (
  <LocalizedLink className={classNames('button', className)} {...props}>
    {children}
  </LocalizedLink>
);

export default ButtonLink;
