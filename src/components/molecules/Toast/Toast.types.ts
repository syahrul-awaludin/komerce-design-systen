export interface ToastProps {
  type?: 'default' | 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  timestamp?: string;
  onClose?: () => void;
  visible?: boolean;
}