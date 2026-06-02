import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textVariants = cva('', {
  variants: {
    variant: {
      // --- Display scale (PP Woodland — swap font-display once loaded) ---
      'display-1': [
        'font-display text-display-1 leading-[var(--leading-display)]',
        'text-[var(--color-text)] not-italic',
      ],
      'display-2': [
        'font-display text-display-2 leading-[var(--leading-display)]',
        'text-[var(--color-text)] not-italic',
      ],
      'display-3': [
        'font-display text-display-3 leading-[var(--leading-display)]',
        'text-[var(--color-text)] not-italic',
      ],
      'display-4': [
        'font-display text-display-4 leading-[var(--leading-display)]',
        'tracking-[var(--tracking-display-4)] text-[var(--color-text)] not-italic',
      ],

      // --- Body scale (Geist) ---
      'body-lg': [
        'font-sans text-body-lg font-normal leading-[var(--leading-body-lg)]',
        'text-[var(--color-text)]',
      ],
      body: [
        'font-sans text-body font-normal leading-[var(--leading-body)]',
        'text-[var(--color-text)]',
      ],
      'body-md': [
        'font-sans text-body font-medium leading-[var(--leading-display)]',
        'text-[var(--color-text)]',
      ],
      'body-sm': [
        'font-sans text-body-sm font-normal',
        'text-[var(--color-text)]',
      ],

      // --- Label (Geist — uppercase, tracked) ---
      label: [
        'font-sans text-label font-medium uppercase',
        'tracking-[var(--tracking-label)] leading-[var(--leading-label)]',
        'text-[var(--color-text-secondary)]',
      ],
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
  return (
    <Tag className={cn(textVariants({ variant }), className)}>
      {children}
    </Tag>
  );
}
