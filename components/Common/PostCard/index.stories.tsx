import type { Meta as MetaObj, StoryObj } from '@storybook/react';
import PostCard from './index.tsx';

type Story = StoryObj<typeof PostCard>;
type Meta = MetaObj<typeof PostCard>;

export const Default: Story = {
  args: {
    authors: 'AugustinMauroy',
    date: '2021-10-01',
    description: 'Post Description, for the post card.',
    slug: 'post-title',
    title: 'Post Title',
  },
};

export default { component: PostCard } as Meta;
