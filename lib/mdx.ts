import type { MDXProvider } from '@mdx-js/react';
import { compileMDX as _compileMDX } from 'next-mdx-remote/rsc';
import type { ComponentProps } from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
import rehypeSlug from 'rehype-slug';
import { defaultMdxComponents } from './mdxComponents.ts';

type Components = ComponentProps<typeof MDXProvider>['components'];

type CompileMDXProps = {
  source: string;
  components?: Components;
  parseFrontmatter?: boolean;
  withoutPlugins?: boolean;
};

const compileMDX = async <TFrontmatter>({
  source,
  components,
  parseFrontmatter = false,
  withoutPlugins = false,
}: CompileMDXProps) =>
  _compileMDX<TFrontmatter>({
    components: {
      ...defaultMdxComponents,
      ...components,
    },
    options: {
      mdxOptions: {
        rehypePlugins: withoutPlugins
          ? []
          : [
              rehypeMdxCodeProps,
              // Generates `id` attributes for headings (H1, ...)
              rehypeSlug,
              // Automatically add anchor links to headings (H1, ...)
              [rehypeAutolinkHeadings, { behavior: 'wrap' }],
            ],
        remarkPlugins: withoutPlugins ? [] : [],
      },
      parseFrontmatter,
    },
    source,
  });

export default compileMDX;
