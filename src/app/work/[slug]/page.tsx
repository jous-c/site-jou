import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProjectBySlug, getProjectContent } from '@/lib/notion';
import { CaseStudyHero } from '@/components/work/CaseStudyHero';
import { PasswordGate } from '@/components/work/PasswordGate';
import { Container } from '@/components/ui/Container';
import { PageWrapper } from '@/components/layout/PageWrapper';
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

  // Show password gate when locked param is set OR when protected and not yet unlocked.
  // Cookie presence is the unlock signal; proxy.ts enforces expiry/validity.
  const isProtected = project.status === 'protected';
  const showGate = isProtected && locked !== undefined;

  if (showGate) {
    return <PasswordGate slug={slug} />;
  }

  const mdxContent = await getProjectContent(project.id);

  return (
    <PageWrapper>
      <CaseStudyHero project={project} />
      <Container className="py-12">
        <article className="prose prose-neutral max-w-none">
          {mdxContent ? (
            <MDXRemote source={mdxContent} />
          ) : (
            <p className="text-text/40">Content coming soon.</p>
          )}
        </article>
      </Container>
    </PageWrapper>
  );
}
