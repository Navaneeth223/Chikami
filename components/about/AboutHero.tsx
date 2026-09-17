'use client';

import { useTranslations } from 'next-intl';

export default function AboutHero() {
  const t = useTranslations('about');

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-6 py-32">
      {/* Portrait image container - will add actual image later */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-sumi to-sumi" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Title with brush stroke */}
        <div className="relative inline-block">
          <h1 className="text-6xl md:text-8xl font-bold text-washi tracking-tight">
            {t('title')}
          </h1>
          <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-shu to-transparent opacity-60" />
        </div>

        {/* Intro text */}
        <p className="text-lg md:text-xl text-washi/80 max-w-2xl mx-auto leading-relaxed">
          {t('intro')}
        </p>
      </div>
    </section>
  );
}
