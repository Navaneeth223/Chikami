'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

type Milestone = {
  year: string;
  age: number;
  titleKey: string;
  descKey: string;
};

const milestonesData: Milestone[] = [
  {
    year: '1986',
    age: 4,
    titleKey: 'milestone1Title',
    descKey: 'milestone1Desc',
  },
  {
    year: '1998',
    age: 16,
    titleKey: 'milestone2Title',
    descKey: 'milestone2Desc',
  },
  {
    year: '2010',
    age: 28,
    titleKey: 'milestone3Title',
    descKey: 'milestone3Desc',
  },
  {
    year: '2026',
    age: 44,
    titleKey: 'milestone4Title',
    descKey: 'milestone4Desc',
  },
];

export default function Timeline() {
  const t = useTranslations('about');
  const locale = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !pathRef.current) return;

    const ctx = gsap.context(() => {
      // Draw the brush-stroke path as user scrolls
      gsap.fromTo(
        pathRef.current,
        { drawSVG: '0%' },
        {
          drawSVG: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        }
      );

      // Animate milestone dots as they come into view
      dotsRef.current.forEach((dot, index) => {
        if (!dot) return;
        
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: dot,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl font-bold text-washi mb-20 text-center">
          {t('timelineTitle')}
        </h2>

        {/* Timeline container */}
        <div className="relative">
          {/* SVG brush-stroke path */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d="M 10 10 Q 30 30, 50 35 T 90 90"
              fill="none"
              stroke="url(#timeline-gradient)"
              strokeWidth="0.5"
              strokeLinecap="round"
              opacity="0.6"
            />
            <defs>
              <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B23A1E" />
                <stop offset="50%" stopColor="#22395C" />
                <stop offset="100%" stopColor="#00E5C7" />
              </linearGradient>
            </defs>
          </svg>

          {/* Milestones */}
          <div className="relative z-10 space-y-32">
            {milestonesData.map((milestone, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={milestone.year}
                  className={`flex items-center gap-8 ${
                    isEven ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block p-8 bg-sumi/80 backdrop-blur-sm rounded-lg border border-washi/10">
                      <div className="flex items-baseline gap-4 mb-3">
                        <span className="text-3xl font-bold text-shu">
                          {milestone.year}
                        </span>
                        <span className="text-lg text-washi/60">
                          {locale === 'ja' ? `${milestone.age}歳` : `Age ${milestone.age}`}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-washi mb-2">
                        {t(milestone.titleKey)}
                      </h3>
                      <p className="text-washi/70 leading-relaxed">
                        {t(milestone.descKey)}
                      </p>
                    </div>
                  </div>

                  {/* Dot marker */}
                  <div
                    ref={(el) => {
                      dotsRef.current[index] = el;
                    }}
                    className="relative flex-shrink-0"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-shu to-ai ring-4 ring-sumi" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-shu to-ai blur-md opacity-50" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
