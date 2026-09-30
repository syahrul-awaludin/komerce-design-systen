export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  size?: 'small' | 'medium' | 'large';
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}
