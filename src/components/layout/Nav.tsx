'use client';

import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/components/ui/NavItem';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'work', href: '/' },
  { label: 'playground', href: '/playground' },
];

const LOGO_SCROLL_THRESHOLD = 20;

function subscribeToWindowScroll(onStoreChange: () => void) {
  window.addEventListener('scroll', onStoreChange, { passive: true });
  return () => window.removeEventListener('scroll', onStoreChange);
}

function getShowLogoSnapshot() {
  return window.scrollY >= LOGO_SCROLL_THRESHOLD;
}

function getShowLogoServerSnapshot() {
  return false;
}

export function Nav() {
  const pathname = usePathname();
  const isCaseStudy = pathname.startsWith('/work/');
  const isLanding = pathname === '/';
  const isAbout = pathname === '/about';
  const isPlayground = pathname === '/playground';
  const showLogo = useSyncExternalStore(
    subscribeToWindowScroll,
    getShowLogoSnapshot,
    getShowLogoServerSnapshot,
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors duration-300 ease-out motion-reduce:transition-none',
        isPlayground && 'text-neutral-white',
        // Transparent at the top so the hero shows through; fills once scrolled.
        showLogo && isCaseStudy && 'bg-surface-light',
        showLogo && isLanding && 'bg-surface-light',
        showLogo && isAbout && 'bg-yellow-200',
        showLogo && isPlayground && 'bg-graph-paper-dark',
        showLogo && !isCaseStudy && !isLanding && !isAbout && !isPlayground && 'bg-surface',
      )}
    >
      <nav
        className={cn(
          'relative flex min-h-[var(--nav-height)] items-center gap-3 px-page py-3',
          showLogo && 'max-md:flex-wrap',
          !isCaseStudy && 'justify-end',
        )}
      >
        <Link
          href="/"
          tabIndex={showLogo ? undefined : -1}
          aria-hidden={!showLogo}
          inert={showLogo ? undefined : true}
          className={cn(
            'z-10 whitespace-nowrap',
            'font-sans text-label font-medium uppercase tracking-[var(--tracking-label)]',
            'leading-[var(--leading-label)] text-text',
            'transition-opacity duration-300 ease-out motion-reduce:transition-none',
            'md:absolute md:top-1/2 md:left-page md:-translate-y-1/2',
            showLogo
              ? 'opacity-100 max-md:mr-auto'
              : 'pointer-events-none opacity-0 max-md:hidden',
          )}
        >
          jou.design
        </Link>
        {isCaseStudy && (
          <span
            className={cn(
              'mr-auto transition-opacity duration-300 ease-out motion-reduce:transition-none',
              showLogo && 'pointer-events-none opacity-0 max-md:hidden',
            )}
            aria-hidden={showLogo}
            inert={showLogo ? true : undefined}
          >
            <NavItem label="← back" href="/" state="unselected" />
          </span>
        )}
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.href}
            label={item.label}
            href={item.href}
            state={pathname === item.href ? 'selected' : 'unselected'}
          />
        ))}
      </nav>
    </header>
  );
}
