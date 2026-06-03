import { cn } from '@/lib/utils';

interface TagProps {
  label: string;
  className?: string;
}

export function Tag({ label, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex w-fit items-center rounded-tag px-2.5 py-0.5',
        'font-sans text-label font-medium uppercase tracking-[var(--tracking-label)]',
        'bg-tag-bg text-text',
        className
      )}
    >
      {label}
    </span>
  );
}
