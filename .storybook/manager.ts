import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const komerceTheme = create({
  base: 'light',
  brandTitle: 'Komerce Design System',
  brandUrl: 'https://komerce.id',
  colorPrimary: 'var(--button-primary-color-container-background-default, #f95e16)',
  colorSecondary: '#E55514',
  appBg: '#FAFAFA',
  appContentBg: '#FFFFFF',
  appBorderColor: '#E5E5E5',
  appBorderRadius: 8,
  fontBase: "'Plus Jakarta Sans', sans-serif",
  fontCode: 'monospace',
  textColor: '#171717',
  textInverseColor: '#FFFFFF',
  barTextColor: '#737373',
  barSelectedColor: 'var(--button-primary-color-container-background-default, #f95e16)',
  barHoverColor: '#CC4B12',
  barBg: '#FFFFFF',
});

addons.setConfig({
  theme: komerceTheme,
});
