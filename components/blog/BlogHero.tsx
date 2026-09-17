'use client';

import { useTranslations } from 'next-intl';

export default function BlogHero() {
  const t = useTranslations('blog');

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center px-6 py-32">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-ai rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-shu rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold text-washi tracking-tight">
          {t('title')}
        </h1>
        <p className="text-xl text-washi/80 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>
    </section>
  );
}
