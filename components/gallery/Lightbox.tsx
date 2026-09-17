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
      className="fixed inset-0 z-[100] bg-sumi/95 backdrop-blur-md flex items-center justify-center p-4"
      onClick={handleClose}
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-ai/50 hover:bg-ai transition-colors flex items-center justify-center group z-10"
        aria-label="Close lightbox"
      >
        <svg
          className="w-6 h-6 text-washi group-hover:text-kin transition-colors"
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
        className="absolute left-4 w-12 h-12 rounded-full bg-ai/50 hover:bg-ai transition-colors flex items-center justify-center group z-10"
        aria-label="Previous artwork"
      >
        <svg
          className="w-6 h-6 text-washi group-hover:text-kin transition-colors"
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
        className="absolute right-4 w-12 h-12 rounded-full bg-ai/50 hover:bg-ai transition-colors flex items-center justify-center group z-10"
        aria-label="Next artwork"
      >
        <svg
          className="w-6 h-6 text-washi group-hover:text-kin transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Content */}
      <div
        ref={contentRef}
        className="max-w-6xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative flex-1 flex items-center justify-center mb-6">
          <Image
            src={artwork.image}
            alt={artwork.alt}
            width={1200}
            height={1600}
            className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-lg shadow-strong"
            priority
          />
        </div>

        {/* Info */}
        <div className="bg-ai/30 backdrop-blur-sm rounded-lg p-6 border border-kin/20">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h2 className="font-display text-2xl text-washi">{artwork.title}</h2>
            <span
              className={`px-3 py-1 text-xs font-body tracking-wide rounded ${
                artwork.category === 'traditional'
                  ? 'bg-shu/20 text-shu border border-shu/30'
                  : 'bg-neon/20 text-neon border border-neon/30'
              }`}
            >
              {artwork.category === 'traditional' ? 'Traditional' : 'Digital'}
            </span>
          </div>

          <p className="text-washi/70 text-sm mb-4">{artwork.alt}</p>

          <div className="flex items-center justify-between text-sm text-washi/50">
            <span>
              {currentIndex + 1} / {totalCount}
            </span>
            <span className="text-xs">Use arrow keys to navigate • ESC to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
