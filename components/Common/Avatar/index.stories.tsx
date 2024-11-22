import { getGitHubAvatarUrl } from '~/utils/gitHubUtils';
import { getAcronymFromString } from '~/utils/stringUtils';
import { Avatar, AvatarImage, AvatarFallback } from './index.tsx';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Avatar>;
type Meta = MetaObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage
        src={getGitHubAvatarUrl('AugustinMauroy')}
        alt="Augustin Mauroy"
      />
      <AvatarFallback>{getAcronymFromString('Augustin Mauroy')}</AvatarFallback>
    </Avatar>
  ),
};

export const FallbackOnly: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>{getAcronymFromString('John Doe')}</AvatarFallback>
    </Avatar>
  ),
};

export const CustomSize: Story = {
  render: () => (
    <Avatar className="size-40">
      <AvatarImage
        src={getGitHubAvatarUrl('AugustinMauroy')}
        alt="Augustin Mauroy"
      />
      <AvatarFallback>{getAcronymFromString('Augustin Mauroy')}</AvatarFallback>
    </Avatar>
  ),
};

export default { component: Avatar } as Meta;
