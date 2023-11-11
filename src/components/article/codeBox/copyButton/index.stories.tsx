import CopyButton from './';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof CopyButton>;
type Meta = MetaObj<typeof CopyButton>;

export const Default: Story = {
  args: {
    code: 'console.log("Hello, world!");',
  },
};

export default { component: CopyButton } as Meta;
