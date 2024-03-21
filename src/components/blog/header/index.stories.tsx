import BlogHeader from './';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof BlogHeader>;
type Meta = MetaObj<typeof BlogHeader>;

export const Default: Story = {
  args: {
    title: 'Blog Title of an article',
    description: 'Description of the article',
    date: new Date(),
    authors: ['AugustinMauroy', 'SamTV12345', 'ovflowd'],
  },
};

export default { component: BlogHeader } as Meta;
