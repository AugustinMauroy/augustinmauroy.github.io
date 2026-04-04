import type { Meta as MetaObj, StoryObj } from "@storybook/nextjs";
import SocialMediaList from "./index.tsx";

type Story = StoryObj<typeof SocialMediaList>;
type Meta = MetaObj<typeof SocialMediaList>;

export const Default: Story = {};

export default { component: SocialMediaList } as Meta;
