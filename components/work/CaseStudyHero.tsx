import Image from 'next/image';
import { Tag } from '@/components/ui/Tag';
import { Text } from '@/components/ui/Text';
import { Container } from '@/components/ui/Container';
import type { Project } from '@/lib/types';

interface CaseStudyHeroProps {
  project: Project;
}

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <section className="border-b border-[var(--color-border)] pb-12">
      {project.thumbnail && (
        <div className="relative mb-12 aspect-[21/9] w-full overflow-hidden bg-[var(--color-border)]/10">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}
      <Container>
        <div className="flex flex-col gap-4">
          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          )}
          <Text as="h1" variant="display">
            {project.title}
          </Text>
          <div className="flex items-center gap-4">
            <Text variant="caption">{project.year}</Text>
          </div>
          {project.summary && (
            <Text className="max-w-2xl text-[var(--color-text)]/70">
              {project.summary}
            </Text>
          )}
        </div>
      </Container>
    </section>
  );
}
