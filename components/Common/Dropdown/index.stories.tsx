import { LanguageIcon } from '@heroicons/react/24/outline';
import Dropdown from './index.tsx';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Dropdown>;
type Meta = MetaObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    trigger: 'Open',
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
};

export const CustomTrigger: Story = {
  args: {
    trigger: 'Custom Trigger',
    options: ['Option A', 'Option B', 'Option C'],
  },
};

export const NoOptions: Story = {
  args: {
    trigger: 'Open',
    options: [],
  },
};

export const ActiveOption: Story = {
  args: {
    trigger: 'Open',
    options: ['Option 1', 'Option 2', 'Option 3'],
    activeOption: 'Option 2',
  },
};

export const WithIcon: Story = {
  args: {
    trigger: <LanguageIcon />,
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
};

export default { component: Dropdown } as Meta;
