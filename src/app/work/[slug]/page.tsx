import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProjectBySlug, getProjectContent } from '@/lib/notion';
import { SectionPageTitle } from '@/components/work/SectionPageTitle';
import { ProjectInfoSection } from '@/components/work/ProjectInfoSection';
import { HeroImage } from '@/components/work/HeroImage';
import { Sidebar } from '@/components/work/Sidebar';
import { EndSection } from '@/components/work/EndSection';
import { PasswordGate } from '@/components/work/PasswordGate';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { mdxComponents } from '@/components/work/mdx-components';
import type { Metadata } from 'next';

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ locked?: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) return { title: 'Not Found' };

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { locked } = await searchParams;

  const project = await getProjectBySlug(slug);

  if (!project || project.status === 'draft') {
    notFound();
  }

  const isProtected = project.status === 'protected';
  const showGate = isProtected && locked !== undefined;

  if (showGate) {
    return <PasswordGate slug={slug} />;
  }

  const mdxContent = await getProjectContent(project.id);

  const headings = Array.from(mdxContent.matchAll(/<CaseStudySection label="([^"]+)">/g))
    .map((m) => m[1]);

  const infoItems = [
    project.company && { label: 'Company', value: project.company },
    project.tags.length > 0 && { label: 'Project type', value: project.tags.join(', ') },
    project.goal && { label: 'Goal', value: project.goal },
  ].filter(Boolean) as Array<{ label: string; value: string }>;

  return (
    <PageWrapper className="bg-surface-light py-0">
      <SectionPageTitle title={project.title} />
      {infoItems.length > 0 && <ProjectInfoSection items={infoItems} />}
      {project.thumbnail && (
        <HeroImage src={project.thumbnail} alt={project.title} />
      )}

      <div className="flex items-start px-6 py-10 md:px-page">
        <Sidebar
          role={project.role}
          headings={headings}
        />
        <article className="min-w-0 w-full lg:w-[70%]">
          {mdxContent ? (
            <MDXRemote source={mdxContent} components={mdxComponents} />
          ) : (
            <div className="py-15">
              <p className="text-text/40">Content coming soon.</p>
            </div>
          )}
        </article>
      </div>

      <EndSection />
    </PageWrapper>
  );
}
