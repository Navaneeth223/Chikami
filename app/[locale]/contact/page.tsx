import { setRequestLocale } from 'next-intl/server';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import TwitterFeed from '@/components/contact/TwitterFeed';
import LocationMap from '@/components/contact/LocationMap';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-sumi">
      <ContactHero />
      <ContactInfo />
      <TwitterFeed />
      <LocationMap />
    </main>
  );
}
