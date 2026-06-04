import Image from 'next/image';

interface HeroImageProps {
  src: string;
  alt: string;
}

export function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <section className="px-6 md:px-page pb-10">
      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-md border border-dashed border-border">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
