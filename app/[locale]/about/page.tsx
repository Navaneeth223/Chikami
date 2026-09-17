import { setRequestLocale } from 'next-intl/server';
import AboutHero from '@/components/about/AboutHero';
import Timeline from '@/components/about/Timeline';
import Mediums from '@/components/about/Mediums';
import Philosophy from '@/components/about/Philosophy';
import ProcessGallery from '@/components/about/ProcessGallery';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-sumi">
      <AboutHero />
      <Timeline />
      <Mediums />
      <Philosophy />
      <ProcessGallery />
    </main>
  );
}
