import { useState, useRef, useEffect } from 'react';
import type { SelectProps } from './Select.types';
import styles from './Select.module.css';

export const Select = ({ options, placeholder = 'Select...', value, onChange, disabled, error }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(value);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (value !== undefined) setInternalValue(value); }, [value]);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => { if (containerRef.current && !containerRef.current.contains(event.target as Node)) setIsOpen(false); };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (val: string) => {
    setInternalValue(val);
    setIsOpen(false);
    if (onChange) onChange(val);
  };

  const selectedOption = options.find(o => o.value === internalValue);

  return (
    <div className={styles.container} ref={containerRef}>
      <div
        className={`${styles.trigger} ${error ? styles.triggerError : ''} ${disabled ? styles.triggerDisabled : ''}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span className={selectedOption ? styles.value : styles.placeholder}>{selectedOption ? selectedOption.label : placeholder}</span>
        <svg className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </div>
      {isOpen && !disabled && (
        <ul className={styles.menu}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`${styles.option} ${internalValue === opt.value ? styles.optionSelected : ''}`}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};