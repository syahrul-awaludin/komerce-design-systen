import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FAB } from './FAB';

const meta: Meta<typeof FAB> = {
  title: 'Atoms/FAB',
  component: FAB,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: 'select',
      options: ['small', 'regular', 'large', 'extended'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FAB>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'regular',
    children: '+',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'regular',
    children: '+',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'regular',
    children: '+',
  },
};

export const Extended: Story = {
  args: {
    variant: 'primary',
    size: 'extended',
    children: (
      <>
        <span>+</span>
        <span>Create</span>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'regular',
    disabled: true,
    children: '+',
  },
};
