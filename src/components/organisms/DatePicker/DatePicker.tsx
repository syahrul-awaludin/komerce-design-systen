import { useState, useRef, useEffect } from 'react';
import type { DatePickerProps } from './DatePicker.types';
import styles from './DatePicker.module.css';

export function DatePicker({ 
  value, 
  startDate, 
  endDate, 
  type = 'single', 
  onChange, 
  onRangeChange, 
  placeholder = 'Select date', 
  disabled = false 
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(value || startDate || new Date());
  
  // Range selection state
  const [tempStart, setTempStart] = useState<Date | undefined>(startDate);
  const [tempEnd, setTempEnd] = useState<Date | undefined>(endDate);
  const [hoverDate, setHoverDate] = useState<Date | undefined>(undefined);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  
  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    
    if (type === 'single') {
      onChange?.(newDate);
      setIsOpen(false);
    } else {
      if (!tempStart || (tempStart && tempEnd)) {
        setTempStart(newDate);
        setTempEnd(undefined);
      } else if (newDate < tempStart) {
        setTempStart(newDate);
      } else {
        setTempEnd(newDate);
        onRangeChange?.(tempStart, newDate);
        // setIsOpen(false); // keep open for range or close, depending on ux
      }
    }
  };

  const isToday = (day: number) => {
    const today = new Date();
    return today.getDate() === day && today.getMonth() === currentMonth.getMonth() && today.getFullYear() === currentMonth.getFullYear();
  };

  const isSelected = (day: number) => {
    if (type === 'single') {
      if (!value) return false;
      return value.getDate() === day && value.getMonth() === currentMonth.getMonth() && value.getFullYear() === currentMonth.getFullYear();
    } else {
      const cellDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      return (tempStart && cellDate.getTime() === tempStart.getTime()) || (tempEnd && cellDate.getTime() === tempEnd.getTime());
    }
  };

  const isInRange = (day: number) => {
    if (type === 'single') return false;
    const cellDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (tempStart && tempEnd) {
      return cellDate > tempStart && cellDate < tempEnd;
    }
    if (tempStart && hoverDate && !tempEnd) {
      if (hoverDate > tempStart) {
        return cellDate > tempStart && cellDate <= hoverDate;
      } else {
        return cellDate >= hoverDate && cellDate < tempStart;
      }
    }
    return false;
  };

  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));

  let displayText = placeholder;
  if (type === 'single' && value) {
    displayText = value.toLocaleDateString();
  } else if (type === 'range') {
    if (tempStart && tempEnd) displayText = `${tempStart.toLocaleDateString()} - ${tempEnd.toLocaleDateString()}`;
    else if (tempStart) displayText = `${tempStart.toLocaleDateString()} - ...`;
  }

  return (
    <div className={styles.container} ref={containerRef}>
      <button 
        className={`${styles.trigger} ${isOpen ? styles.triggerActive : ''}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        type="button"
      >
        <span className={(type === 'single' && value) || (type === 'range' && tempStart) ? '' : styles.placeholder}>
          {displayText}
        </span>
        <span className={styles.icon}>📅</span>
      </button>

      {isOpen && !disabled && (
        <div className={styles.calendar}>
          <div className={styles.header}>
            <button onClick={prevMonth} type="button" className={styles.navBtn}>◀</button>
            <span>{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
            <button onClick={nextMonth} type="button" className={styles.navBtn}>▶</button>
          </div>
          <div className={styles.grid}>
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className={styles.dayName}>{day}</div>
            ))}
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`empty-${i}`} className={`${styles.dayCell} ${styles.empty}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const cellDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
              
              return (
                <div 
                  key={day}
                  className={`${styles.dayCellWrapper} ${isInRange(day) ? styles.inRange : ''}`}
                >
                  <div 
                    className={`${styles.dayCell} ${isSelected(day) ? styles.selected : ''} ${isToday(day) ? styles.today : ''}`}
                    onClick={() => handleDateSelect(day)}
                    onMouseEnter={() => type === 'range' && !tempEnd && setHoverDate(cellDate)}
                  >
                    {day}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
