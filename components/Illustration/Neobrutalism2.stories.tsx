import { Neobrutalism2 } from './index.ts';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Neobrutalism2>;
type Meta = MetaObj<typeof Neobrutalism2>;

export const Default: Story = {};

export default { component: Neobrutalism2 } as Meta;
