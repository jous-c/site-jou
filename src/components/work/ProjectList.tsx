import { ProjectCard } from './ProjectCard';
import { Divider } from '@/components/ui/Divider';
import type { Project } from '@/lib/types';

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="flex flex-col">
      {projects.map((project, index) => (
        <div key={project.id}>
          {index > 0 && (
            <div className="px-page py-2">
              <Divider />
            </div>
          )}
          <div className="px-page py-10">
            <ProjectCard project={project} />
          </div>
        </div>
      ))}
    </div>
  );
}
