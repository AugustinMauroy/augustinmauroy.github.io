import InlineCode from './';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof InlineCode>;
type Meta = MetaObj<typeof InlineCode>;

export const Default: Story = {
  args: {
    children: 'console.log("Hello, world!");',
  },
};

export default { component: InlineCode } as Meta;
