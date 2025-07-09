import Image from 'next/image';

const image = 'hero-images/yucca-hero-logs-4.JPG';

export default function HeroProductSlideshow({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Hero"
          fill
          className="hero-zoom"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      {children && <div className="absolute inset-0 z-10">{children}</div>}
    </div>
  );
}