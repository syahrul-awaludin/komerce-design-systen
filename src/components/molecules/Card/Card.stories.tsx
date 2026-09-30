import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = { title: 'molecules/Card', component: Card, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = { args: { title: 'Total Revenue', value: '$45,231.89', subtitle: '+20.1% from last month' } };
export const Progress: Story = { args: { type: 'progress', title: 'Monthly Goal', value: '75%', data: 75, subtitle: 'Almost there!' } };
export const Comparison: Story = { args: { type: 'comparison', title: 'Active Users', value: '2,350', change: 12.5 } };
export const ComparisonDown: Story = { args: { type: 'comparison', title: 'Bounce Rate', value: '42.3%', change: -4.1 } };
export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Card title="Total" value="1,200" />
      <Card type="progress" title="Goal" value="80%" data={80} />
      <Card type="comparison" title="Users" value="450" change={10} />
    </div>
  )
};