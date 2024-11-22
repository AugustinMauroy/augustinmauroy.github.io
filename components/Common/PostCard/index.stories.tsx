import PostCard from './index.tsx';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof PostCard>;
type Meta = MetaObj<typeof PostCard>;

export const Default: Story = {
  args: {
    title: 'Post Title',
    description: 'Post Description, for the post card.',
    date: '2021-10-01',
    slug: 'post-title',
    authors: 'AugustinMauroy',
  },
};

export default { component: PostCard } as Meta;
