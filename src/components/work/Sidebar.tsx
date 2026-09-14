import { LabelStack } from '@/components/ui/LabelStack';
import { Text } from '@/components/ui/Text';
import { slugify } from '@/lib/utils';

interface SidebarProps {
  role?: string | null;
  headings: string[];
}

export function Sidebar({ role, headings }: SidebarProps) {
  return (
    <aside className="hidden shrink-0 self-stretch pt-10 lg:col-span-2 lg:block">
      <div className="sticky top-20">
        <div className="flex w-full flex-col items-start gap-5">
          {role && (
            <LabelStack
              label="My Role"
              value={role}
              className="items-start"
              valueClassName="text-body-sm font-normal"
            />
          )}

          {headings.length > 0 && (
            <ul className="flex flex-col items-start gap-1">
              {headings.map((heading) => (
                <li key={heading}>
                  <a href={`#${slugify(heading)}`}>
                    <Text
                      as="span"
                      variant="body"
                      className="underline hover:text-text-secondary transition-colors"
                    >
                      {heading}
                    </Text>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </aside>
  );
}
