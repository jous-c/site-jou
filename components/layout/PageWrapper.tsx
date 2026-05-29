import { cn } from '@/lib/utils';

interface PageWrapperProps {
  className?: string;
  children: React.ReactNode;
}

export function PageWrapper({ className, children }: PageWrapperProps) {
  return (
    <main className={cn('min-h-screen py-16', className)}>
      {children}
    </main>
  );
}
