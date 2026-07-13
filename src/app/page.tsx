import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar';
import DiscoverWeeklySection from '@/components/DiscoverWeeklySection';
import ThreeStepsSection from '@/components/ThreeStepsSection';
import StatisticsSection from '@/components/StatisticsSection';
import TravelGuidelineSection from '@/components/TravelGuidelineSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import TopBar from '@/components/TopBar';

const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: false })
const VideoSection = dynamic(() => import('@/components/VideoSection'), { ssr: false })

export default function Home() {
  return (
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
  );
}
