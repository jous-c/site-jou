import { LabelStack } from '@/components/ui/LabelStack';
import { Divider } from '@/components/ui/Divider';
import { Text } from '@/components/ui/Text';
import { slugify } from '@/lib/utils';

interface SidebarProps {
  company?: string | null;
  year: number;
  role?: string | null;
  headings: string[];
}

export function Sidebar({ company, year, role, headings }: SidebarProps) {
  const metaItems = [
    company && { label: 'Company', value: company },
    { label: 'Year', value: String(year) },
    role && { label: 'My Role', value: role },
  ].filter(Boolean) as Array<{ label: string; value: string }>;

  return (
    <aside className="absolute right-6 top-0 hidden lg:block lg:right-[28px]">
      <div className="sticky top-1/2 -translate-y-1/2 w-[256px] rounded-md border border-dashed border-border bg-surface-light py-6">
        {metaItems.map((item, i) => (
          <div key={item.label}>
            {i > 0 && <Divider className="my-0" />}
            <div className="px-4 py-2.5">
              <LabelStack
                label={item.label}
                value={item.value}
                valueClassName="text-body-sm font-normal"
              />
            </div>
          </div>
        ))}

        {headings.length > 0 && (
          <>
            <Divider className="my-0" />
            <div className="flex flex-col gap-2 px-4 pt-5">
              <Text variant="label">Index</Text>
              <ul className="flex flex-col gap-1">
                {headings.map((heading) => (
                  <li key={heading}>
                    <a
                      href={`#${slugify(heading)}`}
                      className="block font-sans text-body-sm text-text hover:text-text-secondary transition-colors"
                    >
                      {heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
