'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import HankoMark from './HankoMark';

export default function Navigation({ locale }: { locale: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}/gallery`, label: t('work') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/commissions`, label: t('commissions') },
    { href: `/${locale}/blog`, label: t('blog') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'ja' : 'en';
    const currentPath = pathname.replace(`/${locale}`, '');
    window.location.href = `/${newLocale}${currentPath}`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-sumi/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      style={{
        borderBottom: isScrolled ? '1px solid var(--color-ai)' : 'none',
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo / Hanko Mark */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="w-10 h-10 relative">
              <HankoMark className="w-full h-full transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span
              className="font-display text-xl tracking-wide transition-colors duration-300"
              style={{ color: 'var(--color-washi)' }}
            >
              CHIKAMI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm tracking-wide transition-all duration-300 relative group ${
                  pathname === link.href
                    ? 'text-kin'
                    : 'text-washi hover:text-kin'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-px bg-kin transform origin-left transition-transform duration-300 ${
                    pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLocale}
              className="font-body text-sm tracking-wide px-3 py-1 rounded border border-kin text-kin hover:bg-kin hover:text-sumi transition-all duration-300"
              aria-label="Toggle language"
            >
              {locale === 'en' ? '日本語' : 'EN'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center group"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`w-6 h-0.5 bg-washi transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-washi transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-washi transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 pt-2 space-y-4 border-t border-ai mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block font-body text-base py-2 transition-colors duration-300 ${
                  pathname === link.href ? 'text-kin' : 'text-washi hover:text-kin'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleLocale}
              className="w-full text-left font-body text-base py-2 text-kin hover:text-washi transition-colors duration-300"
            >
              {locale === 'en' ? '日本語に切り替え' : 'Switch to English'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
