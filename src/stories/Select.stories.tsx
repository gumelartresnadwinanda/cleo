import type { Meta, StoryObj } from '@storybook/react';
import Select from '../components/ui/Select/Select';
import { Icon } from '../components/ui';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
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
type Story = StoryObj<typeof Select>;

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3', disabled: true },
  { value: '4', label: 'Option 4' },
  { value: '5', label: 'Option 5' },
];

export const Default: Story = {
  args: {
    label: 'Select an option',
    options,
    placeholder: 'Choose an option',
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

export const Filled: Story = {
  args: {
    ...Default.args,
    variant: 'filled',
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