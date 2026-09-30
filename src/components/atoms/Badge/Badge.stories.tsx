import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

/**
 * Badge component mapped exactly to Figma variants.
 * Node: 2841:144
 */
const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'outline'],
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Base default
export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'Badge',
  },
};

// All Variants (Figma mapped)
export const Primary: Story = { args: { variant: 'primary', children: 'Primary' } };
export const Secondary: Story = { args: { variant: 'secondary', children: 'Secondary' } };
export const Destructive: Story = { args: { variant: 'destructive', children: 'Destructive' } };
export const Success: Story = { args: { variant: 'success', children: 'Success' } };
export const Warning: Story = { args: { variant: 'warning', children: 'Warning' } };
export const Info: Story = { args: { variant: 'info', children: 'Info' } };
export const Outline: Story = { args: { variant: 'outline', children: 'Outline' } };