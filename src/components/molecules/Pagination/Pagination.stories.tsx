import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = { title: 'molecules/Pagination', component: Pagination, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = { args: { currentPage: 1, totalPages: 5 } };
export const FirstPage: Story = { args: { currentPage: 1, totalPages: 10 } };
export const MiddlePage: Story = { args: { currentPage: 5, totalPages: 10 } };
export const LastPage: Story = { args: { currentPage: 10, totalPages: 10 } };