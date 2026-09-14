import { Text } from '@/components/ui/Text';

interface SectionPageTitleProps {
  title: string;
}

export function SectionPageTitle({ title }: SectionPageTitleProps) {
  return (
    <section className="px-page pt-2.5 pb-16 md:pb-[120px]">
      <Text as="h1" variant="heading2" className="w-[70%] leading-[1.05]">
        {title}
      </Text>
    </section>
  );
}
