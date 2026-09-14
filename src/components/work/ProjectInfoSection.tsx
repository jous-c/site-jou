import { LabelStack } from '@/components/ui/LabelStack';
import { Divider } from '@/components/ui/Divider';
import { cn } from '@/lib/utils';

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
    <section
      className={cn(
        'col-span-full grid grid-cols-1 gap-4 pt-6 pb-[2.75rem]',
        'md:max-lg:flex md:max-lg:flex-row md:max-lg:items-start md:max-lg:justify-start md:max-lg:gap-10',
        'lg:grid lg:grid-cols-subgrid',
      )}
    >
      {items.map((item, i) => (
        <div key={item.label} className="w-max min-w-0 max-w-xs">
          {i > 0 && <Divider className="mb-4 md:hidden" />}
          <LabelStack
            label={item.label}
            value={item.value}
            className="items-start text-left"
            labelClassName="normal-case tracking-normal"
          />
        </div>
      ))}
    </section>
  );
}
