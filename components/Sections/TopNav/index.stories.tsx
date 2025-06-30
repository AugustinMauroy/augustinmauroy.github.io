import type { Meta as MetaObj, StoryObj } from '@storybook/react';
import TopNav from './index.tsx';

type Story = StoryObj<typeof TopNav>;
type Meta = MetaObj<typeof TopNav>;

export const Default: Story = {};

export default { component: TopNav } as Meta;
