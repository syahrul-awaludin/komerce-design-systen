export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Size of the radio button */
  size?: 'small' | 'medium' | 'large';
}