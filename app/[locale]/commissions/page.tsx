import { setRequestLocale } from 'next-intl/server';
import CommissionsHero from '@/components/commissions/CommissionsHero';
import ProcessFlow from '@/components/commissions/ProcessFlow';
import PricingBlock from '@/components/commissions/PricingBlock';
import FAQ from '@/components/commissions/FAQ';
import BookingForm from '@/components/commissions/BookingForm';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function CommissionsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-sumi">
      <CommissionsHero />
      <ProcessFlow />
      <PricingBlock />
      <FAQ />
      <BookingForm />
    </main>
  );
}
