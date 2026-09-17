import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chikami — Tattoo Artist & Illustrator',
  description: 'Traditional Japanese irezumi and vibrant character illustration. Drawing since four, tattooing since sixteen. Nearly three decades in the craft. Based in Japan.',
  keywords: ['tattoo artist', 'irezumi', 'Japanese tattoo', 'character design', 'VTuber design', 'illustration', 'Japan'],
  authors: [{ name: 'Chikami' }],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    alternateLocale: ['en_US'],
    siteName: 'Chikami Portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
