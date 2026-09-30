import React from 'react';
import type { FABProps } from './FAB.types';
import styles from './FAB.module.css';

export const FAB = React.forwardRef<HTMLButtonElement, FABProps>(
  ({ variant = 'primary', size = 'regular', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={[
          styles.fab,
          styles[variant],
          styles[size],
          className
        ].filter(Boolean).join(' ')}
        {...props}
      >
        {children}
      </button>
    );
  }
);

FAB.displayName = 'FAB';
