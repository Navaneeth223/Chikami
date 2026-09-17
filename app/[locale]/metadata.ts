import type { Metadata } from 'next';

type LocaleMetadata = {
  title: string;
  description: string;
};

export const siteMetadata: Record<string, LocaleMetadata> = {
  en: {
    title: 'Chikami — Tattoo Artist & Illustrator | Osaka, Japan',
    description: 'Traditional Japanese irezumi meets digital character design. 30 years of experience in tattoo art and illustration. Based in Osaka, Japan. Commission inquiries welcome.',
  },
  ja: {
    title: 'ちかみ — タトゥーアーティスト・イラストレーター | 大阪',
    description: '伝統的な和彫りとデジタルキャラクターデザインの融合。30年の経験を持つタトゥーアーティスト。大阪を拠点に活動。依頼受付中。',
  },
};

export function generateMetadata(locale: string): Metadata {
  const meta = siteMetadata[locale] || siteMetadata.en;
  const isJapanese = locale === 'ja';

  return {
    title: {
      default: meta.title,
      template: `%s | Chikami`,
    },
    description: meta.description,
    keywords: isJapanese
      ? [
          'タトゥー',
          'タトゥーアーティスト',
          '和彫り',
          'いれずみ',
          'イラストレーター',
          'キャラクターデザイン',
          'Vtuber',
          'デジタルアート',
          '大阪',
          '関西',
          'タトゥースタジオ',
          'フラッシュタトゥー',
          '伝統的',
          '日本',
        ]
      : [
          'tattoo artist',
          'irezumi',
          'Japanese tattoo',
          'tattoo Osaka',
          'Osaka tattoo artist',
          'character design',
          'VTuber design',
          'illustration',
          'digital art',
          'traditional tattoo',
          'tattoo flash',
          'Japan',
          'Kansai',
        ],
    authors: [{ name: 'Chikami', url: 'https://x.com/hori76dia' }],
    creator: 'Chikami',
    publisher: 'Chikami',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://chikami.vercel.app'), // Update with actual domain
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'ja': '/ja',
      },
    },
    openGraph: {
      type: 'website',
      locale: isJapanese ? 'ja_JP' : 'en_US',
      alternateLocale: isJapanese ? ['en_US'] : ['ja_JP'],
      title: meta.title,
      description: meta.description,
      siteName: 'Chikami Portfolio',
      url: '/',
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: isJapanese
            ? 'ちかみ — タトゥーアーティスト・イラストレーター'
            : 'Chikami — Tattoo Artist & Illustrator',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      site: '@hori76dia',
      creator: '@hori76dia',
      images: ['/opengraph-image'],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/favicon.ico', sizes: 'any' },
      ],
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    manifest: '/site.webmanifest',
    verification: {
      // Add when available
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
    },
  };
}
