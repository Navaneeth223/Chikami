'use client';

import { useTranslations } from 'next-intl';

export default function PricingBlock() {
  const t = useTranslations('commissions');

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-shu rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-washi mb-12 text-center">
          {t('pricingTitle')}
        </h2>

        {/* Pricing card */}
        <div className="bg-sumi/80 backdrop-blur-sm rounded-lg border border-neon/30 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Starting price */}
            <div className="flex-1">
              <div className="text-washi/60 uppercase tracking-wider text-sm mb-2">
                {t('startingFrom')}
              </div>
              <div className="text-5xl md:text-6xl font-bold text-neon mb-2">
                ¥5,000<span className="text-3xl text-washi/60">+</span>
              </div>
              <p className="text-washi/70">
                {t('pricingNote')}
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-32 bg-washi/10" />

            {/* Current status */}
            <div className="flex-1">
              <div className="text-washi/60 uppercase tracking-wider text-sm mb-4">
                {t('currentStatus')}
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-neon animate-pulse" />
                  <span className="text-washi">{t('statusOpen')}</span>
                </div>
                <p className="text-washi/70 text-sm">
                  {t('statusNote')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-8 text-center">
          <p className="text-washi/60 text-sm">
            {t('pricingIntro')}
          </p>
        </div>
      </div>
    </section>
  );
}
