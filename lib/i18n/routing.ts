import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { availableLocaleCodes, defaultLocale } from './config.ts';

export const routing = defineRouting({
  defaultLocale: defaultLocale.code,
  locales: availableLocaleCodes,
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
