'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';

export default function TwoHandsSection() {
  const t = useTranslations('home');
  const sectionRef = useRef<HTMLElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !dividerRef.current) return;

    // Animate the center divider line drawing on scroll
    gsap.fromTo(
      dividerRef.current,
      {
        scaleY: 0,
        transformOrigin: 'top center',
      },
      {
        scaleY: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1,
        },
      }
    );

    // Parallax effect on the two sides
    gsap.to('.traditional-side', {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to('.digital-side', {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4">
          <h2
            className="font-display text-4xl md:text-5xl"
            style={{ color: 'var(--color-washi)' }}
          >
            {t('twoHandsTitle')}
          </h2>
          <p
            className="font-body text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--color-washi)', opacity: 0.8 }}
          >
            {t('twoHandsDesc')}
          </p>
        </div>

        {/* Split Visual */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-6xl mx-auto">
          {/* Traditional Side — Left */}
          <div
            className="traditional-side relative p-8 md:p-12 min-h-[400px] flex flex-col justify-center mode-traditional"
            style={{
              backgroundColor: 'var(--color-ai)',
              borderTopLeftRadius: '12px',
              borderBottomLeftRadius: '12px',
            }}
          >
            <div className="space-y-6">
              <div className="text-6xl md:text-8xl">龍</div>
              <h3
                className="font-display text-2xl md:text-3xl"
                style={{ color: 'var(--color-shu)' }}
              >
                Irezumi & Flash
              </h3>
              <p
                className="font-body text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--color-washi)' }}
              >
                Dense black linework. Dragons coiled among cherry blossoms. Phoenixes rising.
                Guardian deities and warrior portraits in the classical Japanese tattoo vocabulary —
                Edo-period ink tradition carried forward.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span
                  className="px-3 py-1 text-xs font-body tracking-wide rounded border"
                  style={{
                    borderColor: 'var(--color-shu)',
                    color: 'var(--color-shu)',
                  }}
                >
                  Tattoo
                </span>
                <span
                  className="px-3 py-1 text-xs font-body tracking-wide rounded border"
                  style={{
                    borderColor: 'var(--color-shu)',
                    color: 'var(--color-shu)',
                  }}
                >
                  Flash Design
                </span>
                <span
                  className="px-3 py-1 text-xs font-body tracking-wide rounded border"
                  style={{
                    borderColor: 'var(--color-shu)',
                    color: 'var(--color-shu)',
                  }}
                >
                  Pencil Sketch
                </span>
              </div>
            </div>

            {/* Decorative ink splotch */}
            <div
              className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-20"
              style={{
                background: 'radial-gradient(circle, var(--color-shu) 0%, transparent 70%)',
                filter: 'blur(8px)',
              }}
            />
          </div>

          {/* Digital Side — Right */}
          <div
            className="digital-side relative p-8 md:p-12 min-h-[400px] flex flex-col justify-center mode-digital"
            style={{
              background: 'linear-gradient(135deg, var(--color-sumi) 0%, #1a1a2e 100%)',
              borderTopRightRadius: '12px',
              borderBottomRightRadius: '12px',
            }}
          >
            <div className="space-y-6">
              <div className="text-6xl md:text-8xl">✨</div>
              <h3
                className="font-display text-2xl md:text-3xl"
                style={{ color: 'var(--color-neon)' }}
              >
                Character & VTuber Design
              </h3>
              <p
                className="font-body text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--color-washi)' }}
              >
                Bright, saturated anime-style character sheets. Kawaii mascots. &quot;Standing picture&quot;
                reference art for VTubers and digital performers — Reiwa-era culture meeting
                commission-driven creativity.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span
                  className="px-3 py-1 text-xs font-body tracking-wide rounded border"
                  style={{
                    borderColor: 'var(--color-neon)',
                    color: 'var(--color-neon)',
                  }}
                >
                  Digital Illustration
                </span>
                <span
                  className="px-3 py-1 text-xs font-body tracking-wide rounded border"
                  style={{
                    borderColor: 'var(--color-neon)',
                    color: 'var(--color-neon)',
                  }}
                >
                  Character Design
                </span>
                <span
                  className="px-3 py-1 text-xs font-body tracking-wide rounded border"
                  style={{
                    borderColor: 'var(--color-neon)',
                    color: 'var(--color-neon)',
                  }}
                >
                  VTuber Art
                </span>
              </div>
            </div>

            {/* Decorative glow */}
            <div
              className="absolute bottom-4 left-4 w-20 h-20 rounded-full opacity-30"
              style={{
                background: 'radial-gradient(circle, var(--color-neon) 0%, transparent 70%)',
                filter: 'blur(12px)',
              }}
            />
          </div>

          {/* Center Divider — Drawn Brush Line */}
          <div
            ref={dividerRef}
            className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden lg:block"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, var(--color-kin) 10%, var(--color-kin) 90%, transparent 100%)',
            }}
          >
            {/* Brush stroke texture overlay */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 4 400"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 2 0 Q 1 100 2 200 T 2 400"
                stroke="var(--color-kin)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
