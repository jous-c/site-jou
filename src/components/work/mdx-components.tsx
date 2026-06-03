import type { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';
import { Text } from '@/components/ui/Text';
import { CaseStudySection } from './CaseStudySection';

function CaseStudyH2({ children, ...props }: ComponentPropsWithoutRef<'h2'>) {
  return (
    <Text as="h3" variant="display-sm" className="max-w-[800px]" {...props}>
      {children}
    </Text>
  );
}

function CaseStudyP({ children, ...props }: ComponentPropsWithoutRef<'p'>) {
  return (
    <Text as="p" variant="body-lg" className="max-w-[800px] pb-20" {...props}>
      {children}
    </Text>
  );
}

function CaseStudyImg(props: ComponentPropsWithoutRef<'img'>) {
  const { src, alt } = props;
  if (!src || typeof src !== 'string') return null;

  return (
    <div className="relative aspect-video w-full max-w-[1200px] overflow-hidden rounded-md">
      <Image
        src={src}
        alt={alt || ''}
        fill
        className="object-cover"
      />
    </div>
  );
}

export const mdxComponents = {
  CaseStudySection,
  h2: CaseStudyH2,
  p: CaseStudyP,
  img: CaseStudyImg,
};
