import { Text } from '@/components/ui/Text';

export function EndSection() {
  return (
    <section className="flex flex-col items-center justify-center bg-surface px-6 py-[60px] text-center md:px-[52px]">
      <Text variant="display-sm" className="text-text-secondary">
        That&apos;s the end
      </Text>
      <Text variant="body-sm" className="text-text-secondary">
        Thanks for your time! For more in depth case study, please reach out by email.
      </Text>
    </section>
  );
}
