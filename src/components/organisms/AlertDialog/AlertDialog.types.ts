import type { HTMLAttributes } from 'react';

export interface AlertDialogProps extends HTMLAttributes<HTMLDivElement> {
  /** Controls the visibility of the dialog */
  isOpen: boolean;
  /** The main heading of the alert dialog */
  title: string;
  /** The descriptive text explaining the action */
  description: string;
  /** Text for the cancel button */
  cancelText?: string;
  /** Text for the continue/confirm button */
  continueText?: string;
  /** Callback fired when cancel is clicked */
  onCancel: () => void;
  /** Callback fired when continue is clicked */
  onContinue: () => void;
  /** Callback fired when the overlay or close icon is clicked */
  onClose?: () => void;
}
