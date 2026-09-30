import React from 'react';
import styles from './ToggleGroup.module.css';
import type { ToggleGroupProps } from './ToggleGroup.types';

export const ToggleGroup: React.FC<ToggleGroupProps> = ({ 
  size = 'medium', 
  children,
  className = '',
  ...props 
}) => {
  return (
    <div className={`${styles.toggleGroup} ${styles[size]} ${className}`} role="group" {...props}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { size } as any);
        }
        return child;
      })}
    </div>
  );
};
