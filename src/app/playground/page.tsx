import { PlaygroundGrid } from '@/components/playground/PlaygroundGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Playground',
  description: 'Experiments, installations, and side projects.',
};

export default function PlaygroundPage() {
  return (
    <main className="px-page pt-20 pb-20">
      <h1 className="sr-only">Playground</h1>
      <PlaygroundGrid />
    </main>
  );
}
