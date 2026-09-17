'use client';

import { useTranslations } from 'next-intl';

const steps = [
  {
    number: 1,
    titleKey: 'step1',
    descKey: 'step1Desc',
    icon: '💬',
    color: 'from-neon to-ai',
  },
  {
    number: 2,
    titleKey: 'step2',
    descKey: 'step2Desc',
    icon: '🤝',
    color: 'from-ai to-shu',
  },
  {
    number: 3,
    titleKey: 'step3',
    descKey: 'step3Desc',
    icon: '🎨',
    color: 'from-shu to-kin',
  },
  {
    number: 4,
    titleKey: 'step4',
    descKey: 'step4Desc',
    icon: '✨',
    color: 'from-kin to-neon',
  },
];

export default function ProcessFlow() {
  const t = useTranslations('commissions');

  return (
    <section className="py-32 px-6 bg-sumi/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-washi mb-16 text-center">
          {t('processTitle')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Card */}
              <div className="relative p-6 bg-sumi/80 backdrop-blur-sm rounded-lg border border-washi/10 hover:border-neon/50 transition-all duration-300">
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-5xl mb-4">{step.icon}</div>

                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neon/20 text-neon font-bold mb-4">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-washi mb-3">
                    {t(step.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-washi/70 leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>

              {/* Arrow connector (hidden on last item and mobile) */}
              {step.number < 4 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 text-neon/30 text-3xl transform -translate-y-1/2">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
