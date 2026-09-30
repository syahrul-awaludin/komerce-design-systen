import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

/**
 * Breadcrumb component matching Figma Node 2107:63117
 */
const meta: Meta<typeof Breadcrumb> = {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Category', href: '#' },
      { label: 'Current Page' }
    ]
  }
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Type1: Story = {
  args: {
    type: '1',
  },
};

export const Type2: Story = {
  args: {
    type: '2',
  },
};

export const TypeDeep: Story = {
  args: {
    type: 'deep',
    items: [
      { label: 'Home', href: '#' },
      { label: '...', href: '#' },
      { label: 'Category', href: '#' },
      { label: 'Current Page' }
    ]
  },
};
