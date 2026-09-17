'use client';

import { useTranslations } from 'next-intl';
import type { ArtworkCategory } from '@/lib/gallery-data';

interface GalleryFiltersProps {
  activeFilter: ArtworkCategory | 'all';
  onFilterChange: (filter: ArtworkCategory | 'all') => void;
}

export default function GalleryFilters({ activeFilter, onFilterChange }: GalleryFiltersProps) {
  const t = useTranslations('gallery');

  const filters: Array<{ value: ArtworkCategory | 'all'; label: string; colorClass: string }> = [
    { value: 'all', label: t('filterAll'), colorClass: 'border-kin text-kin hover:bg-kin hover:text-sumi' },
    { value: 'traditional', label: t('filterTraditional'), colorClass: 'border-shu text-shu hover:bg-shu hover:text-washi' },
    { value: 'digital', label: t('filterCharacter'), colorClass: 'border-neon text-neon hover:bg-neon hover:text-sumi' },
  ];

  return (
    <div className="mb-12 flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`
            px-6 py-3 rounded-lg border-2 font-body text-sm tracking-wide
            transition-all duration-300 transform hover:scale-105
            ${filter.colorClass}
            ${
              activeFilter === filter.value
                ? filter.value === 'traditional'
                  ? 'bg-shu text-washi'
                  : filter.value === 'digital'
                  ? 'bg-neon text-sumi'
                  : 'bg-kin text-sumi'
                : 'bg-transparent'
            }
          `}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
