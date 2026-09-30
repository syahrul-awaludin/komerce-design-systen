import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = { title: 'molecules/Toast', component: Toast, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = { args: { type: 'default', title: 'Notification', message: 'System update available.', timestamp: 'Just now' } };
export const Success: Story = { args: { type: 'success', title: 'Success', message: 'Your changes have been saved.' } };
export const Error: Story = { args: { type: 'error', title: 'Error', message: 'Failed to save changes.' } };
export const Warning: Story = { args: { type: 'warning', title: 'Warning', message: 'Network connection is unstable.' } };
export const Info: Story = { args: { type: 'info', title: 'Info', message: 'New features are available.' } };
export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Toast type="default" title="Default" message="Message" />
      <Toast type="success" title="Success" message="Message" />
      <Toast type="error" title="Error" message="Message" />
      <Toast type="warning" title="Warning" message="Message" />
      <Toast type="info" title="Info" message="Message" />
    </div>
  )
};