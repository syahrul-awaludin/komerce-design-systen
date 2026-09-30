import React from 'react';
import type { CheckboxProps } from './Checkbox.types';
import styles from './Checkbox.module.css';

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ size = 'medium', className, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        ref={ref}
        className={[styles.checkbox, styles[size], className].filter(Boolean).join(' ')}
        {...props}
      />
    );
  }
);

Checkbox.displayName = 'Checkbox';