import React, { useState, useRef, useEffect } from 'react';
import Icon from '../Icon/Icon';
import './Select.css';

export type SelectSize = 'sm' | 'md' | 'lg';
export type SelectVariant = 'outlined' | 'filled' | 'flushed';

export interface SelectOption {
  /** The value of the option */
  value: string;
  /** The label to display for the option */
  label: string;
  /** Whether the option is disabled */
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** The label text to display above the select */
  label?: string;
  /** Whether the select is in an error state */
  error?: boolean;
  /** Helper text to display below the select */
  helperText?: string;
  /** Array of options to display in the dropdown */
  options: SelectOption[];
  /** The size of the select */
  size?: SelectSize;
  /** The visual variant of the select */
  variant?: SelectVariant;
  /** Whether the select should take up the full width of its container */
  fullWidth?: boolean;
  /** Element to display on the left side of the select */
  leftElement?: React.ReactNode;
  /** Element to display on the right side of the select */
  rightElement?: React.ReactNode;
  /** Placeholder text to display when no option is selected */
  placeholder?: string;
}

/**
 * A custom select component that provides a dropdown interface for selecting options.
 * 
 * @example
 * ```tsx
 * <Select
 *   label="Select an option"
 *   options={[
 *     { value: '1', label: 'Option 1' },
 *     { value: '2', label: 'Option 2' }
 *   ]}
 *   placeholder="Choose an option"
 * />
 * ```
 */
const Select: React.FC<SelectProps> = ({
  label,
  error,
  helperText,
  options,
  size = 'md',
  variant = 'outlined',
  fullWidth = false,
  leftElement,
  rightElement,
  placeholder,
  disabled,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<string>('');
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option: SelectOption) => {
    if (option.disabled) return;
    setSelectedLabel(option.label);
    setIsOpen(false);
    if (props.onChange) {
      props.onChange({
        target: { value: option.value },
      } as React.ChangeEvent<HTMLSelectElement>);
    }
  };

  const wrapperClasses = [
    'cleo-select-wrapper',
    fullWidth ? 'cleo-select-wrapper--full-width' : '',
  ].join(' ');

  const selectClasses = [
    'cleo-select',
    `cleo-select--${size}`,
    `cleo-select--${variant}`,
    error ? 'cleo-select--error' : '',
    disabled ? 'cleo-select--disabled' : '',
    isOpen ? 'cleo-select--open' : '',
    className,
  ].join(' ');

  return (
    <div className={wrapperClasses}>
      {label && <label className="cleo-select__label">{label}</label>}
      <div className="cleo-select-container" ref={selectRef}>
        {leftElement && <div className="cleo-select__left-element">{leftElement}</div>}
        <div
          className={selectClasses}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          role="button"
          tabIndex={0}
        >
          {selectedLabel || placeholder}
          <Icon name="chevron-down" className="cleo-select__arrow" />
        </div>
        {rightElement && <div className="cleo-select__right-element">{rightElement}</div>}
        {isOpen && (
          <div className="cleo-select__options">
            {options.map((option) => (
              <div
                key={option.value}
                className={`cleo-select__option ${option.disabled ? 'cleo-select__option--disabled' : ''}`}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {helperText && (
        <div className={`cleo-select__helper-text ${error ? 'cleo-select__helper-text--error' : ''}`}>
          {helperText}
        </div>
      )}
    </div>
  );
};

export default Select; 