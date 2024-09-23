import { compileMDX as _compileMDX } from 'next-mdx-remote/rsc';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { defaultMdxComponents } from './mdxComponents';
import type { MDXProvider } from '@mdx-js/react';
import type { ComponentProps } from 'react';

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
    source,
    components: {
      ...defaultMdxComponents,
      ...components,
    },
    options: {
      mdxOptions: {
        remarkPlugins: withoutPlugins ? [] : [],
        rehypePlugins: withoutPlugins
          ? []
          : [
              rehypeMdxCodeProps,
              // Generates `id` attributes for headings (H1, ...)
              rehypeSlug,
              // Automatically add anchor links to headings (H1, ...)
              [rehypeAutolinkHeadings, { behavior: 'wrap' }],
            ],
      },
      parseFrontmatter,
    },
  });

export default compileMDX;
