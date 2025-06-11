import type { Meta, StoryObj } from '@storybook/react';
import Icon from '../components/ui/Icon/Icon';

const meta: Meta<typeof Icon> = {
  title: 'UI/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: ['search', 'calendar', 'chevron-down', 'chevron-up', 'check', 'close'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Search: Story = {
  args: {
    name: 'search',
  },
};

export const Calendar: Story = {
  args: {
    name: 'calendar',
  },
};

export const ChevronDown: Story = {
  args: {
    name: 'chevron-down',
  },
};

export const ChevronUp: Story = {
  args: {
    name: 'chevron-up',
  },
};

export const Check: Story = {
  args: {
    name: 'check',
  },
};

export const Close: Story = {
  args: {
    name: 'close',
  },
};

export const Small: Story = {
  args: {
    name: 'search',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    name: 'search',
    size: 'lg',
  },
};

export const CustomColor: Story = {
  args: {
    name: 'search',
    color: '#3b82f6',
  },
}; 