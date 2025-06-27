import type { Meta as MetaObj, StoryObj } from '@storybook/react';
import TimeLine from './index.tsx';

type Story = StoryObj<typeof TimeLine>;
type Meta = MetaObj<typeof TimeLine>;

export const Default: Story = {
  args: {
    events: [
      {
        date: '2021-01-01',
        description: 'Description 1',
        title: 'Event 1',
      },
      {
        date: '2021-02-01',
        description: 'Description 2',
        title: 'Event 2',
      },
      {
        date: '2021-03-01',
        description: 'Description 3',
        title: 'Event 3',
      },
    ],
  },
};

export default { component: TimeLine } as Meta;
