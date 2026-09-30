import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = { title: 'molecules/Accordion', component: Accordion, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = { args: { items: [{ title: 'Section 1', content: 'Content 1' }, { title: 'Section 2', content: 'Content 2' }] } };
export const DefaultOpen: Story = { args: { items: [{ title: 'Section 1', content: 'Content 1', defaultOpen: true }, { title: 'Section 2', content: 'Content 2' }] } };
export const MultipleOpen: Story = { args: { allowMultiple: true, items: [{ title: 'Section 1', content: 'Content 1' }, { title: 'Section 2', content: 'Content 2' }] } };
export const WithDisabledItem: Story = { args: { items: [{ title: 'Section 1', content: 'Content 1' }, { title: 'Disabled Section', content: 'Content', disabled: true }] } };