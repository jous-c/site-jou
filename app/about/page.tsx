import { PageWrapper } from '@/components/layout/PageWrapper';
import { Container } from '@/components/ui/Container';
import { Text } from '@/components/ui/Text';
import { Divider } from '@/components/ui/Divider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About the designer behind jou.design.',
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <Container>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <Text as="h1" variant="display">
              About
            </Text>
          </div>
          <Divider />
          <Text variant="body" className="max-w-2xl text-[var(--color-text)]/70">
            Product designer with a focus on systems thinking, clarity, and craft.
          </Text>
        </div>
      </Container>
    </PageWrapper>
  );
}
