import TextWithImages from './';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof TextWithImages>;
type Meta = MetaObj<typeof TextWithImages>;

export const Default: Story = {
  args: {
    images: ['images/rammstein-1.webp', 'images/rammstein-2.webp'],
    alt: 'Concert de Rammstein à Bruxelles',
    ratio: '9:16',
    children:
      "Un autre de mes grands intérêts est la musique. Je suis un fervent fan de Rammstein et j'ai eu la chance incroyable d'assister à l'un de leurs concerts à Bruxelles le 05/08/2023.\nJ'adore aussi écouter de la musique, et j'ai une playlist Spotify qui me suit partout où je vais.",
  },
};

export default { component: TextWithImages } as Meta;
