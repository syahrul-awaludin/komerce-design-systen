import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Atoms/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['Small', 'Medium', 'Large'],
    },
    disabled: {
      control: 'boolean',
    },
    state: {
      control: 'boolean',
    },
    leftLabel: {
      control: 'boolean',
    },
    rightLabel: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    size: 'Medium',
    state: false,
    disabled: false,
    rightLabel: true,
    label: 'Label',
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <RadioButton size="Small" state={false} disabled={false} rightLabel label="Small Off" />
        <RadioButton size="Small" state={true} disabled={false} rightLabel label="Small On" />
        <RadioButton size="Small" state={false} disabled={true} rightLabel label="Small Off Disabled" />
        <RadioButton size="Small" state={true} disabled={true} rightLabel label="Small On Disabled" />
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <RadioButton size="Medium" state={false} disabled={false} rightLabel label="Medium Off" />
        <RadioButton size="Medium" state={true} disabled={false} rightLabel label="Medium On" />
        <RadioButton size="Medium" state={false} disabled={true} rightLabel label="Medium Off Disabled" />
        <RadioButton size="Medium" state={true} disabled={true} rightLabel label="Medium On Disabled" />
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <RadioButton size="Large" state={false} disabled={false} rightLabel label="Large Off" />
        <RadioButton size="Large" state={true} disabled={false} rightLabel label="Large On" />
        <RadioButton size="Large" state={false} disabled={true} rightLabel label="Large Off Disabled" />
        <RadioButton size="Large" state={true} disabled={true} rightLabel label="Large On Disabled" />
      </div>
    </div>
  ),
};
