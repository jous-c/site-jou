import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-sm">
      <Container>
        <nav className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold text-text hover:text-accent"
          >
            jou.design
          </Link>
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/"
                className="text-sm text-text/60 hover:text-text"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/playground"
                className="text-sm text-text/60 hover:text-text"
              >
                Playground
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm text-text/60 hover:text-text"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
