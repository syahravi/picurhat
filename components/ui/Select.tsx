'use client';

import { cn } from '@/lib/utils';
import { SelectHTMLAttributes, forwardRef } from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Array<{ value: string; label: string }>;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, ...props }, ref) => {
    const selectStyles = cn(
      'w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'bg-white appearance-none cursor-pointer',
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
        <div className="relative">
          <select ref={ref} className={selectStyles} {...props}>
            <option value="">Pilih...</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export { Select };
