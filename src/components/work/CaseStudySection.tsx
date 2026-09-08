import type { ReactNode } from 'react';
import { Text } from '@/components/ui/Text';
import { Divider } from '@/components/ui/Divider';
import { slugify } from '@/lib/utils';

interface CaseStudySectionProps {
  label: string;
  children: ReactNode;
}

export function CaseStudySection({ label, children }: CaseStudySectionProps) {
  const id = slugify(label);

  return (
    <section className="group/section first-of-type:pt-0">
      <div className="group-first-of-type/section:hidden">
        <Divider className="mb-[60px]" />
      </div>
      <Text
        as="h2"
        id={id}
        variant="body-lg"
        className="max-w-[800px] text-text-secondary"
      >
        {label}
      </Text>
      <div className="mt-[52px] space-y-2">{children}</div>
    </section>
  );
}
