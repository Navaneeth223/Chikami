'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import GalleryGrid from './GalleryGrid';
import GalleryFilters from './GalleryFilters';
import type { Artwork, ArtworkCategory } from '@/lib/gallery-data';

interface GalleryClientProps {
  artworks: Artwork[];
}

export default function GalleryClient({ artworks }: GalleryClientProps) {
  const t = useTranslations('gallery');
  const [activeFilter, setActiveFilter] = useState<ArtworkCategory | 'all'>('all');

  const filteredArtworks =
    activeFilter === 'all'
      ? artworks
      : artworks.filter((artwork) => artwork.category === activeFilter);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl mb-4 text-washi">
            {t('title')}
          </h1>
          <p className="text-washi/70 text-lg max-w-2xl">
            {filteredArtworks.length} {filteredArtworks.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Filters */}
        <GalleryFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        {/* Gallery Grid */}
        <GalleryGrid artworks={filteredArtworks} />
      </div>
    </div>
  );
}
