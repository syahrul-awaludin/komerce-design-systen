export interface AccordionItem { title: string; content: string; defaultOpen?: boolean; disabled?: boolean; }
export interface AccordionProps { items: AccordionItem[]; allowMultiple?: boolean; }