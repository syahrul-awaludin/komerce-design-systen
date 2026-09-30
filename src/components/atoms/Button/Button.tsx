import React, { forwardRef } from 'react';
import type { ButtonProps } from './Button.types';
import styles from './Button.module.css';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'regular', 
    roundness = 'default', 
    leftIcon, 
    rightIcon, 
    children, 
    className = '', 
    disabled, 
    ...props 
  }, ref) => {
    
    const classNames = [
      styles.button,
      styles[variant],
      styles[size],
      styles[roundness],
      disabled ? styles.disabled : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <button ref={ref} className={classNames} disabled={disabled} {...props}>
        {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
        {children && <span>{children}</span>}
        {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
      </button>
    );
  }
);
Button.displayName = 'Button';
