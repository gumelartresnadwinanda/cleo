import React, { forwardRef } from 'react';
import './Input.css';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputVariant = 'outlined' | 'filled' | 'flushed';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** The label text to display above the input */
  label?: string;
  /** Whether the input is in an error state */
  error?: boolean;
  /** Helper text to display below the input */
  helperText?: string;
  /** The size of the input */
  size?: InputSize;
  /** The visual variant of the input */
  variant?: InputVariant;
  /** Whether the input should take up the full width of its container */
  fullWidth?: boolean;
  /** Element to display on the left side of the input */
  leftElement?: React.ReactNode;
  /** Element to display on the right side of the input */
  rightElement?: React.ReactNode;
  /** Additional CSS classes to apply to the input */
  className?: string;
}

/**
 * A customizable input component that supports various styles and states.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Input label="Username" placeholder="Enter your username" />
 * 
 * // With error state
 * <Input
 *   label="Email"
 *   type="email"
 *   error
 *   helperText="Please enter a valid email address"
 * />
 * 
 * // With left and right elements
 * <Input
 *   leftElement={<Icon name="search" />}
 *   rightElement={<Icon name="close" />}
 *   placeholder="Search..."
 * />
 * ```
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftElement,
      rightElement,
      size = 'md',
      variant = 'outlined',
      fullWidth = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClass = 'cleo-input';
    const sizeClass = `cleo-input--${size}`;
    const variantClass = `cleo-input--${variant}`;
    const widthClass = fullWidth ? 'cleo-input--full-width' : '';
    const errorClass = error ? 'cleo-input--error' : '';
    const disabledClass = disabled ? 'cleo-input--disabled' : '';

    return (
      <div className={`${baseClass}-wrapper ${widthClass}`}>
        {label && <label className="cleo-input__label">{label}</label>}
        <div className={`${baseClass}-container`}>
          {leftElement && <div className="cleo-input__left-element">{leftElement}</div>}
          <input
            ref={ref}
            className={`${baseClass} ${sizeClass} ${variantClass} ${errorClass} ${disabledClass} ${className}`}
            disabled={disabled}
            {...props}
          />
          {rightElement && <div className="cleo-input__right-element">{rightElement}</div>}
        </div>
        {(error || helperText) && (
          <div className={`cleo-input__helper-text ${error ? 'cleo-input__helper-text--error' : ''}`}>
            {error || helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 