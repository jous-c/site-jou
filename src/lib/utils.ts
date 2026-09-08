import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        'display-2xl', 'display-xl', 'display-lg', 'display-md', 'display-sm',
        'body-lg', 'body', 'body-sm', 'label',
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const IMAGE_SRC_PATTERN = /\.(?:png|jpe?g|gif|webp|avif|svg)(?:\?|$)/i;
const VIDEO_SRC_PATTERN = /\.(?:mp4|webm|mov|ogg)(?:\?|$)/i;

export function isImageSrc(src: string): boolean {
  return IMAGE_SRC_PATTERN.test(src);
}

export function isVideoSrc(src: string): boolean {
  return VIDEO_SRC_PATTERN.test(src);
}

/** Turn a Notion media path into a URL this site can serve. */
export function normalizeMediaSrc(raw: string): string {
  const src = raw.trim();
  if (src.startsWith('http://') || src.startsWith('https://')) return src;
  const withoutPublic = src.replace(/^(?:\/)?public\//, '/');
  return withoutPublic.startsWith('/') ? withoutPublic : `/${withoutPublic}`;
}
