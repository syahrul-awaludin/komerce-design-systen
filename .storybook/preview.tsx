import type { Preview } from '@storybook/react-vite'
import '../src/styles/tokens.css'
import '../src/styles/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Foundations',
          ['Introduction', 'Colors', 'Typography', 'Shadows', 'Spacing', 'Radius'],
          'Atoms',
          ['Button', 'Badge', 'Avatar', 'Input'],
          'Molecules',
          ['Toast', 'Breadcrumb', 'Accordion', 'Tabs', 'DatePicker'],
          'Organisms',
          ['Table', 'Sidebar', 'Topbar'],
        ],
      },
    },
    a11y: {
      test: 'todo'
    }
  },
  tags: ['autodocs'],
};

export default preview;