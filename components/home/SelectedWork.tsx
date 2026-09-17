'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { getFeaturedArtworks } from '@/lib/gallery-data';

export default function SelectedWork() {
  const t = useTranslations('home');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const featuredPieces = getFeaturedArtworks();

  return (
    <section className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <h2
            className="font-display text-4xl md:text-5xl"
            style={{ color: 'var(--color-washi)' }}
          >
            {t('selectedWork')}
          </h2>
          <Link
            href={`/${locale}/gallery`}
            className="font-body text-sm tracking-wide text-kin hover:text-washi transition-colors flex items-center gap-2"
          >
            <span>View all</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {featuredPieces.slice(0, 5).map((piece) => (
            <Link
              key={piece.id}
              href={`/${locale}/gallery`}
              className="break-inside-avoid group relative block overflow-hidden rounded-lg shadow-subtle hover:shadow-strong transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="relative aspect-auto">
                <Image
                  src={piece.image}
                  alt={piece.alt}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-sumi via-sumi/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3
                    className="font-display text-xl mb-2"
                    style={{
                      color: piece.category === 'traditional' ? 'var(--color-shu)' : 'var(--color-neon)',
                    }}
                  >
                    {piece.title}
                  </h3>
                  <span className="text-washi/70 font-body text-xs tracking-wide uppercase">
                    {piece.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
