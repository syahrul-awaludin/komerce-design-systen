import type { TooltipProps } from './Tooltip.types';
import styles from './Tooltip.module.css';

export function Tooltip({ content, children, position = 'top' }: TooltipProps) {
  return (
    <div className={styles.container}>
      {children}
      <div className={`${styles.tooltip} ${styles[position]}`}>
        {content}
      </div>
    </div>
  );
}
