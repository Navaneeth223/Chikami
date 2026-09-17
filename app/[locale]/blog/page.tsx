import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import BlogHero from '@/components/blog/BlogHero';
import BlogGrid from '@/components/blog/BlogGrid';
import { getAllPosts } from '@/lib/blog-data';
import type { BlogCategory } from '@/lib/blog-data';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('blog');

  const posts = getAllPosts();

  const categories: { value: BlogCategory | 'all'; labelEn: string; labelJa: string }[] = [
    { value: 'all', labelEn: 'All', labelJa: 'すべて' },
    { value: 'process', labelEn: 'Process', labelJa: '制作過程' },
    { value: 'flash', labelEn: 'Flash Drops', labelJa: 'フラッシュ' },
    { value: 'travel', labelEn: 'Travel', labelJa: '旅行' },
    { value: 'announcements', labelEn: 'News', labelJa: 'お知らせ' },
  ];

  return (
    <main className="min-h-screen bg-sumi">
      <BlogHero />
      <BlogGrid posts={posts} categories={categories} />
    </main>
  );
}
