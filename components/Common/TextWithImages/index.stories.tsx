import type { Meta as MetaObj, StoryObj } from '@storybook/react';
import TextWithImages from './index.tsx';

type Story = StoryObj<typeof TextWithImages>;
type Meta = MetaObj<typeof TextWithImages>;

export const Default: Story = {
  args: {
    description: (
      <>
        Another of my great interests is music. I&apos;m an avid fan of
        Rammstein, and I had the incredible chance to attend one of their
        concerts in Brussels on 05/08/2023. And on 27/06/2024, I had the
        opportunity to attend another concert in Ostend. I also love listening
        to music, and I have a Spotify playlist that goes with me everywhere.
      </>
    ),
    images: [
      {
        alt: 'Rammstein concert',
        src: '/static/about/rammstien-1.jpeg',
      },
      {
        alt: 'Rammstein concert',
        src: '/static/about/rammstien-2.jpeg',
      },
      {
        alt: 'Rammstein concert',
        src: '/static/about/rammstien-3.jpeg',
      },
      {
        alt: 'Rammstein concert',
        src: '/static/about/rammstien-4.jpeg',
      },
      {
        alt: 'Rammstein concert',
        src: '/static/about/rammstien-5.jpeg',
      },
    ],
  },
};

export default { component: TextWithImages } as Meta;
