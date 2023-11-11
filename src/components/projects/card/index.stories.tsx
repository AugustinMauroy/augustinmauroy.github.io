import Card from './';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Card>;
type Meta = MetaObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Title of the project',
    description: 'A long description of the project',
  },
};

export const WithLink: Story = {
  args: {
    title: 'Title of the project',
    description: 'A long description of the project',
    linkText: 'Link to the project',
    link: '/',
  },
};

export default { component: Card } as Meta;
