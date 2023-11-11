//
import Dropdown from './';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Dropdown>;
type Meta = MetaObj<typeof Dropdown>;

const options = ['Option 1', 'Option 2', 'Option 3'];

export const Default: Story = {
  args: {
    title: 'Select an option',
    options,
    activeItem: undefined,
    customChildren: undefined,
  },
};

export const WithActiveItem: Story = {
  args: {
    title: 'Select an option',
    options,
    activeItem: 'Option 2',
    customChildren: undefined,
  },
};

export default { component: Dropdown } as Meta;
