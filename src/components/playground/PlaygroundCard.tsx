import Image from 'next/image';
import { Text } from '@/components/ui/Text';
import { cn, isVideoSrc } from '@/lib/utils';
import type { PlaygroundColSpan, PlaygroundItem } from '@/lib/playground';

const colSpanClass: Record<PlaygroundColSpan, string> = {
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
  4: 'lg:col-span-4',
};

interface PlaygroundCardProps {
  item: PlaygroundItem;
  priority?: boolean;
}

export function PlaygroundCard({ item, priority = false }: PlaygroundCardProps) {
  const sizes = `(max-width: 1023px) 100vw, ${(item.colSpan / 8) * 100}vw`;

  return (
    <article className={cn('flex flex-col gap-3', colSpanClass[item.colSpan])}>
      <div
        className="relative w-full overflow-hidden rounded-sm"
        style={{ aspectRatio: item.aspect }}
      >
        {isVideoSrc(item.src) ? (
          <video
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={item.alt}
            className="absolute inset-0 size-full object-cover"
          />
        ) : (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-0.5">
          <Text as="h2" variant="body" className="leading-[1.1] tracking-[-0.01em] text-neutral-white">
            {item.title}
          </Text>
          <div className="flex flex-col">
            <Text variant="body-sm" className="leading-[1.1] font-light text-neutral-400">
              {item.description}
            </Text>
            {item.tools && (
              <Text variant="body-sm" className="leading-[1.1] text-neutral-400">
                {item.tools}
              </Text>
            )}
          </div>
        </div>
        <Text variant="body-sm" className="text-label leading-[1.1] tracking-[-0.01em] text-neutral-400">
          {item.year}
        </Text>
      </div>
    </article>
  );
}
