'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BookingCTA() {
  const t = useTranslations('home');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  return (
    <section
      className="section-padding relative"
      style={{
        background: 'linear-gradient(135deg, var(--color-ai) 0%, var(--color-sumi) 100%)',
      }}
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2
            className="font-display text-4xl md:text-5xl"
            style={{ color: 'var(--color-washi)' }}
          >
            {t('bookingCta')}
          </h2>
          
          <p
            className="font-body text-lg md:text-xl leading-relaxed"
            style={{ color: 'var(--color-washi)', opacity: 0.8 }}
          >
            Whether you're looking for traditional irezumi or vibrant character design, let's bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href={`/${locale}/commissions`}
              className="btn btn-primary"
            >
              View Commission Details
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="btn btn-secondary"
            >
              Get in Touch
            </Link>
          </div>

          {/* X/Twitter feed teaser */}
          <div className="pt-12">
            <p
              className="font-body text-sm tracking-wide mb-4"
              style={{ color: 'var(--color-kin)' }}
            >
              {t('latestUpdates')}
            </p>
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--color-sumi)',
                border: '1px solid var(--color-kin)',
              }}
            >
              <p className="text-washi/70 font-body text-sm">
                X/Twitter feed embed will go here<br />
                (Use Twitter's native widget or oEmbed)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
