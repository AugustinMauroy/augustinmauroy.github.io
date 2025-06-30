import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { Link } from '~/lib/i18n/routing.ts';

type ButtonLinkProps = ComponentProps<typeof Link>;

const ButtonLink: FC<ButtonLinkProps> = ({ children, className, ...props }) => (
  <Link className={classNames('button', className)} {...props}>
    {children}
  </Link>
);

export default ButtonLink;
