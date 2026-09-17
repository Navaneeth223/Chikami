'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LocationMap() {
  const t = useTranslations('contact');
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        mapRef.current,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, mapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 px-6 bg-sumi">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-washi mb-4">
            {t('locationTitle')}
          </h2>
          <p className="text-xl text-washi/70">
            {t('locationSubtitle')}
          </p>
        </div>

        {/* Map Container */}
        <div
          ref={mapRef}
          className="relative rounded-lg overflow-hidden border border-neon/30 shadow-2xl"
          style={{ height: '500px' }}
        >
          {/* Google Maps Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d419431.02155535424!2d135.2523264!3d34.6937378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e86b1f4e7b3f%3A0x6c0c0c0c0c0c0c0c!2sOsaka%2C%20Japan!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Osaka, Japan Location"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-sumi via-transparent to-transparent opacity-30" />
          </div>
        </div>

        {/* Location Details */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-sumi/80 backdrop-blur-sm rounded-lg border border-washi/10">
            <div className="text-3xl mb-2">🏙️</div>
            <div className="text-washi/60 text-sm uppercase tracking-wider mb-1">
              {t('city')}
            </div>
            <div className="text-lg font-semibold text-washi">Osaka</div>
          </div>

          <div className="p-6 bg-sumi/80 backdrop-blur-sm rounded-lg border border-washi/10">
            <div className="text-3xl mb-2">🇯🇵</div>
            <div className="text-washi/60 text-sm uppercase tracking-wider mb-1">
              {t('country')}
            </div>
            <div className="text-lg font-semibold text-washi">Japan</div>
          </div>

          <div className="p-6 bg-sumi/80 backdrop-blur-sm rounded-lg border border-washi/10">
            <div className="text-3xl mb-2">🕐</div>
            <div className="text-washi/60 text-sm uppercase tracking-wider mb-1">
              {t('timezone')}
            </div>
            <div className="text-lg font-semibold text-washi">JST (UTC+9)</div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-washi/60 text-sm">
            {t('locationNote')}
          </p>
        </div>
      </div>
    </section>
  );
}
