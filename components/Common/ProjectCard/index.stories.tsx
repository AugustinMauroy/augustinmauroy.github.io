import ProjectCardProps from '.';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof ProjectCardProps>;
type Meta = MetaObj<typeof ProjectCardProps>;

export const Default: Story = {
  args: {
    title: 'Project Title',
    description: 'Project description.',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Project Title',
    description: 'Project description.',
    image: 'https://via.placeholder.com/160x90',
  },
};

export const WithLink: Story = {
  args: {
    title: 'Project Title',
    description: 'Project description.',
    link: {
      href: '#',
      label: 'View Project',
    },
  },
};

export const WithImageAndLink: Story = {
  args: {
    title: 'Project Title',
    description: 'Project description.',
    image: 'https://via.placeholder.com/160x90',
    link: {
      href: '#',
      label: 'View Project',
    },
  },
};

export default { component: ProjectCardProps } as Meta;
