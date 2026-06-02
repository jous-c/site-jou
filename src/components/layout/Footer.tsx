import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <Container>
        <p className="text-sm text-[var(--color-text)]/40">
          © {new Date().getFullYear()} jou.design
        </p>
      </Container>
    </footer>
  );
}
