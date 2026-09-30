import React from 'react';
import styles from './Breadcrumb.module.css';
import type { BreadcrumbProps } from './Breadcrumb.types';

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  type = '1', 
  className = '', 
  items = [] 
}) => {
  const rootClass = `${styles.breadcrumb} ${styles[`type_${type}`]} ${className}`.trim();

  return (
    <nav className={rootClass} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={index} className={styles.item}>
          {item.href ? (
            <a href={item.href} className={styles.link}>
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && <span className={styles.separator}>/</span>}
        </span>
      ))}
    </nav>
  );
};
