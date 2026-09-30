import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'atoms/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { placeholder: 'Enter text...' } };
export const WithLabel: Story = { args: { label: 'Username', placeholder: 'johndoe' } };
export const WithError: Story = { args: { label: 'Email', error: true, errorMessage: 'Invalid email address', defaultValue: 'invalid-email' } };
export const WithIcons: Story = { args: { leftIcon: <span>🔍</span>, placeholder: 'Search...' } };
export const Disabled: Story = { args: { label: 'Disabled Input', disabled: true, value: 'Not editable' } };
export const Large: Story = { args: { label: 'Medium Input (Default)', size: 'md' } };