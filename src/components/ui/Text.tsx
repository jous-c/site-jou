import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textVariants = cva('', {
  variants: {
    variant: {
      // --- Heading scale (ABC Monument Grotesk via --font-display) ---
      heading1: [
        'font-display text-heading1 leading-[var(--leading-heading)]',
        'tracking-[var(--tracking-heading)] text-text not-italic',
      ],
      heading2: [
        'font-display text-heading2 leading-[var(--leading-heading)]',
        'tracking-[var(--tracking-heading)] text-text not-italic',
      ],
      heading3: [
        'font-display text-heading3 leading-[var(--leading-heading)]',
        'tracking-[var(--tracking-heading)] text-text not-italic',
      ],
      heading4: [
        'font-display text-heading4 leading-[var(--leading-heading)]',
        'tracking-[var(--tracking-heading)] text-text not-italic',
      ],
      heading5: [
        'font-display text-heading5 font-normal leading-[var(--leading-heading)]',
        'tracking-[var(--tracking-heading-sm)] text-text not-italic',
      ],
      heading6: [
        'font-display text-heading6 font-normal leading-[var(--leading-heading)]',
        'tracking-[var(--tracking-heading-sm)] text-text not-italic',
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
        'font-sans text-body font-medium leading-[var(--leading-heading)]',
        'text-text',
      ],
      'body-sm': [
        'font-sans text-body-sm font-normal',
        'text-text',
      ],

      // --- Label (ABC Monument Grotesk — uppercase, tracked) ---
      label: [
        'font-sans text-label uppercase',
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
