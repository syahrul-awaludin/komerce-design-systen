import type { Meta, StoryObj } from '@storybook/react';
import { BubbleChat } from './BubbleChat';

const meta: Meta<typeof BubbleChat> = {
  title: 'Molecules/BubbleChat',
  component: BubbleChat,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['Incoming', 'Outgoing'],
    },
    type: {
      control: 'select',
      options: ['Text', 'File', 'Image', 'Video'],
    },
    state: {
      control: 'select',
      options: ['Default', 'Error'],
    },
    showStatus: {
      control: 'boolean',
    },
    showTime: {
      control: 'boolean',
    },
    showCustomText: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BubbleChat>;

export const DefaultIncomingText: Story = {
  args: {
    direction: 'Incoming',
    type: 'Text',
    state: 'Default',
    textMessage: 'Hello there!',
  },
};

export const DefaultOutgoingText: Story = {
  args: {
    direction: 'Outgoing',
    type: 'Text',
    state: 'Default',
    textMessage: 'Hi! How can I help you?',
    showStatus: true,
  },
};

export const ErrorText: Story = {
  args: {
    direction: 'Outgoing',
    type: 'Text',
    state: 'Error',
    textMessage: 'This message failed to send.',
  },
};

export const IncomingImage: Story = {
  args: {
    direction: 'Incoming',
    type: 'Image',
    state: 'Default',
    imageName: 'vacation.jpg',
    imageMetadata: '2.5 MB',
  },
};

export const OutgoingFile: Story = {
  args: {
    direction: 'Outgoing',
    type: 'File',
    state: 'Default',
    fileName: 'report.pdf',
    fileMetadata: '1.2 MB',
    showStatus: true,
  },
};
