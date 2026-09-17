'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Artwork } from '@/lib/gallery-data';
import Lightbox from './Lightbox';

interface GalleryGridProps {
  artworks: Artwork[];
}

export default function GalleryGrid({ artworks }: GalleryGridProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const openLightbox = (artwork: Artwork, index: number) => {
    setSelectedArtwork(artwork);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedArtwork(null);
  };

  const goToNext = () => {
    const nextIndex = (lightboxIndex + 1) % artworks.length;
    setLightboxIndex(nextIndex);
    setSelectedArtwork(artworks[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = lightboxIndex === 0 ? artworks.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIndex);
    setSelectedArtwork(artworks[prevIndex]);
  };

  if (artworks.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-washi/50 text-lg">No artwork found for this filter.</p>
      </div>
    );
  }

  return (
    <>
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {artworks.map((artwork, index) => (
          <div
            key={artwork.id}
            className="break-inside-avoid group cursor-pointer"
            onClick={() => openLightbox(artwork, index)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-subtle hover:shadow-strong transition-all duration-300 transform hover:scale-[1.02]">
              {/* Image */}
              <div className="relative aspect-auto">
                <Image
                  src={artwork.image}
                  alt={artwork.alt}
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-sumi via-sumi/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl mb-2 text-washi">{artwork.title}</h3>
                  <span
                    className={`inline-block px-3 py-1 text-xs font-body tracking-wide rounded ${
                      artwork.category === 'traditional'
                        ? 'bg-shu/20 text-shu border border-shu/30'
                        : 'bg-neon/20 text-neon border border-neon/30'
                    }`}
                  >
                    {artwork.category === 'traditional' ? 'Traditional' : 'Digital'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedArtwork && (
        <Lightbox
          artwork={selectedArtwork}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrevious={goToPrevious}
          currentIndex={lightboxIndex}
          totalCount={artworks.length}
        />
      )}
    </>
  );
}
