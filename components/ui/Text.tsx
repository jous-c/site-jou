import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textVariants = cva('', {
  variants: {
    variant: {
      display: 'text-4xl font-semibold tracking-tight text-[var(--color-text)]',
      heading: 'text-2xl font-semibold tracking-tight text-[var(--color-text)]',
      subheading: 'text-xl font-medium text-[var(--color-text)]',
      body: 'text-base text-[var(--color-text)]',
      caption: 'text-sm text-[var(--color-text)]/60',
      label: 'text-xs font-medium uppercase tracking-wider text-[var(--color-text)]/50',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'small';

interface TextProps extends VariantProps<typeof textVariants> {
  as?: TextElement;
  className?: string;
  children: React.ReactNode;
}

export function Text({ as: Tag = 'p', variant, className, children }: TextProps) {
  return <Tag className={cn(textVariants({ variant }), className)}>{children}</Tag>;
}
