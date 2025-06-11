import React, { useEffect, useRef } from 'react';
import './Modal.css';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: ModalSize;
  showCloseButton?: boolean;
  closeOnEsc?: boolean;
  closeOnOverlayClick?: boolean;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnEsc = true,
  closeOnOverlayClick = true,
  className = '',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, closeOnEsc]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cleo-modal-overlay" onClick={handleOverlayClick}>
      <div
        ref={modalRef}
        className={`cleo-modal ${`cleo-modal--${size}`} ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        <div className="cleo-modal__header">
          {title && (
            <h2 id="modal-title" className="cleo-modal__title">
              {title}
            </h2>
          )}
          {showCloseButton && (
            <button
              className="cleo-modal__close-button"
              onClick={onClose}
              aria-label="Close modal"
            >
              ×
            </button>
          )}
        </div>
        <div className="cleo-modal__content">{children}</div>
      </div>
    </div>
  );
};

export default Modal; 