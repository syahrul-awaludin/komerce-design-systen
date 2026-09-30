import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';

const meta = {
  title: 'Organisms/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

const HomeIcon = () => <span>🏠</span>;
const UsersIcon = () => <span>👥</span>;
const SettingsIcon = () => <span>⚙️</span>;
const LogoIcon = () => <span style={{fontSize: 24}}>🔥</span>;
const Avatar = () => <span style={{fontSize: 20}}>🧑</span>;

const mockItems = [
  { label: 'Dashboard', icon: <HomeIcon />, active: true },
  { 
    label: 'Users', 
    icon: <UsersIcon />,
    children: [
      { label: 'All Users' },
      { label: 'Roles' }
    ]
  },
  { label: 'Settings', icon: <SettingsIcon /> },
];

export const Default: Story = {
  args: {
    brand: {
      logo: <LogoIcon />,
      name: 'Komerce',
    },
    account: {
      avatar: <Avatar />,
      name: 'Syahrul Awaludin',
      email: 'admin@komerce.id'
    },
    items: mockItems,
    collapsed: false,
  },
  decorators: [
    (Story) => (
      <div style={{ height: '600px', backgroundColor: '#f9fafb', display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
};

export const Collapsed: Story = {
  args: {
    ...Default.args,
    collapsed: true,
  },
  decorators: Default.decorators,
};
