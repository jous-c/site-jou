import { ProjectCard } from './ProjectCard';
import type { Project } from '@/lib/types';

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="flex flex-col">
      {projects.map((project) => (
        <div key={project.id} className="px-page py-10">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
