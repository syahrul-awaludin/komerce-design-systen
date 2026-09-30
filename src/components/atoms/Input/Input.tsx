import type { FC } from 'react';
import type { InputProps } from './Input.types';
import styles from './Input.module.css';

export const Input: FC<InputProps> = ({
  label,
  helperText,
  error,
  errorMessage,
  disabled,
  size = 'md',
  leftIcon,
  rightIcon,
  className,
  id,
  ...props
}) => {
  const containerClasses = [styles.container, className || ''].filter(Boolean).join(' ');
  const inputWrapperClasses = [
    styles.inputWrapper,
    styles[size],
    error ? styles.error : '',
    disabled ? styles.disabled : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      {label && <label htmlFor={id} className={styles.label}>{label}</label>}
      <div className={inputWrapperClasses}>
        {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
        <input
          id={id}
          className={styles.input}
          disabled={disabled}
          {...props}
        />
        {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
      </div>
      {error && errorMessage ? (
        <span className={styles.errorMessage}>{errorMessage}</span>
      ) : helperText ? (
        <span className={styles.helperText}>{helperText}</span>
      ) : null}
    </div>
  );
};