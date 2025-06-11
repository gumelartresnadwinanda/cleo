import type { Meta, StoryObj } from '@storybook/react';
import Badge from '../components/ui/Badge/Badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    rounded: {
      control: 'boolean',
    },
    outlined: {
      control: 'boolean',
    },
    filled: {
      control: 'boolean',
    },
    count: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
    children: 'Rounded',
  },
};

export const Outlined: Story = {
  args: {
    outlined: true,
    children: 'Outlined',
  },
};

export const Filled: Story = {
  args: {
    filled: true,
    children: 'Filled',
  },
};

export const WithCount: Story = {
  args: {
    count: 5,
    children: 'Notifications',
  },
};

export const WithLargeCount: Story = {
  args: {
    count: 99,
    children: 'Messages',
  },
}; 