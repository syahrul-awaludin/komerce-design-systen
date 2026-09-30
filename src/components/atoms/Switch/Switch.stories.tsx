import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {};
export const On: Story = { args: { checked: true } };
export const WithLabel: Story = { args: { label: 'Notifications' } };
export const Disabled: Story = { args: { label: 'Disabled', disabled: true, checked: true } };