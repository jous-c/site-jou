import { getProjects } from '@/lib/notion';
import { HeroSection } from '@/components/work/HeroSection';
import { ProjectList } from '@/components/work/ProjectList';
import { Text } from '@/components/ui/Text';

export const revalidate = 60;

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <main>
      <HeroSection />
      {projects.length > 0 ? (
        <ProjectList projects={projects} />
      ) : (
        <div className="px-page">
          <Text variant="body-sm" className="text-text-secondary">
            No projects yet — add your Notion credentials to get started.
          </Text>
        </div>
      )}
    </main>
  );
}
