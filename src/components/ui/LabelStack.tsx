import { cn } from '@/lib/utils';
import { Text } from './Text';

interface LabelStackProps {
  label: string;
  value: string;
  className?: string;
  labelClassName?: string;
  valueClassName?: string;
}

export function LabelStack({ label, value, className, labelClassName, valueClassName }: LabelStackProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Text variant="label" className={labelClassName}>{label}</Text>
      <Text variant="body" className={cn('leading-[1.2]', valueClassName)}>{value}</Text>
    </div>
  );
}
