'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import HankoMark from '../shared/HankoMark';

export default function HankoLoadSequence() {
  const [hasPlayed, setHasPlayed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hankoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if animation has already played in this session
    const played = sessionStorage.getItem('hanko-played');
    if (played === 'true') {
      setHasPlayed(true);
      return;
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Skip animation but show a quick fade
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setHasPlayed(true);
          sessionStorage.setItem('hanko-played', 'true');
        },
      });
      return;
    }

    // Main animation sequence
    const tl = gsap.timeline({
      onComplete: () => {
        setHasPlayed(true);
        sessionStorage.setItem('hanko-played', 'true');
      },
    });

    // 1. Draw the hanko stroke by stroke (DrawSVG on paths inside the SVG)
    const hankoPaths = hankoRef.current?.querySelectorAll('rect, path, circle');
    if (hankoPaths) {
      tl.from(hankoPaths, {
        drawSVG: '0%',
        duration: 1.5,
        stagger: 0.15,
        ease: 'ink-flow',
      });
    }

    // 2. Scale and bloom (stamp down effect)
    tl.to(
      hankoRef.current,
      {
        scale: 1.2,
        duration: 0.2,
        ease: 'brush-snap',
      },
      '+=0.3'
    );

    tl.to(hankoRef.current, {
      scale: 1,
      duration: 0.4,
      ease: 'elastic.out(1, 0.5)',
    });

    // 3. Use hanko as mask to wipe reveal the page
    tl.to(
      containerRef.current,
      {
        clipPath: 'circle(150% at 50% 50%)',
        duration: 1,
        ease: 'ink-flow',
      },
      '+=0.5'
    );

    // 4. Fade out the overlay
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
    });

    return () => {
      tl.kill();
    };
  }, []);

  const handleSkip = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        setHasPlayed(true);
        sessionStorage.setItem('hanko-played', 'true');
      },
    });
  };

  if (hasPlayed) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        backgroundColor: 'var(--color-sumi)',
        clipPath: 'circle(0% at 50% 50%)',
      }}
    >
      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="absolute top-8 right-8 px-4 py-2 text-sm font-body text-washi/70 hover:text-kin border border-washi/30 hover:border-kin rounded transition-all duration-300"
        aria-label="Skip intro animation"
      >
        Skip
      </button>

      {/* Hanko mark */}
      <div ref={hankoRef} className="w-32 h-32 md:w-48 md:h-48">
        <HankoMark className="w-full h-full" />
      </div>
    </div>
  );
}
