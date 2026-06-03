import type { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';
import { Text } from '@/components/ui/Text';
import { Divider } from '@/components/ui/Divider';
import { slugify } from '@/lib/utils';

function CaseStudyH1({ children, ...props }: ComponentPropsWithoutRef<'h1'>) {
  const text = typeof children === 'string' ? children : '';
  const id = slugify(text);

  return (
    <div className="px-6 pt-[60px] md:px-[52px]">
      <Divider className="mb-[60px]" />
      <Text as="h2" variant="label" className="max-w-[809px]" {...props} id={id}>
        {children}
      </Text>
    </div>
  );
}

function CaseStudyH2({ children, ...props }: ComponentPropsWithoutRef<'h2'>) {
  return (
    <div className="px-6 pt-[52px] md:px-[52px]">
      <Text as="h3" variant="display-sm" className="max-w-[809px]" {...props}>
        {children}
      </Text>
    </div>
  );
}

function CaseStudyP({ children, ...props }: ComponentPropsWithoutRef<'p'>) {
  return (
    <div className="px-6 pt-3 md:px-[52px]">
      <Text as="p" variant="body-lg" className="max-w-[809px]" {...props}>
        {children}
      </Text>
    </div>
  );
}

function CaseStudyImg(props: ComponentPropsWithoutRef<'img'>) {
  const { src, alt } = props;
  if (!src) return null;

  const isExternal = src.startsWith('http');

  return (
    <div className="px-6 py-3 md:px-[52px]">
      {isExternal ? (
        <div className="relative aspect-video w-full max-w-[980px] overflow-hidden rounded-md">
          <Image
            src={src}
            alt={alt || ''}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="relative aspect-video w-full max-w-[980px] overflow-hidden rounded-md">
          <Image
            src={src}
            alt={alt || ''}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}

export const mdxComponents = {
  h1: CaseStudyH1,
  h2: CaseStudyH2,
  p: CaseStudyP,
  img: CaseStudyImg,
};
