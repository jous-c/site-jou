'use client';

import { useEffect, useRef, useState } from 'react';
import { Text } from '@/components/ui/Text';

interface TypeSpecimenProps {
  name: string;
  token?: string;
  usage: string;
  children: React.ReactNode;
}

interface Measured {
  family: string;
  size: string;
  weight: string;
  lineHeight: string;
  letterSpacing: string;
  transform: string;
}

const WEIGHT_NAMES: Record<string, string> = {
  '300': 'Light',
  '400': 'Regular',
  '500': 'Medium',
  '600': 'Semibold',
  '700': 'Bold',
};

function friendlyFamily(stack: string): string {
  if (/woodland/i.test(stack)) return 'PP Woodland';
  if (/monument/i.test(stack)) return 'ABC Monument Grotesk';
  if (/geist.?mono/i.test(stack)) return 'Geist Mono';
  if (/geist/i.test(stack)) return 'Geist';
  return stack.split(',')[0].replace(/['"]/g, '').trim();
}

const round = (n: number, places = 2) => Number(n.toFixed(places)).toString();

function measure(el: Element): Measured {
  const style = getComputedStyle(el);
  const px = parseFloat(style.fontSize);

  const lineHeight =
    style.lineHeight === 'normal'
      ? 'normal (browser default)'
      : `${round(parseFloat(style.lineHeight))}px · ${round(parseFloat(style.lineHeight) / px)}`;

  const tracking =
    style.letterSpacing === 'normal' || parseFloat(style.letterSpacing) === 0
      ? '0'
      : `${round(parseFloat(style.letterSpacing) / px, 3)}em · ${round(parseFloat(style.letterSpacing))}px`;

  return {
    family: friendlyFamily(style.fontFamily),
    size: `${round(px)}px · ${round(px / 16, 4)}rem`,
    weight: `${style.fontWeight} ${WEIGHT_NAMES[style.fontWeight] ?? ''}`.trim(),
    lineHeight,
    letterSpacing: tracking,
    transform: style.textTransform === 'none' ? 'none' : style.textTransform,
  };
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b-dot py-2">
      <Text as="span" variant="label">{label}</Text>
      <Text as="span" variant="body-sm" className="text-right tabular-nums">
        {value}
      </Text>
    </div>
  );
}

export function TypeSpecimen({ name, token, usage, children }: TypeSpecimenProps) {
  const sampleRef = useRef<HTMLDivElement>(null);
  const [specs, setSpecs] = useState<Measured | null>(null);

  // Read the rendered styles so the numbers always match the CSS, including
  // responsive overrides — re-measure when the viewport changes.
  useEffect(() => {
    const target = sampleRef.current?.firstElementChild;
    if (!target) return;

    const update = () => setSpecs(measure(target));
    update();
    document.fonts?.ready.then(update);
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 border-b-dot py-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
      <div ref={sampleRef} className="min-w-0 break-words">
        {children}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <Text as="span" variant="body-md">{name}</Text>
          {token && (
            <Text as="span" variant="body-sm" className="font-mono text-text-secondary">
              {token}
            </Text>
          )}
          <Text variant="body-sm" className="text-text-secondary">{usage}</Text>
        </div>
        <div>
          <SpecRow label="Font" value={specs?.family ?? '—'} />
          <SpecRow label="Size" value={specs?.size ?? '—'} />
          <SpecRow label="Weight" value={specs?.weight ?? '—'} />
          <SpecRow label="Line height" value={specs?.lineHeight ?? '—'} />
          <SpecRow label="Letter spacing" value={specs?.letterSpacing ?? '—'} />
          <SpecRow label="Case" value={specs?.transform ?? '—'} />
        </div>
      </div>
    </div>
  );
}
