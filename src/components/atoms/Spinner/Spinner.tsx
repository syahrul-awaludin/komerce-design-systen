import type { FC } from 'react';
import type { SpinnerProps } from './Spinner.types';
import styles from './Spinner.module.css';

export const Spinner: FC<SpinnerProps> = ({ size = 'md', className }) => {
  const classes = [styles.spinner, styles[size], className || ''].filter(Boolean).join(' ');
  return <div className={classes} role="status" aria-label="Loading" />;
};