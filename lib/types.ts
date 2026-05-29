export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  year: number;
  tags: string[];
  status: 'published' | 'draft' | 'protected';
  thumbnail: string | null;
  sortOrder: number;
}

export interface ProjectContent {
  project: Project;
  mdxContent: string;
}
