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
  const lineRef = useRef<SVGLineElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      // Draw the brush-stroke path as user scrolls
      gsap.fromTo(
        lineRef.current,
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
      dotsRef.current.forEach((dot) => {
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
          {/* Vertical center line with dots */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            {/* Animated SVG path through center */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ width: '2px', left: '-0.5px' }}
            >
              <defs>
                <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#B23A1E" />
                  <stop offset="33%" stopColor="#22395C" />
                  <stop offset="66%" stopColor="#00E5C7" />
                  <stop offset="100%" stopColor="#B8925A" />
                </linearGradient>
              </defs>
              <line
                ref={lineRef}
                x1="1"
                y1="0"
                x2="1"
                y2="100%"
                stroke="url(#timeline-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>
          </div>

          {/* Milestones */}
          <div className="relative z-10 space-y-32">
            {milestonesData.map((milestone, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={milestone.year}
                  className="flex items-center gap-8"
                >
                  {/* Content - Left side */}
                  {isEven ? (
                    <>
                      <div className="flex-1 text-right pr-8">
                        <div className="inline-block p-8 bg-sumi/80 backdrop-blur-sm rounded-lg border border-washi/10">
                          <div className="flex items-baseline justify-end gap-4 mb-3">
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

                      {/* Dot marker - Center */}
                      <div
                        ref={(el) => {
                          dotsRef.current[index] = el;
                        }}
                        className="relative flex-shrink-0 z-20"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-shu to-ai ring-4 ring-sumi" />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-shu to-ai blur-lg opacity-60" />
                      </div>

                      {/* Empty space - Right side */}
                      <div className="flex-1" />
                    </>
                  ) : (
                    <>
                      {/* Empty space - Left side */}
                      <div className="flex-1" />

                      {/* Dot marker - Center */}
                      <div
                        ref={(el) => {
                          dotsRef.current[index] = el;
                        }}
                        className="relative flex-shrink-0 z-20"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ai to-neon ring-4 ring-sumi" />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-ai to-neon blur-lg opacity-60" />
                      </div>

                      {/* Content - Right side */}
                      <div className="flex-1 text-left pl-8">
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
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
