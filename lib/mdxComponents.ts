import Codebox from '~/components/Common/Codebox';
import Blockquote from '~/components/Common/Blockquote';
import ProjectCard from '~/components/Common/ProjectCard';
import TextWithImages from '~/components/Common/TextWithImages';
import Timeline from '~/components/Common/TimeLine';
import LocalizedLink from '~/components/Common/LocalizedLink';
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
