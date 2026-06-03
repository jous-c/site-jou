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
