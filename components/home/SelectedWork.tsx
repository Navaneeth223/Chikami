'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Placeholder data - replace with CMS/API data
const selectedPieces = [
  { id: 1, title: 'Dragon Back Piece', category: 'traditional', thumbnail: '/images/gallery/piece1.jpg' },
  { id: 2, title: 'VTuber Character Sheet', category: 'digital', thumbnail: '/images/gallery/piece2.jpg' },
  { id: 3, title: 'Phoenix Flash', category: 'traditional', thumbnail: '/images/gallery/piece3.jpg' },
  { id: 4, title: 'Mascot Design', category: 'digital', thumbnail: '/images/gallery/piece4.jpg' },
  { id: 5, title: 'Koi Sleeve', category: 'traditional', thumbnail: '/images/gallery/piece5.jpg' },
];

export default function SelectedWork() {
  const t = useTranslations('home');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedPieces.map((piece, index) => (
            <Link
              key={piece.id}
              href={`/${locale}/gallery?piece=${piece.id}`}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden shadow-subtle hover:shadow-strong transition-shadow duration-300"
              style={{
                backgroundColor: piece.category === 'traditional' ? 'var(--color-ai)' : 'var(--color-sumi)',
              }}
            >
              {/* Placeholder for actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="text-5xl">{piece.category === 'traditional' ? '🐉' : '✨'}</div>
                  <p className="text-washi/70 font-body text-sm px-4">
                    Placeholder:<br />{piece.title}
                  </p>
                </div>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-sumi/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
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
