'use client';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import classNames from 'classnames';
import type { ComponentPropsWithRef } from 'react';

const Avatar = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof AvatarPrimitive.Root>) => (
  <AvatarPrimitive.Root
    className={classNames(
      'relative flex size-10 shrink-0 overflow-hidden rounded-full outline-2 outline-black outline-solid dark:outline-white',
      className,
    )}
    ref={ref}
    {...props}
  />
);

Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof AvatarPrimitive.Image>) => (
  <AvatarPrimitive.Image
    className={classNames('aspect-square size-full', className)}
    ref={ref}
    {...props}
  />
);

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof AvatarPrimitive.Fallback>) => (
  <AvatarPrimitive.Fallback
    className={classNames(
      'flex size-full items-center justify-center rounded-full bg-white font-bold text-base dark:bg-neutral-950 dark:text-white',
      className,
    )}
    ref={ref}
    {...props}
  />
);

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
