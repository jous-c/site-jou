import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center font-sans font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]',
    'disabled:pointer-events-none disabled:opacity-50',
    'rounded-[var(--radius-sm)]',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-[var(--color-accent)] text-[var(--color-text)]',
          'hover:bg-[var(--color-accent)]/80',
        ],
        secondary: [
          'bg-[var(--color-surface)] border border-dashed border-[var(--color-border)]',
          'text-[var(--color-text)] hover:bg-[var(--color-border)]/20',
        ],
        ghost: [
          'text-[var(--color-text)] hover:bg-[var(--color-border)]/20',
        ],
      },
      size: {
        sm: 'h-8 px-3 text-body-sm',
        md: 'h-10 px-4 text-body-sm',
        lg: 'h-12 px-6 text-body',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
