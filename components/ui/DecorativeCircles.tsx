import { cn } from '@/lib/utils';

interface DecorativeCirclesProps {
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export function DecorativeCircles({ className, position = 'top-left' }: DecorativeCirclesProps) {
  const positionStyles = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  };

  return (
    <div className={cn('absolute pointer-events-none overflow-hidden', positionStyles[position], className)}>
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Large teal circle */}
        <circle cx="50" cy="50" r="60" fill="var(--color-teal)" opacity="0.6" />

        {/* Medium blue-gray circle */}
        <circle cx="140" cy="80" r="40" fill="var(--color-blue-gray)" opacity="0.5" />

        {/* Small coral circle */}
        <circle cx="100" cy="150" r="25" fill="var(--color-coral)" opacity="0.4" />

        {/* Outline circle */}
        <circle cx="160" cy="150" r="30" stroke="var(--color-teal)" strokeWidth="2" fill="none" opacity="0.3" />

        {/* Extra small teal circle */}
        <circle cx="30" cy="140" r="15" fill="var(--color-teal)" opacity="0.5" />
      </svg>
    </div>
  );
}

export function DecorativeCirclesPattern({ className }: { className?: string }) {
  return (
    <div className={cn('absolute inset-0 pointer-events-none overflow-hidden', className)}>
      {/* Top left pattern */}
      <div className="absolute -top-20 -left-20 opacity-30">
        <svg width="250" height="250" viewBox="0 0 250 250" fill="none">
          <circle cx="125" cy="125" r="100" fill="var(--color-teal)" opacity="0.3" />
          <circle cx="80" cy="80" r="50" fill="var(--color-blue-gray)" opacity="0.4" />
          <circle cx="170" cy="100" r="35" fill="var(--color-coral)" opacity="0.3" />
        </svg>
      </div>

      {/* Bottom right pattern */}
      <div className="absolute -bottom-20 -right-20 opacity-30">
        <svg width="250" height="250" viewBox="0 0 250 250" fill="none">
          <circle cx="125" cy="125" r="90" fill="var(--color-blue-gray)" opacity="0.3" />
          <circle cx="180" cy="180" r="60" fill="var(--color-teal)" opacity="0.4" />
          <circle cx="100" cy="170" r="40" stroke="var(--color-coral)" strokeWidth="3" fill="none" opacity="0.5" />
        </svg>
      </div>

      {/* Floating circles */}
      <div className="absolute top-1/4 right-1/4 opacity-20">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="30" fill="var(--color-coral)" />
        </svg>
      </div>

      <div className="absolute bottom-1/3 left-1/4 opacity-15">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="25" stroke="var(--color-teal)" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </div>
  );
}
