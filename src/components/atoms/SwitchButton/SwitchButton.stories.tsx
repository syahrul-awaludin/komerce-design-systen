import type { Meta, StoryObj } from '@storybook/react';
import { SwitchButton } from './SwitchButton';

const meta: Meta<typeof SwitchButton> = {
  title: 'Atoms/SwitchButton',
  component: SwitchButton,
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
type Story = StoryObj<typeof SwitchButton>;

export const Default: Story = {
  args: {
    size: 'Medium',
    state: false,
    disabled: false,
    rightLabel: true,
    label: 'Airplane mode',
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <SwitchButton size="Small" state={false} disabled={false} rightLabel label="Small Off" />
        <SwitchButton size="Small" state={true} disabled={false} rightLabel label="Small On" />
        <SwitchButton size="Small" state={false} disabled={true} rightLabel label="Small Off Disabled" />
        <SwitchButton size="Small" state={true} disabled={true} rightLabel label="Small On Disabled" />
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <SwitchButton size="Medium" state={false} disabled={false} rightLabel label="Medium Off" />
        <SwitchButton size="Medium" state={true} disabled={false} rightLabel label="Medium On" />
        <SwitchButton size="Medium" state={false} disabled={true} rightLabel label="Medium Off Disabled" />
        <SwitchButton size="Medium" state={true} disabled={true} rightLabel label="Medium On Disabled" />
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <SwitchButton size="Large" state={false} disabled={false} rightLabel label="Large Off" />
        <SwitchButton size="Large" state={true} disabled={false} rightLabel label="Large On" />
        <SwitchButton size="Large" state={false} disabled={true} rightLabel label="Large Off Disabled" />
        <SwitchButton size="Large" state={true} disabled={true} rightLabel label="Large On Disabled" />
      </div>
    </div>
  ),
};
