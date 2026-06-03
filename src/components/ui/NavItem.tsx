import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const navItemVariants = cva(
  [
    'inline-flex items-center justify-center rounded-sm px-0.5 py-px',
    'font-sans text-label font-medium uppercase tracking-[var(--tracking-label)]',
    'leading-[var(--leading-label)] text-text',
    'transition-colors duration-200 ease-in',
  ],
  {
    variants: {
      state: {
        selected: 'bg-accent',
        unselected: 'bg-surface border border-dashed border-border hover:bg-accent/40',
        hover: 'bg-accent',
      },
    },
    defaultVariants: {
      state: 'unselected',
    },
  }
);

interface NavItemProps extends VariantProps<typeof navItemVariants> {
  label: string;
  href: string;
  className?: string;
}

export function NavItem({ label, href, state, className }: NavItemProps) {
  return (
    <Link href={href} className={cn(navItemVariants({ state }), className)}>
      {label}
    </Link>
  );
}
