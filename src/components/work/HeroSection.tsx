import { Text } from '@/components/ui/Text';

export function HeroSection() {
  return (
    <section className="flex flex-col gap-2 px-page pb-[240px]">
      <Text as="h1" variant="heading2">
        Jou An Chen
      </Text>
      <Text variant="body" className="max-w-[520px]">
      NYC-based senior product designer making B2B products feel easy in complex domains. Previously at nTop and KoiStudios. Now designing the data layer for financial services at Rengo AI.
      </Text>
    </section>
  );
}
