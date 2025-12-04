'use client';

import { cn } from '@/lib/utils';
import { InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type = 'text', ...props }, ref) => {
    const inputStyles = cn(
      'w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      error
        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
        : 'border-gray-300 focus:border-[var(--color-teal)] focus:ring-[var(--color-teal)]',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      className
    );

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-2">
            {label}
          </label>
        )}
        <input ref={ref} type={type} className={inputStyles} {...props} />
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
