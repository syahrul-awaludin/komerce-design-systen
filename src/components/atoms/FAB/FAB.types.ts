import React from 'react';

export interface FABProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Variant style of the FAB */
  variant?: 'primary' | 'secondary' | 'outline';
  /** Size of the FAB */
  size?: 'small' | 'regular' | 'large' | 'extended';
}
