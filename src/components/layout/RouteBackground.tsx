'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function RouteBackground({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLanding = pathname === '/';
  const isPlayground = pathname === '/playground';

  return (
    <div
      className={cn(
        'min-h-dvh',
        isLanding && 'bg-yellow-200',
        isPlayground &&
          'bg-beige-900 text-neutral-white [--color-text:var(--neutral-white)]',
        !isLanding && !isPlayground && 'bg-surface',
      )}
    >
      {children}
    </div>
  );
}
