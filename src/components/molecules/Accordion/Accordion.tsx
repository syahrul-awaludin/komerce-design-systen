import { useState } from 'react';
import type { AccordionProps } from './Accordion.types';
import styles from './Accordion.module.css';

export const Accordion = ({ items, allowMultiple = false }: AccordionProps) => {
  const [openIndices, setOpenIndices] = useState<number[]>(items.map((item, i) => (item.defaultOpen ? i : -1)).filter(i => i !== -1));
  const toggle = (index: number) => {
    if (items[index].disabled) return;
    if (allowMultiple) {
      setOpenIndices(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
    } else {
      setOpenIndices(prev => prev.includes(index) ? [] : [index]);
    }
  };
  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div key={index} className={styles.item}>
            <div className={`${styles.header} ${item.disabled ? styles.headerDisabled : ''}`} onClick={() => toggle(index)}>
              {item.title}
              <svg className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </div>
            <div className={`${styles.contentWrapper} ${isOpen ? styles.contentWrapperOpen : ''}`}>
              <div className={styles.content}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};