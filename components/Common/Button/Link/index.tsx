import classNames from 'classnames';
import LocalizedLink from '~/components/Common/LocalizedLink';
import type { FC, AnchorHTMLAttributes } from 'react';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const ButtonLink: FC<ButtonLinkProps> = ({ children, className, ...props }) => (
  <LocalizedLink className={classNames('button', className)} {...props}>
    {children}
  </LocalizedLink>
);

export default ButtonLink;
