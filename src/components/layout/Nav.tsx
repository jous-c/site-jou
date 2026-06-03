'use client';

import { usePathname } from 'next/navigation';
import { NavItem } from '@/components/ui/NavItem';

const NAV_ITEMS = [
  { label: 'work', href: '/' },
  { label: 'playground', href: '/playground' },
  { label: 'writings', href: '/writings' },
  { label: 'about', href: '/about' },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-surface">
      <nav className="flex items-end justify-end gap-3 px-7 pt-6 pb-4">
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
