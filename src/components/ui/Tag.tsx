import { cn } from '@/lib/utils';

interface TagProps {
  label: string;
  className?: string;
}

export function Tag({ label, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex w-fit items-center',
        'font-sans color-text--secondary',
        'text-text',
        className
      )}
    >
      {label}
    </span>
  );
}
