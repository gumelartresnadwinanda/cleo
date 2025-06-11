import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal from '../components/ui/Modal/Modal';
import Button from '../components/ui/Button/Button';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    showCloseButton: {
      control: 'boolean',
    },
    closeOnEsc: {
      control: 'boolean',
    },
    closeOnOverlayClick: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalTemplate = (args: Omit<React.ComponentProps<typeof Modal>, 'isOpen' | 'onClose'>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>This is the modal content. You can put any content here.</p>
        <div style={{ marginTop: '1rem' }}>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </div>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: ModalTemplate,
  args: {
    title: 'Modal Title',
  },
};

export const WithoutTitle: Story = {
  render: ModalTemplate,
  args: {
    showCloseButton: true,
  },
};

export const WithoutCloseButton: Story = {
  render: ModalTemplate,
  args: {
    title: 'Modal Without Close Button',
    showCloseButton: false,
  },
};

export const Small: Story = {
  render: ModalTemplate,
  args: {
    title: 'Small Modal',
    size: 'sm',
  },
};

export const Medium: Story = {
  render: ModalTemplate,
  args: {
    title: 'Medium Modal',
    size: 'md',
  },
};

export const Large: Story = {
  render: ModalTemplate,
  args: {
    title: 'Large Modal',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  render: ModalTemplate,
  args: {
    title: 'Extra Large Modal',
    size: 'xl',
  },
};

export const FullScreen: Story = {
  render: ModalTemplate,
  args: {
    title: 'Full Screen Modal',
    size: 'full',
  },
};

export const WithLongContent: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div>
            <p>This is a paragraph of text.</p>
            <p>This is another paragraph of text.</p>
            <p>This is yet another paragraph of text.</p>
            <p>This is one more paragraph of text.</p>
            <p>This is the last paragraph of text.</p>
            <div style={{ marginTop: '1rem' }}>
              <Button onClick={() => setIsOpen(false)}>Close</Button>
            </div>
          </div>
        </Modal>
      </>
    );
  },
  args: {
    title: 'Modal with Long Content',
  },
};

export const NoOverlayClick: Story = {
  render: ModalTemplate,
  args: {
    title: 'Modal Without Overlay Click',
    closeOnOverlayClick: false,
  },
};

export const NoEscClose: Story = {
  render: ModalTemplate,
  args: {
    title: 'Modal Without ESC Close',
    closeOnEsc: false,
  },
}; 