import { LabelStack } from '@/components/ui/LabelStack';
import { VerticalDivider } from '@/components/ui/VerticalDivider';
import { Divider } from '@/components/ui/Divider';
import { Fragment } from 'react';

interface ProjectInfoItem {
  label: string;
  value: string;
}

interface ProjectInfoSectionProps {
  items: ProjectInfoItem[];
}

export function ProjectInfoSection({ items }: ProjectInfoSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="flex flex-col gap-6 px-6 py-6 md:flex-row md:items-start md:gap-[60px] md:px-page">
      {items.map((item, i) => (
        <Fragment key={item.label}>
          {i > 0 && (
            <>
              <VerticalDivider className="hidden md:block" />
              <Divider className="md:hidden" />
            </>
          )}
          <LabelStack label={item.label} value={item.value} className="shrink-0 md:px-4" />
        </Fragment>
      ))}
    </section>
  );
}
