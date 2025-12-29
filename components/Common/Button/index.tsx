import classNames from 'classnames';
import type { ButtonHTMLAttributes, FC } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  disabled,
  className,
  ...props
}) => (
  <button
    aria-disabled={disabled}
    className={classNames('button', className)}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

export default Button;
