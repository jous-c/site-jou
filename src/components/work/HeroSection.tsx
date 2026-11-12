import { Text } from '@/components/ui/Text';

function HeroLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-from-font underline-offset-[from-font] hover:text-text-secondary transition-colors"
    >
      {children}
    </a>
  );
}

export function HeroSection() {
  return (
    <section className="bg-grid-dashed -mt-[var(--nav-height)] flex flex-col gap-4 px-page pt-[var(--nav-height)] pb-[200px] md:pb-[320px]">
      <Text
        as="h1"
        variant="display2"
        className="text-heading3 leading-[var(--leading-heading)] md:text-display2"
      >
        Jou An Chen
      </Text>
      <Text
        variant="body"
        className="max-w-[384px] text-body-sm leading-[var(--leading-body)] md:text-body"
      >
        Product Designer making complex B2B products feel simple. Previously at{' '}
        <HeroLink href="https://www.ntop.com/">nTop</HeroLink> and{' '}
        <HeroLink href="https://www.koistudios.io/">KoiStudios</HeroLink>. Now I am
        designing the data layer for financial services at{' '}
        <HeroLink href="https://rengoai.com/">Rengo AI</HeroLink>.
      </Text>
    </section>
  );
}
