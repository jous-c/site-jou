import { cn } from '@/lib/utils';

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <hr className={cn('border-dashed border-[var(--color-border)]', className)} />
  );
}
