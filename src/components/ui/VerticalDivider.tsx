import { cn } from '@/lib/utils';

interface VerticalDividerProps {
  className?: string;
}

export function VerticalDivider({ className }: VerticalDividerProps) {
  return (
    <div className={cn('divider-dot-v', className)} />
  );
}
