import classNames from 'classnames';
import LocalizedLink from '~/components/Common/LocalizedLink';
import styles from '../index.module.css';
import type { FC, AnchorHTMLAttributes } from 'react';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const ButtonLink: FC<ButtonLinkProps> = ({ children, className, ...props }) => (
  <LocalizedLink className={classNames(className, styles.button)} {...props}>
    {children}
  </LocalizedLink>
);

export default ButtonLink;
