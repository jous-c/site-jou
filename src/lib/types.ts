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
  company: string | null;
  goal: string | null;
  role: string | null;
}

export interface ProjectContent {
  project: Project;
  mdxContent: string;
}
