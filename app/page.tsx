import { getProjects } from '@/lib/notion';
import { ProjectGrid } from '@/components/work/ProjectGrid';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Container } from '@/components/ui/Container';
import { Text } from '@/components/ui/Text';

export const revalidate = 60;

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <PageWrapper>
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <Text as="h1" variant="display">
              Work
            </Text>
            <Text variant="body" className="text-[var(--color-text)]/60">
              Selected case studies in product design.
            </Text>
          </div>
          {projects.length > 0 ? (
            <ProjectGrid projects={projects} />
          ) : (
            <Text variant="caption" className="text-[var(--color-text)]/40">
              No projects yet — add your Notion credentials to get started.
            </Text>
          )}
        </div>
      </Container>
    </PageWrapper>
  );
}
