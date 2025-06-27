import classNames from 'classnames';
import type { ButtonHTMLAttributes, FC } from 'react';
import { forwardRef } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, disabled, className, ...props }, ref) => (
    <button
      aria-disabled={disabled}
      className={classNames('button', className)}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  ),
);

Button.displayName = 'Button';

export default Button;
