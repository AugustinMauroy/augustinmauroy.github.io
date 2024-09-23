import Images from '.';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Images>;
type Meta = MetaObj<typeof Images>;

export const Default: Story = {};

export default { component: Images } as Meta;
