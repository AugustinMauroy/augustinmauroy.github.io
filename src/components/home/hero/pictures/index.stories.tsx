import Pictures from './';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Pictures>;
type Meta = MetaObj<typeof Pictures>;

export const Default: Story = {};

export default { component: Pictures } as Meta;
