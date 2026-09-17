export default function StructuredData({ locale }: { locale: string }) {
  const isJapanese = locale === 'ja';

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Chikami',
    alternateName: isJapanese ? 'ちかみ' : 'Chikami',
    jobTitle: isJapanese ? 'タトゥーアーティスト・イラストレーター' : 'Tattoo Artist & Illustrator',
    description: isJapanese
      ? '伝統的な和彫りとデジタルキャラクターデザインを専門とする30年の経験を持つアーティスト'
      : 'Artist specializing in traditional Japanese irezumi and digital character design with 30 years of experience',
    url: 'https://chikami.vercel.app', // Update with actual domain
    image: 'https://chikami.vercel.app/opengraph-image',
    sameAs: [
      'https://x.com/hori76dia',
      'https://twitter.com/hori76dia',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: isJapanese ? '大阪' : 'Osaka',
      addressRegion: isJapanese ? '大阪府' : 'Osaka',
      addressCountry: isJapanese ? '日本' : 'Japan',
    },
    knowsAbout: isJapanese
      ? ['和彫り', 'イレズミ', 'タトゥー', 'キャラクターデザイン', 'イラストレーション', 'Vtuberデザイン']
      : ['Irezumi', 'Japanese Tattoo', 'Tattoo Art', 'Character Design', 'Illustration', 'VTuber Design'],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://chikami.vercel.app',
    name: 'Chikami',
    alternateName: isJapanese ? 'ちかみ' : 'Chikami',
    description: isJapanese
      ? '大阪を拠点とするタトゥーアーティスト。伝統的な和彫りとデジタルキャラクターデザインを提供。'
      : 'Tattoo artist based in Osaka, Japan. Specializing in traditional irezumi and digital character design.',
    url: 'https://chikami.vercel.app',
    image: 'https://chikami.vercel.app/opengraph-image',
    priceRange: '¥¥¥',
    telephone: '',
    address: {
      '@type': 'PostalAddress',
      addressLocality: isJapanese ? '大阪' : 'Osaka',
      addressRegion: isJapanese ? '大阪府' : 'Osaka',
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.6937,
      longitude: 135.5023,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '18:00',
    },
    sameAs: [
      'https://x.com/hori76dia',
    ],
    paymentAccepted: isJapanese ? '現金, クレジットカード' : 'Cash, Credit Card',
    currenciesAccepted: 'JPY',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Chikami',
    alternateName: isJapanese ? 'ちかみポートフォリオ' : 'Chikami Portfolio',
    url: 'https://chikami.vercel.app',
    description: isJapanese
      ? '伝統的な和彫りとデジタルキャラクターデザインのポートフォリオ'
      : 'Portfolio of traditional Japanese irezumi and digital character design',
    inLanguage: [isJapanese ? 'ja-JP' : 'en-US'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://chikami.vercel.app/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
