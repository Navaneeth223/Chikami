import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/request';
import { setRequestLocale } from 'next-intl/server';
import { Fraunces, Instrument_Sans } from 'next/font/google';
import GSAPProvider from '@/components/shared/GSAPProvider';
import SmoothScroll from '@/components/shared/SmoothScroll';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';

// Display font - Fraunces (Latin)
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

// Body font - Instrument Sans (Latin)
const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${fraunces.variable} ${instrumentSans.variable}`}>
      <head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@400;500;600;700&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@400;500;600;700&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <GSAPProvider>
            <SmoothScroll>
              <a href="#main-content" className="skip-to-content">
                Skip to content
              </a>
              <Navigation locale={locale} />
              <main id="main-content">{children}</main>
              <Footer locale={locale} />
            </SmoothScroll>
          </GSAPProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
