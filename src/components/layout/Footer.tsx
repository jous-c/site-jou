'use client';

import { usePathname } from 'next/navigation';
import { FooterLink } from '@/components/ui/FooterLink';
import { cn } from '@/lib/utils';

const FOOTER_LINKS = [
  { label: 'resume', href: '#' },
  { label: 'linkedin', href: 'https://linkedin.com' },
  { label: 'twitter', href: 'https://twitter.com' },
  { label: 'are.na', href: 'https://are.na' },
];

function Clock() {
  const now = new Date();
  const formatted = now.toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });
  const time = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  return (
    <div className="flex items-start gap-2">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className="shrink-0"
        aria-hidden="true"
      >
        <circle cx="6" cy="6" r="5.5" stroke="currentColor" />
        <path d="M6 3V6L8 8" stroke="currentColor" strokeLinecap="round" />
      </svg>
      <span className="font-sans text-label text-secondary whitespace-nowrap">
        Site updated - {formatted} {time}
      </span>
    </div>
  );
}

export function Footer() {
  const pathname = usePathname();
  const isLanding = pathname === '/';
  const isAbout = pathname === '/about';
  const isPlayground = pathname === '/playground';

  return (
    <footer
      className={cn(
        'px-page pt-28 pb-4',
        (isLanding || isAbout) && 'bg-yellow-200',
        isPlayground && 'bg-beige-900 text-neutral-white',
        !isLanding && !isAbout && !isPlayground && 'bg-surface',
      )}
    >
      <div className="flex items-start justify-between pt-4 ">
        <Clock />

    

        <div className="flex items-center gap-5">
          {FOOTER_LINKS.map((link) => (
            <FooterLink key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
      </div>
    </footer>
  );
}
