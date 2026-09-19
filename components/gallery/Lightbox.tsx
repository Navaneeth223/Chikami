'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import type { Artwork } from '@/lib/gallery-data';

interface LightboxProps {
  artwork: Artwork;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  totalCount: number;
}

export default function Lightbox({
  artwork,
  onClose,
  onNext,
  onPrevious,
  currentIndex,
  totalCount,
}: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate in
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
    );

    gsap.fromTo(
      contentRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.2)' }
    );

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrevious]);

  const handleClose = () => {
    // Animate out
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
    });
    gsap.to(contentRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: onClose,
    });
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-sumi/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4"
      onClick={handleClose}
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-ai/50 hover:bg-ai transition-colors flex items-center justify-center group z-10"
        aria-label="Close lightbox"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-washi group-hover:text-kin transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-ai/50 hover:bg-ai transition-colors flex items-center justify-center group z-10"
        aria-label="Previous artwork"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-washi group-hover:text-kin transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-ai/50 hover:bg-ai transition-colors flex items-center justify-center group z-10"
        aria-label="Next artwork"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-washi group-hover:text-kin transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Content - scrollable container */}
      <div
        ref={contentRef}
        className="w-full max-w-6xl max-h-[90vh] flex flex-col overflow-y-auto overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative flex-shrink-0 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 px-12 sm:px-16">
          <Image
            src={artwork.image}
            alt={artwork.alt}
            width={1200}
            height={1600}
            className="max-w-full max-h-[50vh] sm:max-h-[60vh] md:max-h-[65vh] w-auto h-auto object-contain rounded-lg shadow-strong"
            priority
          />
        </div>

        {/* Info - always visible at bottom */}
        <div className="flex-shrink-0 bg-ai/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 border border-kin/20 mx-2 sm:mx-0 mb-2">
          <div className="flex items-start justify-between gap-2 sm:gap-4 mb-2 sm:mb-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl text-washi">{artwork.title}</h2>
            <span
              className={`flex-shrink-0 px-2 sm:px-3 py-1 text-xs font-body tracking-wide rounded ${
                artwork.category === 'traditional'
                  ? 'bg-shu/20 text-shu border border-shu/30'
                  : 'bg-neon/20 text-neon border border-neon/30'
              }`}
            >
              {artwork.category === 'traditional' ? 'Traditional' : 'Digital'}
            </span>
          </div>

          <p className="text-washi/70 text-xs sm:text-sm mb-3 sm:mb-4">{artwork.alt}</p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm text-washi/50">
            <span>
              {currentIndex + 1} / {totalCount}
            </span>
            <span className="text-xs hidden sm:inline">Use arrow keys to navigate • ESC to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
