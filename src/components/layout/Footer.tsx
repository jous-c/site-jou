'use client';

import { usePathname } from 'next/navigation';
import { FooterLink } from '@/components/ui/FooterLink';
import { cn } from '@/lib/utils';

const FOOTER_LINKS = [
  { label: 'CV', href: '/doc/Jou%20An%20Chen_Resume_2026_.pdf' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/jouanchen24/' },
  { label: 'twitter / X', href: 'https://x.com/jous_c' },
];

// Set at build time in next.config.ts from the last commit date.
const LAST_UPDATED = new Date(process.env.SITE_LAST_UPDATED ?? Date.now());

// Fixed time zone so server and client render the same string.
const TIME_ZONE = 'America/New_York';

function LastUpdated() {
  const formatted = LAST_UPDATED.toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    timeZone: TIME_ZONE,
  });
  const time = LAST_UPDATED.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: TIME_ZONE,
  }).replace(/\s(?=[AP]M)/, '');

  return (
    <time
      dateTime={LAST_UPDATED.toISOString()}
      className="font-sans text-body-sm leading-[var(--leading-heading)] uppercase tracking-[0.04em] text-text-secondary whitespace-nowrap"
    >
      Last updated: {formatted} {time}
    </time>
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
        'border-t border-dashed border-border-light px-page pt-[30px] pb-16 md:pb-[100px]',
        isLanding && 'bg-surface-light',
        isAbout && 'bg-yellow-200',
        isPlayground && 'bg-graph-paper-dark border-neutral-800 text-neutral-white',
        !isLanding && !isAbout && !isPlayground && 'bg-surface',
      )}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-6">
        <span className="font-sans text-body-sm font-medium uppercase tracking-[var(--tracking-label)] md:w-[280px]">
          jou.design {LAST_UPDATED.getFullYear()}
        </span>

        <div className="flex flex-wrap items-center gap-2">
          {FOOTER_LINKS.map((link) => (
            <FooterLink key={link.label} label={link.label} href={link.href} />
          ))}
        </div>

        <LastUpdated />
      </div>
    </footer>
  );
}
