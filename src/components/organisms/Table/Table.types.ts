export interface TableColumn {
  key: string;
  header: string;
  width?: string | number;
  cellType?: 'text' | 'number' | 'date' | 'custom';
}

export interface TableProps {
  columns: TableColumn[];
  data: any[];
  selectable?: boolean;
  emptyMessage?: string;
  onRowSelect?: (selectedIds: any[]) => void;
}