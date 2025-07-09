'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  'hero-images/yucca_hero_1.jpeg',
  'hero-images/yucca_hero_2.jpeg',
  'hero-images/yucca_hero_3.jpeg',
  'hero-images/yucca-hero-logs-4.JPG',
];

const SLIDE_DURATION = 8000;
const FADE_DURATION = 1.5;

export default function HeroSlideshow({ children }: { children?: React.ReactNode }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">

      {/* Zoom wrapper: key forces remount on every current change */}
      <motion.div
        key={`zoom-${current}`}
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: SLIDE_DURATION / 1000, ease: 'easeInOut' }}
        style={{ transformOrigin: 'center center' }}
      >
        {/* Crossfade images */}
        {images.map((src, index) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            animate={{ opacity: index === current ? 1 : 0 }}
            transition={{ duration: FADE_DURATION, ease: 'easeInOut' }}
            style={{ zIndex: index === current ? 1 : 0 }}
          >
            <Image
              src={src}
              alt={`Slide ${index}`}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === current}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Optional hero text */}
      {children && <div className="absolute inset-0 z-10">{children}</div>}
    </div>
  );
}
