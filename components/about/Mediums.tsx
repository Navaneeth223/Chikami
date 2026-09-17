'use client';

import { useTranslations } from 'next-intl';

const mediumsData = [
  {
    icon: '🖥️',
    titleKey: 'digitalTitle',
    descKey: 'digitalDesc',
    color: 'from-neon to-ai',
  },
  {
    icon: '✏️',
    titleKey: 'pencilTitle',
    descKey: 'pencilDesc',
    color: 'from-washi to-sumi',
  },
  {
    icon: '🖊️',
    titleKey: 'tattooTitle',
    descKey: 'tattooDesc',
    color: 'from-shu to-kin',
  },
];

export default function Mediums() {
  const t = useTranslations('about');

  return (
    <section className="py-32 px-6 bg-sumi/50">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-washi mb-4">
            {t('mediums')}
          </h2>
          <p className="text-lg text-washi/70 max-w-2xl mx-auto">
            {t('mediumsDesc')}
          </p>
        </div>

        {/* Mediums grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediumsData.map((medium) => (
            <div
              key={medium.titleKey}
              className="group relative p-8 bg-sumi/80 backdrop-blur-sm rounded-lg border border-washi/10 hover:border-washi/30 transition-all duration-300"
            >
              {/* Gradient glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${medium.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4">{medium.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-washi mb-3">
                  {t(medium.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-washi/70 leading-relaxed">
                  {t(medium.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
