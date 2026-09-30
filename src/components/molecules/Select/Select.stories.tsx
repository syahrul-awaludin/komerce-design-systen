import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = { title: 'molecules/Select', component: Select, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Select>;

const options = [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }, { label: 'Option 3', value: '3' }];

export const Default: Story = { args: { options } };
export const WithPlaceholder: Story = { args: { options, placeholder: 'Choose an option...' } };
export const WithValue: Story = { args: { options, value: '2' } };
export const Disabled: Story = { args: { options, disabled: true } };
export const WithError: Story = { args: { options, error: true } };