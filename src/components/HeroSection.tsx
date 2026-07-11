'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  searchPlaceholder: string;
}

const slides: Slide[] = [
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Discover Amazing',
    subtitle: 'Destinations',
    description: 'Explore the world\'s most breathtaking places',
    searchPlaceholder: 'Where do you want to go?'
  },
  {
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Experience Nature',
    subtitle: 'Adventures',
    description: 'Connect with nature and find your peace',
    searchPlaceholder: 'Find your adventure'
  },
  {
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Cultural Explorations',
    subtitle: 'Journey',
    description: 'Immerse yourself in diverse cultures',
    searchPlaceholder: 'Start your journey'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={isMobile ? 0 : 20}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
                    {slide.title} <span className="text-primary"> {slide.subtitle}</span>
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-6">
                    {slide.description}
                  </p>
                </motion.div>

                {!isMobile && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-8"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 max-w-xl mx-auto">
                      <form className="flex gap-4">
                        <div className="flex-1 relative">
                          <ArrowRight className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="text"
                            placeholder={slide.searchPlaceholder}
                            className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <button
                          type="submit"
                          className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-hover transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <span>Search</span>
                          <ArrowRight size={18} />
                        </button>
                      </form>
                    </div>
                  </motion.div>
                )}
              </div>

              {!isMobile && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4">
                  <button className="swiper-button-prev bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all">
                    <ArrowRight className="rotate-180" size={24} />
                  </button>
                  <button className="swiper-button-next bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all">
                    <ArrowRight size={24} />
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
