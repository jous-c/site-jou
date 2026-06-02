'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';
import { Container } from '@/components/ui/Container';

interface PasswordGateProps {
  slug: string;
}

export function PasswordGate({ slug }: PasswordGateProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);

    // Password validation happens server-side; here we set the cookie
    // and reload so the server can re-render with the unlocked content.
    document.cookie = `unlocked-${slug}=${slug}; path=/; max-age=86400`;
    router.refresh();
  }

  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <Text as="h1" variant="display-4">
            This case study is password protected
          </Text>
          <Text variant="body-sm" className="text-[var(--color-text-secondary)]">Enter the password to view NDA work.</Text>
        </div>
        <form onSubmit={handleSubmit} className="flex w-full max-w-sm flex-col gap-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="h-10 w-full rounded-[var(--radius-sm)] border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] px-3 text-body-sm text-[var(--color-text)] outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          />
          {error && (
            <Text variant="body-sm" className="text-red-500">
              Incorrect password. Try again.
            </Text>
          )}
          <Button type="submit" variant="primary">
            Unlock
          </Button>
        </form>
      </div>
    </Container>
  );
}
