import type { CardProps } from './Card.types';
import styles from './Card.module.css';

export const Card = ({ type = 'default', title, value, subtitle, change = 0, data = 0 }: CardProps) => {
  return (
    <div className={styles.card}>
      <span className={styles.title}>{title}</span>
      <span className={styles.value}>{value}</span>
      {type === 'progress' && (
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${Math.min(100, Math.max(0, data))}%` }} />
        </div>
      )}
      {type === 'comparison' && (
        <div className={`${styles.changeIndicator} ${change >= 0 ? styles.changeUp : styles.changeDown}`}>
          {change >= 0 ? (
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
          ) : (
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          )}
          {Math.abs(change)}% {change >= 0 ? 'increase' : 'decrease'}
        </div>
      )}
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
    </div>
  );
};