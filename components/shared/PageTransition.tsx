'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

export default function PageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!overlayRef.current) return;

    // Entrance animation
    gsap.fromTo(
      overlayRef.current,
      {
        scaleY: 1,
        transformOrigin: 'top',
      },
      {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 0.8,
        ease: 'power3.inOut',
        delay: 0.2,
      }
    );
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9998] pointer-events-none"
      style={{
        background: 'linear-gradient(135deg, #0C0C0D 0%, #22395C 50%, #00E5C7 100%)',
      }}
    />
  );
}
