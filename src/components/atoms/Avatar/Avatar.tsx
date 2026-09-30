import React from 'react';
import styles from './Avatar.module.css';
import type { AvatarProps } from './Avatar.types';

export const Avatar: React.FC<AvatarProps> = ({
  size = 'regular',
  type = 'image',
  src,
  initials,
  alt = 'Avatar',
  className = '',
}) => {
  const containerClasses = [
    styles.avatar,
    styles[`size-${size}`],
    styles[`type-${type}`],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      {type === 'image' && src && <img src={src} alt={alt} className={styles.image} />}
      {type === 'initials' && <span className={styles.initials}>{initials}</span>}
      {type === 'icon' && (
        <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
        </svg>
      )}
    </div>
  );
};
