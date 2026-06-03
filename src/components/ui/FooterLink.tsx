import { cn } from '@/lib/utils';

interface FooterLinkProps {
  label: string;
  href: string;
  className?: string;
}

export function FooterLink({ label, href, className }: FooterLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center rounded-sm',
        'font-sans text-label font-medium uppercase',
        'tracking-[var(--tracking-label)] leading-[var(--leading-label)]',
        'text-text',
        className
      )}
    >
      {label}
    </a>
  );
}
