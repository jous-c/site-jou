import { cn } from '@/lib/utils';

interface VerticalDividerProps {
  className?: string;
}

export function VerticalDivider({ className }: VerticalDividerProps) {
  return (
    <div className={cn('w-px self-stretch border-l border-dashed border-border', className)} />
  );
}
