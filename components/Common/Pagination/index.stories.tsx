import type { Meta as MetaObj, StoryObj } from '@storybook/react';
import Pagination from './index.tsx';

type Story = StoryObj<typeof Pagination>;
type Meta = MetaObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
  },
};

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 3,
    totalPages: 5,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 5,
    totalPages: 5,
  },
};

export const LongPagination: Story = {
  args: {
    currentPage: 10,
    totalPages: 100,
  },
};

export default { component: Pagination } as Meta;
