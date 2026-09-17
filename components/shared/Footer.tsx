'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations('footer');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // Placeholder - implement with actual email service (Resend/ConvertKit/Mailchimp)
    setTimeout(() => {
      setMessage('Subscribed! Check your inbox to confirm.');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative mt-24 pt-16 pb-8"
      style={{
        backgroundColor: 'var(--color-sumi)',
        borderTop: '1px solid var(--color-ai)',
      }}
    >
      {/* Brush divider at top */}
      <div className="absolute top-0 left-0 right-0">
        <div className="brush-divider" />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Newsletter Column */}
          <div className="md:col-span-5">
            <h3 className="font-display text-2xl mb-4" style={{ color: 'var(--color-washi)' }}>
              {t('newsletter')}
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('newsletterPlaceholder')}
                required
                className="w-full px-4 py-3 bg-ai/30 border border-kin/30 rounded text-washi placeholder-washi/50 focus:outline-none focus:border-kin transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full md:w-auto"
              >
                {isSubmitting ? 'Subscribing...' : t('newsletterSubmit')}
              </button>
              {message && (
                <p className="text-sm text-neon mt-2">{message}</p>
              )}
            </form>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="font-display text-xl mb-4" style={{ color: 'var(--color-washi)' }}>
              Navigate
            </h3>
            <nav className="space-y-2">
              {[
                { href: `/${locale}/gallery`, label: 'Work' },
                { href: `/${locale}/about`, label: 'About' },
                { href: `/${locale}/commissions`, label: 'Commissions' },
                { href: `/${locale}/blog`, label: 'Journal' },
                { href: `/${locale}/contact`, label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-washi/70 hover:text-kin transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4">
            <h3 className="font-display text-xl mb-4" style={{ color: 'var(--color-washi)' }}>
              {t('social')}
            </h3>
            <div className="space-y-3">
              <a
                href="https://x.com/chikami"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-washi/70 hover:text-kin transition-colors group"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span style={{ fontFamily: 'var(--font-body)' }}>X / Twitter</span>
              </a>
              <a
                href="https://instagram.com/chikami"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-washi/70 hover:text-kin transition-colors group"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span style={{ fontFamily: 'var(--font-body)' }}>Instagram</span>
              </a>
              <a
                href="https://line.me/R/ti/p/@chikami"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-washi/70 hover:text-kin transition-colors group"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                <span style={{ fontFamily: 'var(--font-body)' }}>LINE</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
          style={{ borderColor: 'var(--color-ai)', color: 'var(--color-washi)' }}
        >
          <p style={{ fontFamily: 'var(--font-body)' }}>
            {t('copyright', { year: currentYear })}
          </p>
          <div className="flex gap-6">
            <Link href={`/${locale}/privacy`} className="hover:text-kin transition-colors">
              Privacy Policy
            </Link>
            <Link href={`/${locale}/terms`} className="hover:text-kin transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
