'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, AnimatePresence } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link  from 'next/link';

// Dummy Data adapted from Travel Tree tours
const BANNER_DATA = [
  {
    id: 1,
    title: 'Discover Amazing',
    subtitle: 'Destinations',
    description: 'Explore the world\'s most breathtaking places with our carefully curated tours and experiences. Create unforgettable memories.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    buttonText: 'Explore Tours',
  },
  {
    id: 2,
    title: 'Experience Nature',
    subtitle: 'Adventures',
    description: 'Connect with nature and find your peace in stunning landscapes. Our guided tours take you through the most beautiful environments.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    buttonText: 'See Adventures',
  },
  {
    id: 3,
    title: 'Cultural Explorations',
    subtitle: 'Journey',
    description: 'Immerse yourself in diverse cultures and traditions. Discover the rich heritage and customs of destinations around the globe.',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    buttonText: 'Explore Cultures',
  }
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section className="w-full relative bg-zinc-950 overflow-hidden"
      initial={{ filter: "blur(10px)" }}
      animate={{ filter: "none" }}
    >
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[70vh] lg:h-[700px] hero-swiper-custom"
      >
        {BANNER_DATA.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center relative flex items-end md:items-center transition-transform duration-700 ease-out"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            >
              {/* Overlays: Ambient dark vignettes for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent md:bg-gradient-to-r md:from-zinc-950/90 md:via-zinc-950/60 md:to-transparent z-10" />

              {/* Main Content Container */}
              <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 z-20 pb-16 md:pb-0">

                {/* NEW ALTERNATIVE DESIGN: Borderless Framed Look with subtle Glassmorphic Accent */}
                <div className="max-w-xl md:max-w-2xl bg-zinc-900/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-2xl border border-white/5 md:border-none shadow-2xl md:shadow-none">

                  <AnimatePresence mode="wait">
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-6"
                      >
                        {/* Subtitle / Badge */}
                        <div className="flex items-center gap-2">
                          <span className="w-8 h-[1px] bg-white/60 hidden sm:inline-block" />
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xs md:text-sm font-semibold uppercase tracking-widest text-white/80"
                          >
                            {slide.subtitle}
                          </motion.span>
                        </div>

                        {/* Title with sleek dual-tone typography styling */}
                        <motion.h1
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-4xl sm:text-5xl lg:text-7xl font-light text-white tracking-tight leading-[1.1]"
                        >
                          {slide.title.split(' ')[0]}{' '}
                          <span className="font-extrabold block text-primary">
                            {slide.title.split(' ').slice(1).join(' ')}
                          </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-zinc-300 text-sm md:text-base lg:text-lg leading-relaxed font-normal max-w-lg"
                        >
                          {slide.description}
                        </motion.p>

                        {/* Interactive Buttons */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="pt-2 flex flex-wrap gap-4"
                        >
                          <Link
                            href="/tours"
                            className="px-7 py-3.5 text-sm font-medium text-black bg-primary hover:bg-zinc-200 transition-all rounded-full font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                          >
                            {slide.buttonText}
                          </Link>
                        </motion.div>

                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}