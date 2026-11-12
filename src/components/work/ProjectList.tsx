import { ProjectCard } from './ProjectCard';
import type { Project } from '@/lib/types';

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="flex flex-col">
      {projects.map((project) => (
        <div key={project.id} className="flex flex-col items-end px-page py-6 md:py-[60px]">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
