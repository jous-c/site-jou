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
      className="group flex flex-col gap-8"
    >
      <div className="relative h-[520px] w-[1000px] overflow-hidden rounded-md bg-border/20">
        {project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        )}
      </div>

      <div className="flex w-[1000px] gap-[60px] px-3">
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Text as="h2" variant="display-sm">
              {project.title}
            </Text>
            <Text variant="body" className="max-w-[732px]">
              {project.summary}
            </Text>
          </div>
          {project.tags.length > 0 && (
            <Tag label={project.tags.join(' / ')} />
          )}
        </div>

        <Text as="span" variant="body-md" className="shrink-0">
          {project.year}
        </Text>
      </div>
    </Link>
  );
}
