'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AboutTeaser() {
  const t = useTranslations('about');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  return (
    <section className="section-padding relative">
      <div className="brush-divider mb-16" />
      
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2
            className="font-display text-4xl md:text-5xl"
            style={{ color: 'var(--color-washi)' }}
          >
            {t('title')}
          </h2>
          
          <p
            className="font-body text-lg md:text-xl leading-relaxed"
            style={{ color: 'var(--color-washi)', opacity: 0.9 }}
          >
            {t('intro')}
          </p>

          <div className="pt-6">
            <Link
              href={`/${locale}/about`}
              className="btn btn-secondary inline-flex items-center gap-3 group"
            >
              <span>Read the full story</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
