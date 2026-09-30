import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta = {
  title: 'organisms/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
  { key: 'id', header: 'ID' },
  { key: 'name', header: 'Name' },
  { key: 'role', header: 'Role' },
];

const data = [
  { id: 1, name: 'John Doe', role: 'Admin' },
  { id: 2, name: 'Jane Smith', role: 'Editor' },
  { id: 3, name: 'Bob Johnson', role: 'Viewer' },
  { id: 4, name: 'Alice Brown', role: 'Admin' },
  { id: 5, name: 'Charlie Green', role: 'Editor' },
];

export const Default: Story = {
  args: {
    columns,
    data,
  },
};

export const Selectable: Story = {
  args: {
    columns,
    data,
    selectable: true,
  },
};

export const EmptyState: Story = {
  args: {
    columns,
    data: [],
    emptyMessage: 'No results found',
  },
};
