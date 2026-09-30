import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = { title: 'molecules/Tabs', component: Tabs, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = { args: { items: [{ label: 'Tab 1', content: 'Content 1' }, { label: 'Tab 2', content: 'Content 2' }] } };
export const WithContent: Story = { args: { items: [{ label: 'Profile', content: <div style={{padding:'20px'}}>Profile Settings</div> }, { label: 'Security', content: <div style={{padding:'20px'}}>Security Settings</div> }] } };
export const WithDisabledTab: Story = { args: { items: [{ label: 'Active', content: 'Active content' }, { label: 'Disabled', content: '', disabled: true }] } };