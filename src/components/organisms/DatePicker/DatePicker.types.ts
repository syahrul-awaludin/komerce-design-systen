export interface DatePickerProps {
  value?: Date;
  startDate?: Date;
  endDate?: Date;
  type?: 'single' | 'range';
  onChange?: (date: Date) => void;
  onRangeChange?: (start: Date, end: Date) => void;
  placeholder?: string;
  disabled?: boolean;
}
