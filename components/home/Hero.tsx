'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import Image from 'next/image';

// Placeholder artwork - replace with actual images
const heroArtwork = [
  {
    id: 1,
    src: '/images/hero/dragon-irezumi.jpg',
    alt: 'Traditional dragon irezumi tattoo',
    type: 'traditional',
  },
  {
    id: 2,
    src: '/images/hero/character-vtuber.jpg',
    alt: 'Vibrant VTuber character illustration',
    type: 'digital',
  },
  {
    id: 3,
    src: '/images/hero/phoenix-flash.jpg',
    alt: 'Phoenix tattoo flash design',
    type: 'traditional',
  },
  {
    id: 4,
    src: '/images/hero/character-design.jpg',
    alt: 'Anime character design sheet',
    type: 'digital',
  },
];

export default function Hero() {
  const t = useTranslations('home');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cross-fade between images every 4 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroArtwork.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate image transition
    const images = imageContainerRef.current?.querySelectorAll('.hero-image');
    if (images && images.length > 0) {
      gsap.to(images, {
        opacity: 0,
        duration: 0.5,
      });
      gsap.to(images[currentIndex], {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.inOut',
      });
    }
  }, [currentIndex]);

  return (
    <section className="relative min-h-screen flex items-center" style={{ paddingTop: '80px' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-5 space-y-6 z-10">
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight"
              style={{ color: 'var(--color-washi)', lineHeight: '1.1' }}
            >
              {t('title')}
            </h1>
            
            <p
              className="font-body text-lg md:text-xl leading-relaxed max-w-lg"
              style={{ color: 'var(--color-washi)' }}
            >
              {t('subtitle')}
            </p>

            <div className="pt-4">
              <Link
                href={`/${locale}/gallery`}
                className="btn btn-primary inline-flex items-center gap-3 group"
              >
                <span>{t('cta')}</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Hand-drawn scroll cue */}
            <div className="pt-12 flex items-center gap-3">
              <svg
                className="w-8 h-12 animate-bounce"
                fill="none"
                stroke="var(--color-kin)"
                viewBox="0 0 24 48"
                strokeWidth={2}
              >
                <path
                  d="M 12 5 L 12 35 M 8 31 L 12 35 L 16 31"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className="text-sm font-body tracking-wide"
                style={{ color: 'var(--color-kin)' }}
              >
                Scroll to explore
              </span>
            </div>
          </div>

          {/* Right: Rotating Artwork */}
          <div className="lg:col-span-7">
            <div
              ref={imageContainerRef}
              className="relative aspect-[3/4] w-full max-w-md lg:max-w-xl mx-auto rounded-lg overflow-hidden shadow-strong"
              style={{ backgroundColor: 'var(--color-ai)' }}
            >
              {heroArtwork.map((artwork, index) => (
                <div
                  key={artwork.id}
                  className="hero-image absolute inset-0 opacity-0"
                  style={{
                    zIndex: index === currentIndex ? 10 : 1,
                  }}
                >
                  <div className="relative w-full h-full bg-ai">
                    {/* Placeholder until real images are added */}
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        background: artwork.type === 'traditional'
                          ? 'linear-gradient(135deg, var(--color-sumi) 0%, var(--color-ai) 100%)'
                          : 'linear-gradient(135deg, var(--color-ai) 0%, var(--color-neon) 100%)',
                      }}
                    >
                      <div className="text-center space-y-4 p-8">
                        <div className="text-6xl">{artwork.type === 'traditional' ? '龍' : '🎨'}</div>
                        <p className="text-washi/70 font-body text-sm">
                          Placeholder for:<br />
                          {artwork.alt}
                        </p>
                      </div>
                    </div>
                    {/* Uncomment when real images are available
                    <Image
                      src={artwork.src}
                      alt={artwork.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    />
                    */}
                  </div>
                </div>
              ))}

              {/* Artwork type indicator */}
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded backdrop-blur-md bg-sumi/70 border border-kin/30">
                <span
                  className="text-xs font-body tracking-wide"
                  style={{
                    color: heroArtwork[currentIndex].type === 'traditional'
                      ? 'var(--color-shu)'
                      : 'var(--color-neon)',
                  }}
                >
                  {heroArtwork[currentIndex].type === 'traditional' ? 'Traditional' : 'Digital'}
                </span>
              </div>

              {/* Pagination dots */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {heroArtwork.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: index === currentIndex ? 'var(--color-kin)' : 'var(--color-washi)',
                      opacity: index === currentIndex ? 1 : 0.4,
                    }}
                    aria-label={`View artwork ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ink bleed effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 ink-bleed" />
    </section>
  );
}
