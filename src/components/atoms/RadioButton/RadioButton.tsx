import React from 'react';
import type { RadioButtonProps } from './RadioButton.types';
import styles from './RadioButton.module.css';

export const RadioButton: React.FC<RadioButtonProps> = ({
  className = '',
  disabled = false,
  leftLabel = false,
  rightLabel = false,
  label = 'Label',
  size = 'Small',
  state = false,
  onChange,
}) => {
  const containerClass = [
    styles.container,
    disabled ? styles.disabled : '',
    styles[size.toLowerCase()],
    className
  ].filter(Boolean).join(' ');

  const circleClass = [
    styles.circle,
    styles[size.toLowerCase()],
    state ? styles.stateOn : ''
  ].filter(Boolean).join(' ');

  const innerCircleWrapperClass = [
    styles.innerCircleWrapper,
    styles[size.toLowerCase()]
  ].filter(Boolean).join(' ');

  const labelClass = [
    styles.label,
    styles[size.toLowerCase()]
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!state);
    }
  };

  return (
    <div className={containerClass} onClick={handleClick} role="radio" aria-checked={state} aria-disabled={disabled}>
      {leftLabel && <span className={labelClass}>{label}</span>}
      <div className={circleClass}>
        {state && (
          <div className={innerCircleWrapperClass}>
            <div className={styles.innerCircle} />
          </div>
        )}
      </div>
      {rightLabel && <span className={labelClass}>{label}</span>}
    </div>
  );
};
