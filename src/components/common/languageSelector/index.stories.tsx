import Language from './';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Language>;
type Meta = MetaObj<typeof Language>;

export const Default: Story = {
  decorators: [
    Story => (
      <div className="flex h-screen items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default { component: Language } as Meta;
