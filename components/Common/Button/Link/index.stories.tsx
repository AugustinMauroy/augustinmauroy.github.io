import { ArrowDownIcon } from '@heroicons/react/20/solid';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';
import ButtonLink from './index.tsx';

type Story = StoryObj<typeof ButtonLink>;
type Meta = MetaObj<typeof ButtonLink>;

export const Default: Story = {
  args: {
    children: 'Button Link',
    href: '#',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Button Link <ArrowDownIcon className="h-4 w-4" />
      </>
    ),
    href: '#',
  },
};

export default { component: ButtonLink } as Meta;
