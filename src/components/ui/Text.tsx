import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textVariants = cva('', {
  variants: {
    variant: {
      // --- Display scale (ABC Monument Grotesk via --font-display) ---
      'display-2xl': [
        'font-display text-display-2xl  leading-[var(--leading-display)]',
        'tracking-[var(--tracking-display)] text-text not-italic',
      ],
      'display-xl': [
        'font-display text-display-xl leading-[var(--leading-display)]',
        'tracking-[var(--tracking-display)] text-text not-italic',
      ],
      'display-lg': [
        'font-display text-display-lg leading-[var(--leading-display)]',
        'tracking-[var(--tracking-display)] text-text not-italic',
      ],
      'display-md': [
        'font-display text-display-md leading-[var(--leading-display)]',
        'tracking-[var(--tracking-display)] text-text not-italic',
      ],
      'display-sm': [
        'font-display text-display-sm font-normal leading-[var(--leading-display)]',
        'tracking-[var(--tracking-display-sm)] text-text not-italic',
      ],

      // --- Body scale (ABC Monument Grotesk via --font-body) ---
      'body-lg': [
        'font-sans text-body-lg font-normal leading-[var(--leading-body-lg)]',
        'text-text',
      ],
      body: [
        'font-sans text-body font-normal leading-[var(--leading-body)]',
        'text-text',
      ],
      'body-md': [
        'font-sans text-body font-medium leading-[var(--leading-display)]',
        'text-text',
      ],
      'body-sm': [
        'font-sans text-body-sm font-normal',
        'text-text',
      ],

      // --- Label (ABC Monument Grotesk — uppercase, tracked) ---
      label: [
        'font-sans text-label font-medium uppercase',
        'tracking-[var(--tracking-label)] leading-[var(--leading-label)]',
        'text-text-secondary',
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
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Text({ as: Tag = 'p', variant, className, children, id }: TextProps) {
  return (
    <Tag id={id} className={cn(textVariants({ variant }), className)}>
      {children}
    </Tag>
  );
}
