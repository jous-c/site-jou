import { Container } from '@/components/ui';
import { Text } from '@/components/ui';
import { Button } from '@/components/ui';
import { Tag } from '@/components/ui';
import { Divider } from '@/components/ui';
import { PageWrapper } from '@/components/layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Playground',
  description: 'Design system foundations — colors, typography, components.',
};

// ─── Helpers ────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Text variant="label" as="p" className="mb-8">
      {children}
    </Text>
  );
}

function SwatchRow({ label, swatches }: {
  label: string;
  swatches: { name: string; var: string; hex?: string }[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <Text variant="body-sm" className="text-[var(--color-text-secondary)]">{label}</Text>
      <div className="flex flex-wrap gap-3">
        {swatches.map((s) => (
          <div key={s.name} className="flex flex-col gap-1.5">
            <div
              className="h-12 w-24 rounded-[var(--radius-sm)] border border-dashed border-[var(--color-border-subtle)]"
              style={{ background: s.var.startsWith('#') ? s.var : `var(${s.var})` }}
            />
            <Text variant="label" as="span">{s.name}</Text>
            {s.hex && (
              <Text variant="body-sm" as="span" className="text-[var(--color-text-secondary)] lowercase">
                {s.hex}
              </Text>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function PlaygroundPage() {
  return (
    <PageWrapper>
      <Container>
        <div className="flex flex-col gap-2 pb-16">
          <Text as="h1" variant="display-3">Playground</Text>
          <Text variant="body" className="text-[var(--color-text-secondary)]">
            Design system foundations — tokens, typography, components.
          </Text>
        </div>

        <Divider />

        {/* ── Colors: Semantic ─────────────────────────────────────────── */}
        <section className="py-16 flex flex-col gap-10">
          <SectionLabel>Colors — Semantic</SectionLabel>

          <SwatchRow label="Surfaces" swatches={[
            { name: 'surface',       var: '--color-surface' },
            { name: 'surface-light', var: '--color-surface-light' },
          ]} />

          <SwatchRow label="Text" swatches={[
            { name: 'text',           var: '--color-text' },
            { name: 'text-secondary', var: '--color-text-secondary' },
          ]} />

          <SwatchRow label="Accent" swatches={[
            { name: 'accent', var: '--color-accent' },
          ]} />

          <SwatchRow label="Borders" swatches={[
            { name: 'border',        var: '--color-border' },
            { name: 'border-light',  var: '--color-border-light' },
            { name: 'border-subtle', var: '--color-border-subtle' },
          ]} />
        </section>

        <Divider />

        {/* ── Colors: Primitives ───────────────────────────────────────── */}
        <section className="py-16 flex flex-col gap-10">
          <SectionLabel>Colors — Primitives</SectionLabel>

          <SwatchRow label="Yellow" swatches={[
            { name: '800', var: '--yellow-800', hex: '#666600' },
            { name: '700', var: '--yellow-700', hex: '#8f8f00' },
            { name: '600', var: '--yellow-600', hex: '#b8b800' },
            { name: '500', var: '--yellow-500', hex: '#e0e000' },
            { name: '400', var: '--yellow-400', hex: '#ffff14' },
            { name: '300', var: '--yellow-300', hex: '#fcfc75' },
            { name: '200', var: '--yellow-200', hex: '#fdfdb9' },
            { name: '100', var: '--yellow-100', hex: '#ffffeb' },
          ]} />

          <SwatchRow label="Beige" swatches={[
            { name: '900', var: '--beige-900', hex: '#262617' },
            { name: '800', var: '--beige-800', hex: '#4d4d2e' },
            { name: '700', var: '--beige-700', hex: '#66663d' },
            { name: '600', var: '--beige-600', hex: '#868650' },
            { name: '500', var: '--beige-500', hex: '#a3a366' },
            { name: '400', var: '--beige-400', hex: '#bbbb81' },
            { name: '300', var: '--beige-300', hex: '#cdcda2' },
            { name: '200', var: '--beige-200', hex: '#e6e6cc' },
            { name: '100', var: '--beige-100', hex: '#f5f4e4' },
            { name: '50',  var: '--beige-50',  hex: '#f8f8f2' },
          ]} />

          <SwatchRow label="Neutral" swatches={[
            { name: 'black', var: '--neutral-black', hex: '#1b1b18' },
            { name: '900',   var: '--neutral-900',   hex: '#505049' },
            { name: '800',   var: '--neutral-800',   hex: '#6b6b61' },
            { name: '700',   var: '--neutral-700',   hex: '#808074' },
            { name: '600',   var: '--neutral-600',   hex: '#949489' },
            { name: '500',   var: '--neutral-500',   hex: '#a8a89f' },
            { name: '400',   var: '--neutral-400',   hex: '#bbbbb4' },
            { name: '300',   var: '--neutral-300',   hex: '#cecfc9' },
            { name: '200',   var: '--neutral-200',   hex: '#e2e2df' },
            { name: '100',   var: '--neutral-100',   hex: '#f9f9f9' },
            { name: 'white', var: '--neutral-white',  hex: '#ffffff' },
          ]} />
        </section>

        <Divider />

        {/* ── Typography ───────────────────────────────────────────────── */}
        <section className="py-16 flex flex-col gap-12">
          <SectionLabel>Typography</SectionLabel>

          {([
            { variant: 'display-1', label: 'Display 1', meta: 'PP Woodland · 56px · 400',       sample: 'Jou An Chen' },
            { variant: 'display-2', label: 'Display 2', meta: 'PP Woodland · 44px · 400',       sample: 'Streamlining patient management' },
            { variant: 'display-3', label: 'Display 3', meta: 'PP Woodland · 36px · 400',       sample: 'Featured work' },
            { variant: 'display-4', label: 'Display 4', meta: 'PP Woodland · 28px · 400',       sample: 'Project background' },
            { variant: 'body-lg',   label: 'Body LG',   meta: 'Geist · 20px · 400',             sample: 'New York based product designer with experience in web and desktop apps.' },
            { variant: 'body',      label: 'Body',      meta: 'Geist · 16px · 400',             sample: 'New York based product designer with experience in web and desktop apps.' },
            { variant: 'body-md',   label: 'Body MD',   meta: 'Geist · 16px · 500',             sample: 'B2B / Healthcare / AI-UX' },
            { variant: 'body-sm',   label: 'Body SM',   meta: 'Geist · 14px · 400',             sample: 'Secondary information and supporting copy.' },
            { variant: 'label',     label: 'Label',     meta: 'Geist · 12px · 500 · uppercase', sample: 'Section label' },
          ] as const).map(({ variant, label, meta, sample }) => (
            <div key={variant} className="flex flex-col gap-1 border-b border-dashed border-[var(--color-border-subtle)] pb-8 last:border-0 last:pb-0">
              <div className="flex items-baseline gap-4 mb-3">
                <Text variant="label" as="span">{label}</Text>
                <Text variant="body-sm" as="span" className="text-[var(--color-text-secondary)]">{meta}</Text>
              </div>
              <Text variant={variant} as="p">{sample}</Text>
            </div>
          ))}
        </section>

        <Divider />

        {/* ── Border Radius ────────────────────────────────────────────── */}
        <section className="py-16 flex flex-col gap-8">
          <SectionLabel>Border Radius</SectionLabel>
          <div className="flex gap-8 items-end">
            {([
              { name: 'tag',  val: '1px',    cssVar: 'var(--radius-tag)' },
              { name: 'sm',   val: '2px',    cssVar: 'var(--radius-sm)' },
              { name: 'md',   val: '8px',    cssVar: 'var(--radius-md)' },
              { name: 'full', val: '9999px', cssVar: 'var(--radius-full)' },
            ] as const).map(({ name, val, cssVar }) => (
              <div key={name} className="flex flex-col gap-3 items-start">
                <div
                  className="w-16 h-16 bg-[var(--color-border)]"
                  style={{ borderRadius: cssVar }}
                />
                <Text variant="label" as="span">{name}</Text>
                <Text variant="body-sm" as="span" className="text-[var(--color-text-secondary)]">{val}</Text>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Components ───────────────────────────────────────────────── */}
        <section className="py-16 flex flex-col gap-12">
          <SectionLabel>Components</SectionLabel>

          <div className="flex flex-col gap-4">
            <Text variant="body-sm" className="text-[var(--color-text-secondary)]">Button</Text>
            <div className="flex flex-wrap gap-3 items-center">
              <Button variant="primary" size="sm">Primary SM</Button>
              <Button variant="primary" size="md">Primary MD</Button>
              <Button variant="primary" size="lg">Primary LG</Button>
              <Button variant="secondary" size="md">Secondary</Button>
              <Button variant="ghost" size="md">Ghost</Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Text variant="body-sm" className="text-[var(--color-text-secondary)]">Tag</Text>
            <div className="flex flex-wrap gap-2">
              <Tag label="B2B" />
              <Tag label="Healthcare" />
              <Tag label="AI-UX" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Text variant="body-sm" className="text-[var(--color-text-secondary)]">Divider</Text>
            <Divider />
          </div>
        </section>

      </Container>
    </PageWrapper>
  );
}
