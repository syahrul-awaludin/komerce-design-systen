export type SwitchButtonProps = {
  className?: string;
  disabled?: boolean;
  leftLabel?: boolean;
  rightLabel?: boolean;
  label?: string;
  size?: "Medium" | "Small" | "Large";
  state?: boolean;
  onChange?: (state: boolean) => void;
};
