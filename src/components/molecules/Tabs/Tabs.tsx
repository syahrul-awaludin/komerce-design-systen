import { useState } from 'react';
import type { TabsProps } from './Tabs.types';
import styles from './Tabs.module.css';

export const Tabs = ({ items, defaultActiveIndex = 0, onChange }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const handleTabClick = (index: number) => {
    if (items[index].disabled) return;
    setActiveIndex(index);
    if (onChange) onChange(index);
  };
  return (
    <div className={styles.tabs}>
      <div className={styles.tabBar}>
        {items.map((item, index) => (
          <button
            key={index}
            className={`${styles.tab} ${activeIndex === index ? styles.tabActive : ''} ${item.disabled ? styles.tabDisabled : ''}`}
            onClick={() => handleTabClick(index)}
            disabled={item.disabled}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        {items[activeIndex]?.content}
      </div>
    </div>
  );
};