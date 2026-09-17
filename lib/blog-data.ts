export type BlogCategory = 'process' | 'flash' | 'travel' | 'announcements';

export type BlogPost = {
  id: string;
  slug: string;
  titleEn: string;
  titleJa: string;
  excerptEn: string;
  excerptJa: string;
  category: BlogCategory;
  date: string;
  coverImage: string;
  tags: string[];
  featured: boolean;
};

// Sample blog posts - replace with CMS integration later
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'dragon-sleeve-process',
    titleEn: 'Full Sleeve Dragon: From Sketch to Skin',
    titleJa: '龍の全腕タトゥー：スケッチから肌へ',
    excerptEn: 'A detailed look at the 6-month process of creating a traditional Japanese dragon sleeve, from initial consultation to final session.',
    excerptJa: '初回相談から最終セッションまで、伝統的な日本の龍のスリーブタトゥーを6ヶ月かけて制作する過程を詳しく紹介します。',
    category: 'process',
    date: '2026-09-10',
    coverImage: '/images/blog/dragon-process.jpg',
    tags: ['irezumi', 'dragon', 'sleeve', 'process'],
    featured: true,
  },
  {
    id: '2',
    slug: 'new-flash-october',
    titleEn: 'October Flash Drop: Yokai Edition',
    titleJa: '10月フラッシュドロップ：妖怪エディション',
    excerptEn: 'New flash designs available for walk-ins this month. Traditional yokai themes with modern neon accents.',
    excerptJa: '今月のウォークイン用新作フラッシュデザイン。伝統的な妖怪モチーフとモダンなネオンアクセント。',
    category: 'flash',
    date: '2026-09-05',
    coverImage: '/images/blog/yokai-flash.jpg',
    tags: ['flash', 'yokai', 'available'],
    featured: true,
  },
  {
    id: '3',
    slug: 'tokyo-guest-spot',
    titleEn: 'Guest Spot: Tokyo November',
    titleJa: 'ゲストスポット：11月東京',
    excerptEn: 'I&apos;ll be working at Studio Musashi in Tokyo for two weeks in November. Limited slots available.',
    excerptJa: '11月に2週間、東京のスタジオ ムサシで活動します。予約枠は限られています。',
    category: 'travel',
    date: '2026-08-28',
    coverImage: '/images/blog/tokyo-guest.jpg',
    tags: ['travel', 'guest-spot', 'tokyo'],
    featured: false,
  },
  {
    id: '4',
    slug: 'vtuber-model-commission',
    titleEn: 'Behind the Scenes: VTuber Model Design',
    titleJa: '舞台裏：Vtuberモデルデザイン',
    excerptEn: 'How I approach character design for VTuber models, blending traditional Japanese aesthetics with digital energy.',
    excerptJa: 'Vtuberモデルのキャラクターデザインに対するアプローチ、伝統的な日本の美学とデジタルエネルギーの融合。',
    category: 'process',
    date: '2026-08-15',
    coverImage: '/images/blog/vtuber-process.jpg',
    tags: ['digital', 'vtuber', 'character-design', 'process'],
    featured: false,
  },
  {
    id: '5',
    slug: 'commission-waitlist-open',
    titleEn: 'Commission Waitlist Now Open',
    titleJa: '依頼待機リスト受付開始',
    excerptEn: 'Opening my commission waitlist for Q4 2026. Traditional irezumi and digital character work available.',
    excerptJa: '2026年第4四半期の依頼待機リストを開始します。伝統的な和彫りとデジタルキャラクター作品が可能です。',
    category: 'announcements',
    date: '2026-08-01',
    coverImage: '/images/blog/commission-open.jpg',
    tags: ['commissions', 'announcement'],
    featured: false,
  },
  {
    id: '6',
    slug: 'traditional-tools-digital-age',
    titleEn: 'Traditional Tools in a Digital Age',
    titleJa: 'デジタル時代の伝統的な道具',
    excerptEn: 'Why I still sketch every tattoo design by hand before digitizing, and how traditional techniques inform my digital work.',
    excerptJa: 'デジタル化する前にすべてのタトゥーデザインを手描きでスケッチする理由、そして伝統的な技法がデジタル作品にどう影響するか。',
    category: 'process',
    date: '2026-07-20',
    coverImage: '/images/blog/traditional-tools.jpg',
    tags: ['process', 'traditional', 'digital', 'philosophy'],
    featured: false,
  },
];

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
