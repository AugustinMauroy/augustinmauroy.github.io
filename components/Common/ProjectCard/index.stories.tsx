import type { Meta as MetaObj, StoryObj } from '@storybook/react';
import ProjectCardProps from './index.tsx';

type Story = StoryObj<typeof ProjectCardProps>;
type Meta = MetaObj<typeof ProjectCardProps>;

export const Default: Story = {
  args: {
    description: 'Project description.',
    title: 'Project Title',
  },
};

export const WithImage: Story = {
  args: {
    description: 'Project description.',
    image: 'https://via.placeholder.com/160x90',
    title: 'Project Title',
  },
};

export const WithLink: Story = {
  args: {
    description: 'Project description.',
    link: {
      href: '#',
      label: 'View Project',
    },
    title: 'Project Title',
  },
};

export const WithImageAndLink: Story = {
  args: {
    description: 'Project description.',
    image: 'https://via.placeholder.com/160x90',
    link: {
      href: '#',
      label: 'View Project',
    },
    title: 'Project Title',
  },
};

export default { component: ProjectCardProps } as Meta;
