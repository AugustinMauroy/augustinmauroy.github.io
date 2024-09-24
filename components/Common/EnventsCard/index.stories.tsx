import EventsCard from '.';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof EventsCard>;
type Meta = MetaObj<typeof EventsCard>;

export const Default: Story = {
  args: {
    title: 'Bisexuality Day',
    description: "It's 13th September, the day to celebrate bisexuality.",
  },
};

export default { component: EventsCard } as Meta;
