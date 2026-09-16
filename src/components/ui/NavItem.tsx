import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const navItemVariants = cva(
  [
    'inline-flex items-center justify-center rounded-sm px-1 py-px',
    'font-sans text-label font-medium border border-dotted border-border uppercase tracking-[var(--tracking-label)]',
    'leading-[var(--leading-label)] text-text',
    'transition-colors duration-200 ease-in',
  ],
  {
    variants: {
      state: {
        selected: 'bg-accent border border-dotted border-border text-neutral-black',
        unselected: 'bg-transparent border border-border hover:bg-accent hover:text-neutral-black',
        hover: 'bg-accent text-neutral-black',
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
