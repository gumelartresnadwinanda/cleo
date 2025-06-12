import type { Meta, StoryObj } from '@storybook/react';
import Input from '../components/ui/Input/Input';
import { Icon } from '../components/ui';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'flushed'],
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Input Label',
    placeholder: 'Enter text here',
  },
};

export const WithHelperText: Story = {
  args: {
    ...Default.args,
    helperText: 'This is a helper text',
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: true,
    helperText: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const WithLeftElement: Story = {
  args: {
    ...Default.args,
    leftElement: <Icon name="search" />,
  },
};

export const WithRightElement: Story = {
  args: {
    ...Default.args,
    rightElement: <Icon name="calendar" />,
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg',
  },
};

export const Flushed: Story = {
  args: {
    ...Default.args,
    variant: 'flushed',
  },
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    fullWidth: true,
  },
}; 