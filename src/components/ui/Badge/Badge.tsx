import React from 'react';
import './Badge.css';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  /** The content to display in the badge */
  children: React.ReactNode;
  /** The visual variant of the badge */
  variant?: BadgeVariant;
  /** The size of the badge */
  size?: BadgeSize;
  /** Whether the badge should be rounded */
  rounded?: boolean;
  /** Whether the badge should be outlined */
  outlined?: boolean;
  /** Whether the badge should be filled */
  filled?: boolean;
  /** The count to display in the badge (for notification badges) */
  count?: number;
  /** Additional CSS classes to apply to the badge */
  className?: string;
  /** Whether to show a dot instead of a count */
  dot?: boolean;
  /** Maximum count to display before showing + */
  maxCount?: number;
  /** Whether to show zero count */
  showZero?: boolean;
}

/**
 * A badge component that can be used to display status, notifications, or labels.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Badge>New</Badge>
 * 
 * // With variant and count
 * <Badge variant="primary" count={5}>Notifications</Badge>
 * 
 * // Outlined badge
 * <Badge variant="success" outlined>Completed</Badge>
 * ```
 */
const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  rounded = false,
  outlined = false,
  className = '',
  dot = false,
  count,
  maxCount = 99,
  showZero = false,
}) => {
  const baseClass = 'cleo-badge';
  const variantClass = `cleo-badge--${variant}`;
  const sizeClass = `cleo-badge--${size}`;
  const roundedClass = rounded ? 'cleo-badge--rounded' : '';
  const outlinedClass = outlined ? 'cleo-badge--outlined' : '';
  const dotClass = dot ? 'cleo-badge--dot' : '';

  const renderCount = () => {
    if (dot) return null;
    if (count === undefined) return null;
    if (count === 0 && !showZero) return null;

    const displayCount = count > maxCount ? `${maxCount}+` : count;
    return <span className="cleo-badge__count">{displayCount}</span>;
  };

  return (
    <div 
      className={`${baseClass} ${variantClass} ${sizeClass} ${roundedClass} ${outlinedClass} ${dotClass} ${className}`}
    >
      {children}
      {renderCount()}
    </div>
  );
};

export default Badge; 