import { PageWrapper } from '@/components/layout/PageWrapper';
import { Container } from '@/components/ui/Container';
import { Text } from '@/components/ui/Text';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Playground',
  description: 'Experiments and side projects.',
};

export default function PlaygroundPage() {
  return (
    <PageWrapper>
      <Container>
        <div className="flex flex-col gap-3">
          <Text as="h1" variant="display">
            Playground
          </Text>
          <Text variant="body" className="text-[var(--color-text)]/60">
            Experiments, prototypes, and side projects.
          </Text>
        </div>
      </Container>
    </PageWrapper>
  );
}
