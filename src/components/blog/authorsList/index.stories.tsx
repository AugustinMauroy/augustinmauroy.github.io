import TextWithImages from './';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof TextWithImages>;
type Meta = MetaObj<typeof TextWithImages>;

// best team ever
const authors = [
  'ovflowd',
  'bmuenzenmeyer',
  'AugustinMauroy',
  'HinataKah0',
  'Harkunwar',
  'rodion-arr',
  'mikeesto',
  'bnb',
  'benhalverson',
  'aymen94',
  'shanpriyan',
  'Wai-Dung',
  'manishprivet',
  'araujogui',
];

export const Default: Story = {
  args: {
    authors: authors,
  },
};

export default { component: TextWithImages } as Meta;
