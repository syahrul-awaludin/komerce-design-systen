export interface BreadcrumbProps {
  /**
   * The type of the breadcrumb. Matches Figma variants.
   */
  type?: '1' | '2' | 'deep';
  /**
   * Additional class name
   */
  className?: string;
  /**
   * Items to display in the breadcrumb
   */
  items?: Array<{ label: string; href?: string }>;
}
