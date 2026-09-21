'use client';

import { usePathname } from 'next/navigation';
import { FooterLink } from '@/components/ui/FooterLink';
import { cn } from '@/lib/utils';

const FOOTER_LINKS = [
  { label: 'resume', href: '/doc/Jou%20An%20Chen_Resume_2026_.pdf' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/jouanchen24/' },
  { label: 'twitter', href: 'https://x.com/jous_c' },
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
    <span className="font-sans text-label uppercase text-secondary whitespace-nowrap">
      Site updated - {formatted} {time}
    </span>
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
      <div className="flex items-start justify-between border-t-dot pt-4">
        <Clock />

    

        <div className="flex items-center gap-2">
          {FOOTER_LINKS.map((link) => (
            <FooterLink key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
      </div>
    </footer>
  );
}
