import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    size: 'medium',
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    size: 'medium',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    size: 'medium',
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    size: 'medium',
    checked: true,
    disabled: true,
  },
};