import { cn } from '@/lib/utils';

interface TagProps {
  label: string;
  className?: string;
}

export function Tag({ label, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        'bg-[var(--color-border)]/30 text-[var(--color-text)]/70',
        className
      )}
    >
      {label}
    </span>
  );
}
