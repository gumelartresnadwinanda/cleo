import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/ui/Button/Button';
import { Icon } from '../components/ui';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
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
    outlined: {
      control: 'boolean',
    },
    filled: {
      control: 'boolean',
    },
    rounded: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning Button',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'primary',
    outlined: true,
    children: 'Outlined Button',
  },
};

export const Filled: Story = {
  args: {
    variant: 'primary',
    filled: true,
    children: 'Filled Button',
  },
};

export const Rounded: Story = {
  args: {
    variant: 'primary',
    rounded: true,
    children: 'Rounded Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <Icon name="search" />,
    children: 'Search',
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <Icon name="calendar" />,
    children: 'Calendar',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
}; 