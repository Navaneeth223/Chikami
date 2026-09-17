'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    labelKey: 'processStep1',
    descKey: 'processStep1Desc',
    // Placeholder - will be replaced with actual process images
    image: '/images/process/concept-sketch.jpg',
  },
  {
    labelKey: 'processStep2',
    descKey: 'processStep2Desc',
    image: '/images/process/refined-design.jpg',
  },
  {
    labelKey: 'processStep3',
    descKey: 'processStep3Desc',
    image: '/images/process/final-artwork.jpg',
  },
];

export default function ProcessGallery() {
  const t = useTranslations('about');
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            delay: index * 0.15,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-sumi">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-washi mb-4">
            {t('processTitle')}
          </h2>
          <p className="text-lg text-washi/70 max-w-2xl mx-auto">
            {t('processDesc')}
          </p>
        </div>

        {/* Process cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.labelKey}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative bg-sumi/80 backdrop-blur-sm rounded-lg overflow-hidden border border-washi/10 hover:border-washi/30 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-sumi via-sumi/80 to-sumi/60 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-washi/30">
                  <span className="text-6xl font-bold">{index + 1}</span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-sumi to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-washi mb-2">
                  {t(step.labelKey)}
                </h3>
                <p className="text-washi/70 leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>

              {/* Number indicator */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-shu/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-shu font-bold">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
