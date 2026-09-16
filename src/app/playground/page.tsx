import { PlaygroundGrid } from '@/components/playground/PlaygroundGrid';
import { Text } from '@/components/ui/Text';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Playground',
  description: 'Experiments, installations, and side projects.',
};

export default function PlaygroundPage() {
  return (
    <main className="bg-beige-900 px-page pt-20 pb-20 text-neutral-white">
      <h1 className="sr-only">Playground</h1>
      <section
        className="mb-20 grid grid-cols-1 gap-x-4 lg:grid-cols-8"
        aria-labelledby="playground-intro-heading"
      >
        <div className="flex flex-col gap-3 lg:col-span-3 lg:col-start-6">
          <Text
            as="h2"
            id="playground-intro-heading"
            variant="body-md"
            className="leading-[1.1] tracking-[-0.01em] text-neutral-white"
          >
            What I make outside of work
          </Text>
          <div className="flex flex-col gap-3">
            <Text variant="label" className="font-light leading-[1.3] text-neutral-white">
              Aside from interface design, I’ve studied industrial design, built
              furniture, 3D modeled/rendered products, and built smaller. We have
              all this technology at our fingertips now, why not making something
              different?
            </Text>
            <Text variant="label" className="font-light leading-[1.3] text-neutral-white">
              circa 2019
            </Text>
          </div>
        </div>
      </section>
      <PlaygroundGrid />
    </main>
  );
}
