import React from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual variant of the button */
  variant?: ButtonVariant;
  /** The size of the button */
  size?: ButtonSize;
  /** Whether the button should be outlined */
  outlined?: boolean;
  /** Whether the button should be filled */
  filled?: boolean;
  /** Whether the button should be rounded */
  rounded?: boolean;
  /** Whether the button should take up the full width of its container */
  fullWidth?: boolean;
  /** The type of the button */
  type?: ButtonType;
  /** Whether the button is in a loading state */
  loading?: boolean;
  /** The icon to display on the left side of the button */
  leftIcon?: React.ReactNode;
  /** The icon to display on the right side of the button */
  rightIcon?: React.ReactNode;
  /** Additional CSS classes to apply to the button */
  className?: string;
}

/**
 * A versatile button component that supports various styles and states.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Button>Click me</Button>
 * 
 * // With variant and size
 * <Button variant="primary" size="lg">Large Primary Button</Button>
 * 
 * // With icons
 * <Button leftIcon={<Icon name="search" />}>Search</Button>
 * 
 * // Loading state
 * <Button loading>Loading...</Button>
 * ```
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  outlined = false,
  filled = false,
  rounded = false,
  fullWidth = false,
  type = 'button',
  loading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const buttonClasses = [
    'cleo-button',
    `cleo-button--${variant}`,
    `cleo-button--${size}`,
    outlined ? 'cleo-button--outlined' : '',
    filled ? 'cleo-button--filled' : '',
    rounded ? 'cleo-button--rounded' : '',
    fullWidth ? 'cleo-button--full-width' : '',
    loading ? 'cleo-button--loading' : '',
    disabled ? 'cleo-button--disabled' : '',
    className,
  ].join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="cleo-button__loader" />}
      {leftIcon && <span className="cleo-button__left-icon">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="cleo-button__right-icon">{rightIcon}</span>}
    </button>
  );
};

export default Button; 