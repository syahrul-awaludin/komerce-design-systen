import React, { forwardRef } from 'react';
import type { AlertDialogProps } from './AlertDialog.types';
import styles from './AlertDialog.module.css';
import { Button } from '../../atoms/Button';

export const AlertDialog = forwardRef<HTMLDivElement, AlertDialogProps>(
  ({ isOpen, title, description, cancelText = 'Cancel', continueText = 'Continue', onCancel, onContinue, onClose, ...props }, ref) => {
    if (!isOpen) return null;

    return (
      <div className={styles.overlay} onClick={onClose}>
        <div 
          ref={ref} 
          className={styles.content} 
          onClick={(e) => e.stopPropagation()} 
          role="alertdialog" 
          aria-modal="true"
          {...props}
        >
          <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            {onClose && (
              <button className={styles.closeButton} onClick={onClose} aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
          <p className={styles.description}>{description}</p>
          <div className={styles.footer}>
            <Button variant="outline" onClick={onCancel}>{cancelText}</Button>
            <Button variant="primary" onClick={onContinue}>{continueText}</Button>
          </div>
        </div>
      </div>
    );
  }
);

AlertDialog.displayName = 'AlertDialog';
