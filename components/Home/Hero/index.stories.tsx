import type { Meta as MetaObj, StoryObj } from '@storybook/react';
import Hero from './index.tsx';

type Story = StoryObj<typeof Hero>;
type Meta = MetaObj<typeof Hero>;

export const Default: Story = {};

export default { component: Hero } as Meta;
