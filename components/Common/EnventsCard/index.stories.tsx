import type { Meta as MetaObj, StoryObj } from '@storybook/react';
import EventsCard from './index.tsx';

type Story = StoryObj<typeof EventsCard>;
type Meta = MetaObj<typeof EventsCard>;

export const Default: Story = {
  args: {
    description: "It's 13th September, the day to celebrate bisexuality.",
    title: 'Bisexuality Day',
  },
};

export default { component: EventsCard } as Meta;
