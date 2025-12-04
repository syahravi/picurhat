import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, padding = 'md', hover = false, children, ...props }, ref) => {
    const baseStyles = 'bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] transition-all duration-200';

    const paddingStyles = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };

    const hoverStyles = hover ? 'hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1' : '';

    const combinedClassName = cn(
      baseStyles,
      paddingStyles[padding],
      hoverStyles,
      className
    );

    return (
      <div ref={ref} className={combinedClassName} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };
