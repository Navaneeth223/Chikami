'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if ('ontouchstart' in window) {
      return;
    }

    setIsVisible(true);

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Instant cursor position
      gsap.to(cursor, {
        x: mouseX - 6,
        y: mouseY - 6,
        duration: 0,
      });

      // Delayed follower
      gsap.to(follower, {
        x: mouseX - 20,
        y: mouseY - 20,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseEnter = () => {
      gsap.to([cursor, follower], { scale: 1, opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, follower], { scale: 0, opacity: 0, duration: 0.3 });
    };

    // Track hovering over interactive elements
    const handleInteractiveEnter = () => {
      setIsHovering(true);
      gsap.to(follower, {
        scale: 2,
        borderColor: '#00E5C7',
        duration: 0.3,
      });
    };

    const handleInteractiveLeave = () => {
      setIsHovering(false);
      gsap.to(follower, {
        scale: 1,
        borderColor: '#EFE8D8',
        duration: 0.3,
      });
    };

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .cursor-pointer'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleInteractiveEnter);
      el.addEventListener('mouseleave', handleInteractiveLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);

      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleInteractiveEnter);
        el.removeEventListener('mouseleave', handleInteractiveLeave);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-neon rounded-full pointer-events-none z-[10000] mix-blend-screen"
        style={{ opacity: 0, scale: 0 }}
      />

      {/* Follower ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border-2 rounded-full pointer-events-none z-[9999] transition-colors duration-300"
        style={{
          borderColor: isHovering ? '#00E5C7' : 'rgba(239, 232, 216, 0.5)',
          opacity: 0,
          scale: 0,
        }}
      />
    </>
  );
}
