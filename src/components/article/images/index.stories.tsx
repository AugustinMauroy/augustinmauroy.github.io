import Images from './';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Images>;
type Meta = MetaObj<typeof Images>;

export const Default: Story = {
  args: {
    src: '/static/images/rammstein-1.jpeg',
    alt: 'Rammstein',
  },
  decorators: [
    Story => (
      <div className="m-x-auto my-4 h-1/2 w-1/2">
        <Story />
      </div>
    ),
  ],
};

export default { component: Images } as Meta;
