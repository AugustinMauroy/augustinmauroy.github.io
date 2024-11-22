import Codebox from '~/components/Common/Codebox/index.tsx';
import Blockquote from '~/components/Common/Blockquote/index.tsx';
import ProjectCard from '~/components/Common/ProjectCard/index.tsx';
import TextWithImages from '~/components/Common/TextWithImages/index.tsx';
import Timeline from '~/components/Common/TimeLine/index.tsx';
import LocalizedLink from '~/components/Common/LocalizedLink.tsx';
import type { MDXProvider } from '@mdx-js/react';
import type { ComponentProps } from 'react';

type Components = ComponentProps<typeof MDXProvider>['components'];

export const defaultMdxComponents = {
  blockquote: Blockquote,
  a: LocalizedLink,
} as Components;

export const aboutMdxComponents = {
  Timeline,
  TextWithImages,
} as Components;

export const projectsMdxComponents = {
  ProjectCard,
};

export const blogMdxComponents = {
  pre: Codebox,
} as Components;
