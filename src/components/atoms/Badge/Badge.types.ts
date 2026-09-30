import type { HTMLAttributes, ReactNode } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The semantic variant of the badge extracted from Figma.
   */
  variant?: 'primary' | 'secondary' | 'destructive' | 'success' | 'warning' | 'info' | 'outline';
  /**
   * The content to display inside the badge.
   */
  children: ReactNode;
}
