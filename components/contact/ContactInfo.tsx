'use client';

import { useTranslations } from 'next-intl';

export default function ContactInfo() {
  const t = useTranslations('contact');

  const contactMethods = [
    {
      icon: '✉️',
      label: t('email'),
      value: 'horimutsu@example.com',
      href: 'mailto:horimutsu@example.com',
      color: 'from-neon to-ai',
    },
    {
      icon: '🐦',
      label: 'X / Twitter',
      value: '@hori76dia',
      href: 'https://x.com/hori76dia',
      color: 'from-ai to-neon',
    },
    {
      icon: '📍',
      label: t('location'),
      value: 'Osaka, Japan',
      href: null,
      color: 'from-shu to-kin',
    },
  ];

  return (
    <section className="py-32 px-6 bg-sumi/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-washi mb-16 text-center">
          {t('getInTouch')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method) => (
            <div
              key={method.label}
              className="group relative bg-sumi/80 backdrop-blur-sm rounded-lg border border-washi/10 hover:border-neon/50 p-8 transition-all duration-300"
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="text-5xl mb-4">{method.icon}</div>
                <div className="text-washi/60 text-sm uppercase tracking-wider mb-2">
                  {method.label}
                </div>
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-lg font-semibold text-washi hover:text-neon transition-colors duration-300"
                  >
                    {method.value}
                  </a>
                ) : (
                  <div className="text-lg font-semibold text-washi">
                    {method.value}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* LINE Official Account */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-sumi/80 backdrop-blur-sm rounded-lg border border-neon/30 p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon/20 mb-4">
              <span className="text-3xl">💬</span>
            </div>
            <h3 className="text-2xl font-bold text-washi mb-2">
              {t('line')}
            </h3>
            <p className="text-washi/70 mb-6">
              {t('lineDesc')}
            </p>
            <a
              href="https://line.me/R/ti/p/@chikami"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-neon hover:bg-neon/90 text-sumi font-bold rounded-lg transition-all duration-300"
            >
              <span>LINE公式アカウント</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
