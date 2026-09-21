'use client';

import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/components/ui/NavItem';
import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'work', href: '/' },
  { label: 'playground', href: '/playground' },
  { label: 'about', href: '/about' },
];

const LOGO_SCROLL_THRESHOLD = 200;

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
        'sticky top-0 z-50',
        isCaseStudy && 'bg-surface-light',
        (isLanding || isAbout) && 'bg-yellow-200',
        isPlayground && 'bg-beige-900 text-neutral-white',
        !isCaseStudy && !isLanding && !isAbout && !isPlayground && 'bg-surface',
      )}
    >
      <nav
        className={cn(
          'relative flex min-h-[var(--nav-height)] items-end gap-2 px-page pt-2 pb-4',
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
            'transition-opacity duration-300 ease-out motion-reduce:transition-none',
            'md:absolute md:top-1/2 md:left-page md:-translate-y-1/2',
            showLogo
              ? 'opacity-100 max-md:mr-auto'
              : 'pointer-events-none opacity-0 max-md:hidden',
          )}
        >
          <Text as="span" variant="body-md">
            jou.design
          </Text>
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
