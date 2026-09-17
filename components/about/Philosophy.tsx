'use client';

import { useTranslations } from 'next-intl';

export default function Philosophy() {
  const t = useTranslations('about');

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-shu rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-ai rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Title with brush accent */}
        <div className="relative inline-block mb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-washi">
            {t('philosophy')}
          </h2>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-shu via-ai to-neon" />
        </div>

        {/* Philosophy text */}
        <p className="text-xl md:text-2xl text-washi/80 leading-relaxed mb-12">
          {t('philosophyDesc')}
        </p>

        {/* Visual divider */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-shu" />
          <div className="w-2 h-2 rounded-full bg-shu" />
          <div className="w-24 h-px bg-gradient-to-r from-shu via-ai to-neon" />
          <div className="w-2 h-2 rounded-full bg-ai" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-neon" />
        </div>
      </div>
    </section>
  );
}
