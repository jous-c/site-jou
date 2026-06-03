import { Text } from '@/components/ui/Text';

export function HeroSection() {
  return (
    <section className="flex flex-col gap-2 px-[52px] pb-[240px]">
      <Text as="h1" variant="display-xl">
        Jou An Chen
      </Text>
      <Text variant="body" className="max-w-[450px]">
        New York based product designer with years of experience in web and
        desktop apps for startups in complex problem spaces. Previously at nTop
        and KoiStudios.
      </Text>
    </section>
  );
}
