'use client'

import dynamic from 'next/dynamic'
import DiscoverWeeklySection from '@/components/DiscoverWeeklySection'
import ThreeStepsSection from '@/components/ThreeStepsSection'
import StatisticsSection from '@/components/StatisticsSection'
import TravelGuidelineSection from '@/components/TravelGuidelineSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import NewsletterSection from '@/components/NewsletterSection'

function HeroFallback() {
  return (
    <section className="w-full h-[70vh] lg:h-[700px] bg-zinc-300 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-300 animate-pulse" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 w-full">
          <div className="max-w-xl space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-[1px] bg-white/20" />
              <div className="h-4 w-32 bg-white/20 rounded animate-pulse" />
            </div>
            <div className="h-12 w-72 bg-white/20 rounded-lg animate-pulse" />
            <div className="h-12 w-96 bg-white/20 rounded-lg animate-pulse" />
            <div className="h-5 w-80 bg-white/10 rounded animate-pulse" />
            <div className="h-5 w-64 bg-white/10 rounded animate-pulse" />
            <div className="pt-2">
              <div className="h-12 w-36 bg-white/20 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: false, loading: () => <HeroFallback /> })
const VideoSection = dynamic(() => import('@/components/VideoSection'), { ssr: false })

export default function HomeClient() {
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
  )
}