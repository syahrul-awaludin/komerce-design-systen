import type { FC } from 'react';
import type { ProgressProps } from './Progress.types';
import styles from './Progress.module.css';

export const Progress: FC<ProgressProps> = ({ value, showLabel, className }) => {
  const safeValue = Math.min(Math.max(value, 0), 100);
  
  return (
    <div className={[styles.container, className || ''].filter(Boolean).join(' ')}>
      <div className={styles.track}>
        <div className={styles.bar} style={{ width: `${safeValue}%` }} />
      </div>
      {showLabel && <span className={styles.label}>{Math.round(safeValue)}%</span>}
    </div>
  );
};