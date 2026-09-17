'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

const faqItems = [
  { questionKey: 'faq1Q', answerKey: 'faq1A' },
  { questionKey: 'faq2Q', answerKey: 'faq2A' },
  { questionKey: 'faq3Q', answerKey: 'faq3A' },
  { questionKey: 'faq4Q', answerKey: 'faq4A' },
  { questionKey: 'faq5Q', answerKey: 'faq5A' },
  { questionKey: 'faq6Q', answerKey: 'faq6A' },
];

export default function FAQ() {
  const t = useTranslations('commissions');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-sumi/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-washi mb-16 text-center">
          {t('faqTitle')}
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-sumi/80 backdrop-blur-sm rounded-lg border border-washi/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-washi/5 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-washi pr-4">
                    {t(item.questionKey)}
                  </span>
                  <span
                    className={`text-neon text-2xl transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-washi/70 leading-relaxed border-t border-washi/10 pt-5">
                    {t(item.answerKey)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
