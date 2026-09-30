import React from 'react';
import type { RadioProps } from './Radio.types';
import styles from './Radio.module.css';

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ size = 'medium', className, ...props }, ref) => {
    return (
      <input
        type="radio"
        ref={ref}
        className={[styles.radio, styles[size], className].filter(Boolean).join(' ')}
        {...props}
      />
    );
  }
);

Radio.displayName = 'Radio';