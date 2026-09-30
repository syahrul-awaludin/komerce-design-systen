import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

/**
 * Avatar component used to represent a user.
 * Supports different sizes and types (image, initials, icon).
 */
const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['mini', 'small', 'regular', 'large', 'x-large'],
    },
    type: {
      control: 'select',
      options: ['image', 'initials', 'icon'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    size: 'regular',
    type: 'image',
    src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {(['mini', 'small', 'regular', 'large', 'x-large'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div style={{ width: '80px', fontFamily: 'Plus Jakarta Sans' }}>{size}</div>
          <Avatar size={size} type="image" src="https://i.pravatar.cc/150?img=1" />
          <Avatar size={size} type="initials" initials="JD" />
          <Avatar size={size} type="icon" />
        </div>
      ))}
    </div>
  ),
};
