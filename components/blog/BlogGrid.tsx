'use client';

import { useLocale } from 'next-intl';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import type { BlogPost, BlogCategory } from '@/lib/blog-data';

gsap.registerPlugin(ScrollTrigger);

type BlogGridProps = {
  posts: BlogPost[];
  categories: { value: BlogCategory | 'all'; labelEn: string; labelJa: string }[];
};

export default function BlogGrid({ posts, categories }: BlogGridProps) {
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => post.category === selectedCategory));
    }
  }, [selectedCategory, posts]);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            delay: index * 0.1,
          }
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, [filteredPosts]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (locale === 'ja') {
      return date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Category filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === cat.value
                  ? 'bg-neon text-sumi'
                  : 'bg-sumi/80 text-washi border border-washi/20 hover:border-neon/50'
              }`}
            >
              {locale === 'ja' ? cat.labelJa : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/${locale}/blog/${post.slug}`}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <div className="group relative bg-sumi/80 backdrop-blur-sm rounded-lg overflow-hidden border border-washi/10 hover:border-neon/50 transition-all duration-300 h-full">
                {/* Cover image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-ai via-sumi to-shu relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-washi/30 text-4xl">
                    {post.category === 'process' && '🎨'}
                    {post.category === 'flash' && '⚡'}
                    {post.category === 'travel' && '✈️'}
                    {post.category === 'announcements' && '📢'}
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Featured badge */}
                  {post.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-neon text-sumi text-xs font-bold rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center gap-3 mb-3 text-sm">
                    <span className="text-neon font-semibold">
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </span>
                    <span className="text-washi/40">•</span>
                    <span className="text-washi/60">{formatDate(post.date)}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-washi mb-3 group-hover:text-neon transition-colors duration-300">
                    {locale === 'ja' ? post.titleJa : post.titleEn}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-washi/70 leading-relaxed mb-4 line-clamp-3">
                    {locale === 'ja' ? post.excerptJa : post.excerptEn}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-ai/30 text-washi/70 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-washi/60 text-lg">
              {locale === 'ja' ? 'この カテゴリーの投稿はありません。' : 'No posts in this category.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
