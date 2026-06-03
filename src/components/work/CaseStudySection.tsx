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
    <section id={id} className="group/section scroll-mt-5 px-6 pt-[60px] first-of-type:pt-0 md:px-page">
      <div className="group-first-of-type/section:hidden">
        <Divider className="mb-[60px]" />
      </div>
      <Text as="h2" variant="label" className="max-w-[809px]">
        {label}
      </Text>
      <div className="mt-[52px] space-y-3">{children}</div>
    </section>
  );
}
