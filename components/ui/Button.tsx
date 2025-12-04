'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asLink = false, href, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles = {
      primary: 'bg-[var(--color-teal)] text-white hover:bg-[var(--color-teal-dark)] focus:ring-[var(--color-teal)]',
      secondary: 'bg-[var(--color-coral)] text-white hover:bg-[var(--color-coral-dark)] focus:ring-[var(--color-coral)]',
      outline: 'border-2 border-[var(--color-teal)] text-[var(--color-teal)] hover:bg-[var(--color-teal)] hover:text-white focus:ring-[var(--color-teal)]',
    };

    const sizeStyles = {
      sm: 'text-sm px-4 py-2',
      md: 'text-base px-6 py-3',
      lg: 'text-lg px-8 py-4',
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (asLink && href) {
      return (
        <a href={href} className={combinedClassName}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
