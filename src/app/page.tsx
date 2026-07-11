import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DiscoverWeeklySection from '@/components/DiscoverWeeklySection';
import ThreeStepsSection from '@/components/ThreeStepsSection';
import StatisticsSection from '@/components/StatisticsSection';
import TravelGuidelineSection from '@/components/TravelGuidelineSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import VideoSection from '@/components/VideoSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import TopBar from '@/components/TopBar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <DiscoverWeeklySection />
        <ThreeStepsSection />
        <StatisticsSection />
        <TravelGuidelineSection />
        <TestimonialsSection />
        <VideoSection />
        <NewsletterSection />
      </main>
      <TopBar />
      <Footer />
    </>
  );
}
