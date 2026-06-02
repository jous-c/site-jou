import Link from 'next/link';
import Image from 'next/image';
import { Tag } from '@/components/ui/Tag';
import { Text } from '@/components/ui/Text';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-shadow hover:shadow-md"
    >
      {project.thumbnail && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-[var(--color-border)]/20">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <Text as="h2" variant="display-4">
            {project.title}
          </Text>
          <Text as="span" variant="body-sm" className="text-[var(--color-text-secondary)]">
            {project.year}
          </Text>
        </div>
        <Text variant="body-sm" className="text-[var(--color-text-secondary)]">{project.summary}</Text>
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
