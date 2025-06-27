import { LanguageIcon } from '@heroicons/react/24/outline';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';
import Dropdown from './index.tsx';

type Story = StoryObj<typeof Dropdown>;
type Meta = MetaObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    trigger: 'Open',
  },
};

export const CustomTrigger: Story = {
  args: {
    options: ['Option A', 'Option B', 'Option C'],
    trigger: 'Custom Trigger',
  },
};

export const NoOptions: Story = {
  args: {
    options: [],
    trigger: 'Open',
  },
};

export const ActiveOption: Story = {
  args: {
    activeOption: 'Option 2',
    options: ['Option 1', 'Option 2', 'Option 3'],
    trigger: 'Open',
  },
};

export const WithIcon: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    trigger: <LanguageIcon />,
  },
};

export default { component: Dropdown } as Meta;
