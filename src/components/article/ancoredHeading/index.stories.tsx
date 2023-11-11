import AncoredHeading from './';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof AncoredHeading>;
type Meta = MetaObj<typeof AncoredHeading>;

export const Default: Story = {
  args: {
    level: 1,
    children:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};

export default { component: AncoredHeading } as Meta;
