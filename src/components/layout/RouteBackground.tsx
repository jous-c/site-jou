'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function RouteBackground({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLanding = pathname === '/';

  return (
    <div className={cn('min-h-dvh', isLanding ? 'bg-yellow-200' : 'bg-surface')}>
      {children}
    </div>
  );
}
