import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'atoms/Progress',
  component: Progress,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = { args: { value: 30 } };
export const HalfFilled: Story = { args: { value: 50 } };
export const Complete: Story = { args: { value: 100 } };
export const WithLabel: Story = { args: { value: 75, showLabel: true } };