'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { CustomEase } from 'gsap/CustomEase';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, Flip, DrawSVGPlugin, CustomEase);
}

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Create custom eases for the site
    CustomEase.create('ink-flow', '0.23, 1, 0.32, 1');
    CustomEase.create('brush-snap', '0.68, -0.55, 0.265, 1.55');
    
    // Set GSAP defaults
    gsap.defaults({
      ease: 'power2.out',
      duration: 0.6,
    });

    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Override all animations to be instant
      gsap.globalTimeline.timeScale(1000);
      ScrollTrigger.config({ 
        limitCallbacks: true,
        syncInterval: 0,
      });
    }

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
