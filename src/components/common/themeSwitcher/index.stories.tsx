import ThemeSwitcher from './';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof ThemeSwitcher>;
type Meta = MetaObj<typeof ThemeSwitcher>;

export const Default: Story = {};

export default { component: ThemeSwitcher } as Meta;
