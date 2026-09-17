import type { Metadata } from 'next';

type LocaleMetadata = {
  title: string;
  description: string;
};

export const siteMetadata: Record<string, LocaleMetadata> = {
  en: {
    title: 'Chikami — Tattoo Artist & Illustrator | Osaka, Japan',
    description: 'Traditional Japanese irezumi meets digital character design. 30 years of experience in tattoo art and illustration. Based in Osaka, Japan.',
  },
  ja: {
    title: 'ちかみ — タトゥーアーティスト・イラストレーター | 大阪、日本',
    description: '伝統的な日本の和彫りとデジタルキャラクターデザインの融合。タトゥーアートとイラストレーションで30年の経験。大阪を拠点に活動。',
  },
};

export function generateMetadata(locale: string): Metadata {
  const meta = siteMetadata[locale] || siteMetadata.en;

  return {
    title: {
      default: meta.title,
      template: `%s | Chikami`,
    },
    description: meta.description,
    keywords: [
      'tattoo artist',
      'irezumi',
      'Japanese tattoo',
      'tattoo Osaka',
      'character design',
      'VTuber design',
      'illustration',
      'digital art',
      'タトゥー',
      '和彫り',
      'イラストレーター',
      '大阪',
    ],
    authors: [{ name: 'Chikami' }],
    creator: 'Chikami',
    openGraph: {
      type: 'website',
      locale: locale === 'ja' ? 'ja_JP' : 'en_US',
      alternateLocale: locale === 'ja' ? ['en_US'] : ['ja_JP'],
      title: meta.title,
      description: meta.description,
      siteName: 'Chikami Portfolio',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Chikami — Tattoo Artist & Illustrator',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      creator: '@hori76dia',
      images: ['/images/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  };
}
