import TimeLine from './index.tsx';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof TimeLine>;
type Meta = MetaObj<typeof TimeLine>;

export const Default: Story = {
  args: {
    events: [
      {
        date: '2021-01-01',
        title: 'Event 1',
        description: 'Description 1',
      },
      {
        date: '2021-02-01',
        title: 'Event 2',
        description: 'Description 2',
      },
      {
        date: '2021-03-01',
        title: 'Event 3',
        description: 'Description 3',
      },
    ],
  },
};

export default { component: TimeLine } as Meta;
