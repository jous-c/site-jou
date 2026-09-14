import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CaseStudyGridProps {
  as?: 'div' | 'section';
  className?: string;
  children: ReactNode;
}

export function CaseStudyGrid({ as: Tag = 'div', className, children }: CaseStudyGridProps) {
  return (
    <Tag
      className={cn(
        'grid grid-cols-1 px-6 md:px-page',
        'lg:grid lg:grid-cols-[max-content_max-content_minmax(0,1fr)] lg:gap-10',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
