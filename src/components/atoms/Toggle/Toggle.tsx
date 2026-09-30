import React from 'react';
import styles from './Toggle.module.css';
import type { ToggleProps } from './Toggle.types';

export const Toggle: React.FC<ToggleProps> = ({ 
  size = 'medium', 
  active = false, 
  disabled = false, 
  onClick, 
  children,
  ...props 
}) => {
  return (
    <button 
      type="button"
      className={`${styles.toggle} ${styles[size]} ${active ? styles.active : ''}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
