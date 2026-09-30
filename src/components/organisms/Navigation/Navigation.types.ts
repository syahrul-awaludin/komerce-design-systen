import type { ReactNode } from 'react';

export interface NavigationItem {
  label: string;
  icon?: ReactNode;
  active?: boolean;
  children?: NavigationItem[];
  onClick?: () => void;
}

export interface NavigationProps {
  brand?: {
    logo?: ReactNode;
    name?: string;
  };
  account?: {
    avatar?: ReactNode;
    name?: string;
    email?: string;
  };
  items: NavigationItem[];
  collapsed?: boolean;
  onToggle?: (collapsed: boolean) => void;
}
