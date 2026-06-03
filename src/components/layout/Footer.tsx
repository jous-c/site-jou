import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container>
        <p className="text-sm text-text/40">
          © {new Date().getFullYear()} jou.design
        </p>
      </Container>
    </footer>
  );
}
