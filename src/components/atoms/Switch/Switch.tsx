import React from 'react';
import styles from './Switch.module.css';
import type { SwitchProps } from './Switch.types';

export const Switch: React.FC<SwitchProps> = ({ 
  size = 'medium', 
  checked = false, 
  disabled = false, 
  onChange,
  className = '',
  ...props 
}) => {
  return (
    <button 
      type="button"
      role="switch"
      aria-checked={checked}
      className={`${styles.switch} ${styles[size]} ${checked ? styles.checked : ''} ${className}`}
      disabled={disabled}
      onClick={() => onChange && onChange(!checked)}
      {...props}
    >
      <span className={styles.thumb} />
    </button>
  );
};
