import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Children, isValidElement } from 'react';
import Image from 'next/image';
import { Text } from '@/components/ui/Text';
import { cn, isVideoSrc, normalizeMediaSrc } from '@/lib/utils';
import { CaseStudySection } from './CaseStudySection';

const caseStudyListClassName = [
  'w-full max-w-[680px] list-outside space-y-3 pb-20 pl-6',
  'font-sans text-body font-normal leading-[var(--leading-body)] text-text',
  'marker:text-text',
  '[&_ol]:w-auto [&_ol]:pb-0 [&_ol]:pt-2',
  '[&_p]:w-auto [&_p]:pb-0',
  '[&_ul]:w-auto [&_ul]:pb-0 [&_ul]:pt-2',
].join(' ');

function CaseStudyH2({ children, ...props }: ComponentPropsWithoutRef<'h2'>) {
  return (
    <Text as="h3" variant="heading5" className="max-w-[680px] pb-1" {...props}>
      {children}
    </Text>
  );
}

function CaseStudyP({ children, ...props }: ComponentPropsWithoutRef<'p'>) {
  const childArray = Children.toArray(children).filter(
    (child) => typeof child !== 'string' || child.trim() !== '',
  );
  if (childArray.length === 1 && isValidElement(childArray[0])) {
    const type = childArray[0].type;
    if (type === CaseStudyImg || type === CaseStudyVideo) {
      return childArray[0];
    }
  }

  return (
    <Text as="p" variant="body" className="w-full max-w-[680px] pb-14 has-[+ul]:pb-0 has-[+ol]:pb-0" {...props}>
      {children}
    </Text>
  );
}

function CaseStudyMediaFrame({ children }: { children: ReactNode }) {
  return (
    <div className="pb-20">
      <div className="relative aspect-video w-full overflow-hidden rounded-md">
        {children}
      </div>
    </div>
  );
}

function CaseStudyImg(props: ComponentPropsWithoutRef<'img'>) {
  const { src, alt } = props;
  if (!src || typeof src !== 'string') return null;

  const resolvedSrc = normalizeMediaSrc(src);
  if (isVideoSrc(resolvedSrc)) {
    return <CaseStudyVideo src={resolvedSrc} />;
  }

  return (
    <CaseStudyMediaFrame>
      <Image
        src={resolvedSrc}
        alt={alt || ''}
        fill
        className="object-cover"
      />
    </CaseStudyMediaFrame>
  );
}

function CaseStudyVideo(props: ComponentPropsWithoutRef<'video'>) {
  const { src } = props;
  if (!src || typeof src !== 'string') return null;

  const resolvedSrc = normalizeMediaSrc(src);

  return (
    <div className="pb-20">
      <div
        className={[
          'relative w-full overflow-hidden rounded-md p-8 md:p-12',
          'bg-linear-to-b from-media-stage-soft to-media-stage',
        ].join(' ')}
      >
        <div className="relative aspect-video overflow-hidden rounded-md">
          <video
            src={resolvedSrc}
            controls
            playsInline
            preload="metadata"
            className="absolute inset-0 block h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

function CaseStudyUl({ children, className, ...props }: ComponentPropsWithoutRef<'ul'>) {
  return (
    <ul className={cn(caseStudyListClassName, 'list-disc', className)} {...props}>
      {children}
    </ul>
  );
}

function CaseStudyOl({ children, className, ...props }: ComponentPropsWithoutRef<'ol'>) {
  return (
    <ol className={cn(caseStudyListClassName, 'list-decimal', className)} {...props}>
      {children}
    </ol>
  );
}

export const mdxComponents = {
  CaseStudySection,
  h2: CaseStudyH2,
  p: CaseStudyP,
  ul: CaseStudyUl,
  ol: CaseStudyOl,
  img: CaseStudyImg,
  video: CaseStudyVideo,
  Video: CaseStudyVideo, // JSX emitted from Notion (`<Video />`)
};
