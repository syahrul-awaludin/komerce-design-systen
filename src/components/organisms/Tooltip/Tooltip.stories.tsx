import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta = {
  title: 'organisms/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '50px', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    content: 'Tooltip Content',
    position: 'top',
    children: <span>Hover me (Top)</span>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'Tooltip Content',
    position: 'bottom',
    children: <span>Hover me (Bottom)</span>,
  },
};

export const Left: Story = {
  args: {
    content: 'Tooltip Content',
    position: 'left',
    children: <span>Hover me (Left)</span>,
  },
};

export const Right: Story = {
  args: {
    content: 'Tooltip Content',
    position: 'right',
    children: <span>Hover me (Right)</span>,
  },
};
