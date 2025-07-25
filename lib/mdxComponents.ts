import type { MDXProvider } from '@mdx-js/react';
import type { ComponentProps } from 'react';
import Codebox from '~/components/Common/Codebox/index.tsx';
import ProjectCard from '~/components/Common/ProjectCard/index.tsx';
import TextWithImages from '~/components/Common/TextWithImages/index.tsx';
import Timeline from '~/components/Common/TimeLine/index.tsx';
import { Link } from '~/lib/i18n/routing.ts';

type Components = ComponentProps<typeof MDXProvider>['components'];

export const defaultMdxComponents = {
  a: Link,
} as Components;

export const aboutMdxComponents = {
  TextWithImages,
  Timeline,
} as Components;

export const projectsMdxComponents = {
  ProjectCard,
};

export const blogMdxComponents = {
  pre: Codebox,
} as Components;
