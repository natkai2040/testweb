import Image from 'next/image';

const images = [
  'hero-images/yucca_hero_1.jpeg',
  'hero-images/yucca_hero_2.jpeg',
  'hero-images/yucca_hero_3.jpeg',
  'hero-images/yucca-hero-logs-4.JPG',
];

export default function HeroSlideshow({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 fade-slide"
          style={{
            animationDelay: `${index * 8}s`,
            zIndex: index, // ensures correct stacking
          }}
        >
          <Image
            src={src}
            alt={`Hero ${index}`}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
        </div>
      ))}
      {children && <div className="absolute inset-0 z-10">{children}</div>}
    </div>
  );
}
