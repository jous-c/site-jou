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
      className="group flex w-full max-w-[980px] flex-col gap-1 md:gap-4"
    >
      <div className="relative aspect-[1000/520] w-full overflow-hidden rounded-lg">
        {project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 1035px) 100vw, 980px"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        )}
      </div>

      <div className="flex w-full items-start justify-between gap-6 px-1 md:gap-[60px] md:px-3">
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <Text
            as="h2"
            variant="heading4"
            className="text-body-case leading-[var(--leading-heading)] font-normal tracking-[-0.02em] md:text-body-lg"
          >
            {project.title}
          </Text>
          {(project.tags.length > 0 || project.company) && (
            <Tag
              label={[project.company, project.tags.join(' / ')].filter(Boolean).join(' • ')}
              className="text-label leading-[var(--leading-body-lg)] md:text-body-sm"
            />
          )}
        </div>
      </div>
    </Link>
  );
}
