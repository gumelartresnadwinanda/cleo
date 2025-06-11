import React from 'react';
import './Icon.css';

/** Available icon names in the component library */
export type IconName = 'search' | 'calendar' | 'chevron-down' | 'chevron-up' | 'check' | 'close';

export interface IconProps {
  /** The name of the icon to display */
  name: IconName;
  /** The size of the icon */
  size?: 'sm' | 'md' | 'lg';
  /** The color of the icon (can be any valid CSS color) */
  color?: string;
  /** Additional CSS classes to apply to the icon */
  className?: string;
}

/**
 * A reusable icon component that renders SVG icons.
 * 
 * @example
 * ```tsx
 * <Icon name="search" size="md" color="#3b82f6" />
 * ```
 */
const Icon: React.FC<IconProps> = ({ name, size = 'md', color, className = '' }) => {
  const getIconPath = (iconName: IconName): string => {
    switch (iconName) {
      case 'search':
        return 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z';
      case 'calendar':
        return 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z';
      case 'chevron-down':
        return 'M19 9l-7 7-7-7';
      case 'chevron-up':
        return 'M5 15l7-7 7 7';
      case 'check':
        return 'M5 13l4 4L19 7';
      case 'close':
        return 'M6 18L18 6M6 6l12 12';
      default:
        return '';
    }
  };

  return (
    <svg
      className={`cleo-icon cleo-icon--${size} ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={getIconPath(name)} />
    </svg>
  );
};

export default Icon; 