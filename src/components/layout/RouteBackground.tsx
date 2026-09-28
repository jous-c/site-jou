'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function RouteBackground({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLanding = pathname === '/';
  const isAbout = pathname === '/about';
  const isPlayground = pathname === '/playground';

  return (
    <div
      className={cn(
        'min-h-dvh',
        isLanding && 'bg-graph-paper',
        isAbout && 'bg-yellow-200',
        isPlayground &&
          'bg-graph-paper-dark text-neutral-white [--color-text:var(--neutral-white)]',
        !isLanding && !isAbout && !isPlayground && 'bg-surface',
      )}
    >
      {children}
    </div>
  );
}
