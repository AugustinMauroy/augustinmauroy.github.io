import FindMe from './';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof FindMe>;
type Meta = MetaObj<typeof FindMe>;

export const Default: Story = {};

export default { component: FindMe } as Meta;
