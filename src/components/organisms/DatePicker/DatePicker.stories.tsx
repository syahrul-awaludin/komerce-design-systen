import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta = {
  title: 'Organisms/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'single',
    placeholder: 'Pick a date',
  },
};

export const RangePicker: Story = {
  args: {
    type: 'range',
    placeholder: 'Select date range',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
