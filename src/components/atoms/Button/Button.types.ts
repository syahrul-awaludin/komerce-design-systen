import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual style variant of the button */
  variant?: 'primary' | 'secondary' | 'outline' | 'destructive' | 'link';
  /** The size of the button */
  size?: 'small' | 'regular' | 'large';
  /** Border radius style */
  roundness?: 'default' | 'round';
  /** Icon to display before the label */
  leftIcon?: ReactNode;
  /** Icon to display after the label */
  rightIcon?: ReactNode;
  /** Button content/label */
  children: ReactNode;
}
