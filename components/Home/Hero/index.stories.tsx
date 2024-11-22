import Hero from './index.tsx';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Hero>;
type Meta = MetaObj<typeof Hero>;

export const Default: Story = {};

export default { component: Hero } as Meta;
