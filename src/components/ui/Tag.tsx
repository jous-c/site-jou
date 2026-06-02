import { cn } from '@/lib/utils';

interface TagProps {
  label: string;
  className?: string;
}

export function Tag({ label, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[var(--radius-tag)] px-2.5 py-0.5',
        'font-sans text-label font-medium uppercase tracking-[var(--tracking-label)]',
        'bg-[var(--color-accent)] text-[var(--color-text)]',
        className
      )}
    >
      {label}
    </span>
  );
}
