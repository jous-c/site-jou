import { Container } from '@/components/ui/Container';

export default function CaseStudyLoading() {
  return (
    <div className="min-h-screen py-16">
      <div className="mb-12 aspect-[21/9] w-full animate-pulse bg-[var(--color-border)]/20" />
      <Container>
        <div className="flex flex-col gap-4">
          <div className="h-4 w-24 animate-pulse rounded bg-[var(--color-border)]/20" />
          <div className="h-10 w-2/3 animate-pulse rounded bg-[var(--color-border)]/20" />
          <div className="h-4 w-full animate-pulse rounded bg-[var(--color-border)]/20" />
          <div className="h-4 w-4/5 animate-pulse rounded bg-[var(--color-border)]/20" />
        </div>
      </Container>
    </div>
  );
}
