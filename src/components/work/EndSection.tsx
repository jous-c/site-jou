import { Text } from '@/components/ui/Text';

export function EndSection() {
  return (
    <section className="flex flex-col items-end bg-surface pt-14 mt-20 md:px-page">
      <div className="">
         <Text variant="display-sm" className="text-text-secondary text-right">
        That&apos;s the end
      </Text>
      <Text variant="body-sm" className="text-text-secondary">
        Thanks for your time! For more in depth case study, please reach out by email.
      </Text>
      </div>
     
    </section>
  );
}
