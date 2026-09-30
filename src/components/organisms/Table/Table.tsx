import { useState } from 'react';
import type { ChangeEvent } from 'react';
import type { TableProps } from './Table.types';
import styles from './Table.module.css';

export function Table({ columns, data, selectable = false, emptyMessage = 'No data available', onRowSelect }: TableProps) {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allIds = new Set(data.map((_, i) => i));
      setSelectedRows(allIds);
      onRowSelect?.(Array.from(allIds));
    } else {
      setSelectedRows(new Set());
      onRowSelect?.([]);
    }
  };

  const handleSelectRow = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const newSelected = new Set(selectedRows);
    if (e.target.checked) {
      newSelected.add(index);
    } else {
      newSelected.delete(index);
    }
    setSelectedRows(newSelected);
    onRowSelect?.(Array.from(newSelected));
  };

  if (!data || data.length === 0) {
    return (
      <div className={styles.tableContainer}>
        <div className={styles.emptyState}>
          <div>No Data Icon</div>
          <div>{emptyMessage}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {selectable && (
              <th className={styles.th} style={{ width: '40px' }}>
                <input 
                  type="checkbox" 
                  checked={selectedRows.size === data.length}
                  onChange={handleSelectAll}
                />
              </th>
            )}
            {columns.map(col => (
              <th key={col.key} className={styles.th} style={{ width: col.width }}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={styles.tr}>
              {selectable && (
                <td className={styles.td}>
                  <input 
                    type="checkbox" 
                    checked={selectedRows.has(index)}
                    onChange={(e) => handleSelectRow(index, e)}
                  />
                </td>
              )}
              {columns.map(col => (
                <td key={col.key} className={styles.td}>
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
