import BlogCard from './';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof BlogCard>;
type Meta = MetaObj<typeof BlogCard>;

export const Default: Story = {
  args: {
    title: 'Blog Title of an article',
    slug: 'blog-title',
    lang: 'en',
  },
};

export default { component: BlogCard } as Meta;
