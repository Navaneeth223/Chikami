import { setRequestLocale } from 'next-intl/server';
import GalleryClient from '@/components/gallery/GalleryClient';
import { artworks } from '@/lib/gallery-data';

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <GalleryClient artworks={artworks} />;
}
