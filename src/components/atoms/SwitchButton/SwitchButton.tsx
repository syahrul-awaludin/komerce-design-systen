import React from 'react';
import type { SwitchButtonProps } from './SwitchButton.types';
import styles from './SwitchButton.module.css';

export const SwitchButton: React.FC<SwitchButtonProps> = ({
  className = '',
  disabled = false,
  leftLabel = false,
  rightLabel = false,
  label = 'Airplane mode',
  size = 'Small',
  state = false,
  onChange,
}) => {
  const containerClass = [
    styles.container,
    disabled ? styles.disabled : '',
    className
  ].filter(Boolean).join(' ');

  const switchClass = [
    styles.switch,
    styles[size.toLowerCase()],
    state ? styles.on : styles.off
  ].filter(Boolean).join(' ');

  const thumbClass = [
    styles.thumb,
    styles[size.toLowerCase()],
    state ? styles.on : styles.off
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

  const labelContent = (
    <div className={styles.labelWrapper}>
      <span className={labelClass}>{label}</span>
    </div>
  );

  return (
    <div className={containerClass} onClick={handleClick} role="switch" aria-checked={state} aria-disabled={disabled}>
      {leftLabel && labelContent}
      <div className={styles.switchWrapper}>
        <div className={switchClass}>
          <div className={thumbClass} />
        </div>
      </div>
      {rightLabel && labelContent}
    </div>
  );
};
