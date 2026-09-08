import { LabelStack } from '@/components/ui/LabelStack';
import { Text } from '@/components/ui/Text';
import { slugify } from '@/lib/utils';

interface SidebarProps {
  role?: string | null;
  headings: string[];
}

export function Sidebar({ role, headings }: SidebarProps) {
  return (
    <aside className="hidden shrink-0 self-stretch pr-page lg:block lg:w-[284px]">
      <div className="sticky top-20">
        <div className="flex w-full flex-col items-end gap-5 text-right">
          {role && (
            <LabelStack
              label="My Role"
              value={role}
              className="items-end"
              valueClassName="text-body-sm font-normal"
            />
          )}

          {headings.length > 0 && (
            <div className="flex flex-col items-end gap-2">
              <Text variant="label">Sections</Text>
              <ul className="flex flex-col items-end gap-1">
                {headings.map((heading) => (
                  <li key={heading}>
                    <a href={`#${slugify(heading)}`}>
                      <Text
                        as="span"
                        variant="body-lg"
                        className="underline hover:text-text-secondary transition-colors"
                      >
                        {heading}
                      </Text>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
