import type { PaginationProps } from './Pagination.types';
import styles from './Pagination.module.css';

export const Pagination = ({ currentPage, totalPages, onPageChange, siblingCount = 1 }: PaginationProps) => {
  const handlePageChange = (page: number) => { if (onPageChange && page >= 1 && page <= totalPages) onPageChange(page); };
  
  const generatePages = () => {
    const pages = [];
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < totalPages - 2;

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (!showLeftDots && showRightDots) {
        for (let i = 1; i <= 3 + 2 * siblingCount; i++) pages.push(i);
        pages.push('...', totalPages);
      } else if (showLeftDots && !showRightDots) {
        pages.push(1, '...');
        for (let i = totalPages - (3 + 2 * siblingCount) + 1; i <= totalPages; i++) pages.push(i);
      } else if (showLeftDots && showRightDots) {
        pages.push(1, '...');
        for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) pages.push(i);
        pages.push('...', totalPages);
      }
    }
    return pages;
  };

  return (
    <div className={styles.pagination}>
      <button className={`${styles.button} ${currentPage === 1 ? styles.disabled : ''}`} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>
      {generatePages().map((page, index) => {
        if (page === '...') return <span key={`ellipsis-${index}`} className={styles.ellipsis}>...</span>;
        return (
          <button key={index} className={`${styles.button} ${currentPage === page ? styles.active : ''}`} onClick={() => handlePageChange(page as number)}>
            {page}
          </button>
        );
      })}
      <button className={`${styles.button} ${currentPage === totalPages ? styles.disabled : ''}`} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
};