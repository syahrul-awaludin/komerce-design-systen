import { useState } from 'react';
import type { NavigationProps, NavigationItem as NavItemType } from './Navigation.types';
import styles from './Navigation.module.css';

export function Navigation({ items, brand, account, collapsed = false, onToggle }: NavigationProps) {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  const handleToggle = () => {
    const newVal = !isCollapsed;
    setIsCollapsed(newVal);
    onToggle?.(newVal);
  };

  const renderItem = (item: NavItemType) => {
    return (
      <li key={item.label} className={styles.li}>
        <button className={`${styles.menuItem} ${item.active ? styles.active : ''}`} onClick={item.onClick} type="button">
          {item.icon && <span className={styles.icon}>{item.icon}</span>}
          <span className={styles.label}>{item.label}</span>
        </button>
        {item.children && !isCollapsed && (
          <ul className={styles.submenu}>
            {item.children.map(child => (
              <li key={child.label}>
                <button className={`${styles.submenuItem} ${child.active ? styles.active : ''}`} onClick={child.onClick} type="button">
                  {child.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : styles.expanded}`}>
      <div className={styles.brandContent}>
        {brand?.logo && <span className={styles.brandLogo}>{brand.logo}</span>}
        <span className={styles.brandName}>{brand?.name}</span>
        <button className={styles.toggleBtn} onClick={handleToggle} type="button">
          {isCollapsed ? '»' : '«'}
        </button>
      </div>

      <div className={styles.navContent}>
        <ul className={styles.menuList}>
          {items.map(renderItem)}
        </ul>
      </div>

      {account && (
        <div className={styles.accountContent}>
          <div className={styles.accountCard}>
            {account.avatar && <span className={styles.accountAvatar}>{account.avatar}</span>}
            <div className={styles.accountInfo}>
              <span className={styles.accountName}>{account.name}</span>
              <span className={styles.accountEmail}>{account.email}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
