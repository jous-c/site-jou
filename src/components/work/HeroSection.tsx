import { Text } from '@/components/ui/Text';

export function HeroSection() {
  return (
    <section className="flex flex-col gap-2 px-page pb-[240px]">
      <Text as="h1" variant="heading2">
        Jou An Chen
      </Text>
      <Text variant="body" className="max-w-[420px]">
     Senior Product Designer making complex B2B products feel simple. Previously at nTop and KoiStudios. Now I am designing the data layer for financial services at Rengo AI.
      </Text>
    </section>
  );
}
