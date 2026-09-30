import type { ReactNode } from 'react';
export interface TabItem { label: string; content: ReactNode; disabled?: boolean; icon?: ReactNode; }
export interface TabsProps { items: TabItem[]; defaultActiveIndex?: number; onChange?: (index: number) => void; }