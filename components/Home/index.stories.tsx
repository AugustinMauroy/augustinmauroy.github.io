import type { Meta as MetaObj, StoryObj } from '@storybook/react';
import LandingPage from './index.tsx';

type Story = StoryObj<typeof LandingPage>;
type Meta = MetaObj<typeof LandingPage>;

export const Default: Story = {};

export default { component: LandingPage } as Meta;
