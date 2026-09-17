'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

export default function TwitterFeed() {
  const t = useTranslations('contact');

  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-32 px-6 bg-sumi/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-washi mb-4">
            {t('followWork')}
          </h2>
          <p className="text-xl text-washi/70">
            {t('followDesc')}
          </p>
        </div>

        {/* Twitter Embed */}
        <div className="relative">
          {/* Decorative background */}
          <div className="absolute -inset-4 bg-gradient-to-br from-neon/10 via-ai/10 to-shu/10 rounded-lg blur-xl" />
          
          <div className="relative bg-sumi/80 backdrop-blur-sm rounded-lg border border-neon/30 p-8">
            <a
              className="twitter-timeline"
              data-height="600"
              data-theme="dark"
              data-chrome="noheader nofooter noborders transparent"
              href="https://twitter.com/hori76dia?ref_src=twsrc%5Etfw"
            >
              Loading tweets by @hori76dia...
            </a>
          </div>
        </div>

        {/* Direct link */}
        <div className="mt-8 text-center">
          <a
            href="https://x.com/hori76dia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-ai hover:bg-ai/90 text-washi font-bold rounded-lg transition-all duration-300 group"
          >
            <span>View on X / Twitter</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
