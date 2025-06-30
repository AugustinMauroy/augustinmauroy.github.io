import type { Meta as MetaObj, StoryObj } from '@storybook/react';
import AuthorsList from './index.tsx';

type Story = StoryObj<typeof AuthorsList>;
type Meta = MetaObj<typeof AuthorsList>;

export const Default: Story = {
  args: {
    authors: 'AugustinMauroy, ovflowd, canerakdas, mertcanaltin, tony-go',
  },
};

export default { component: AuthorsList } as Meta;
