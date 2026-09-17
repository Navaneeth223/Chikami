import HankoLoadSequence from '@/components/home/HankoLoadSequence';
import Hero from '@/components/home/Hero';
import TwoHandsSection from '@/components/home/TwoHandsSection';
import SelectedWork from '@/components/home/SelectedWork';
import AboutTeaser from '@/components/home/AboutTeaser';
import BookingCTA from '@/components/home/BookingCTA';

export default function HomePage() {
  return (
    <>
      <HankoLoadSequence />
      <Hero />
      <TwoHandsSection />
      <SelectedWork />
      <AboutTeaser />
      <BookingCTA />
    </>
  );
}
