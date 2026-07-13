'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { Tour } from '@/types/tour';
import { serverFetch } from '@/lib/serverFetch';
import { formatPrice } from '@/lib/formatPrice';

interface DiscoverWeeklySectionProps {
  title?: string;
  subtitle?: string;
}

const MAX_TOURS = 6;

export default function DiscoverWeeklySection({
  title = 'Discover Weekly Tours',
  subtitle = 'Handpicked tours for this week, curated just for you'
}: DiscoverWeeklySectionProps) {
  const { data: tours = [] } = useQuery<Tour[]>({
    queryKey: ['tours'],
    queryFn: () => serverFetch<Tour[]>('/tours'),
  });

  const weeklyTours = tours.slice(0, MAX_TOURS);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 16 } }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Dynamic Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-slate-200/40">
              Weekly Curation
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-primary tracking-tight mt-3 mb-2">
              {title}
            </h2>
            <p className="text-base text-slate-500 font-medium leading-relaxed">
              {subtitle}
            </p>
          </div>
          
          <Link
            href="/tours"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 rounded-full transition-all duration-200 shadow-sm shadow-slate-100"
          >
            <span>View All Tours</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Dynamic Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {weeklyTours.map((tour) => (
            <motion.div
              key={tour._id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl border border-slate-100/80 shadow-[0_12px_35px_-20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] transition-shadow duration-300 overflow-hidden flex flex-col group h-full"
            >
              {/* Media Container */}
              <div className="relative overflow-hidden aspect-[4/3] w-full bg-slate-100">
                <Image
                  src={tour.imageUrl}
                  alt={tour.title}
                  fill
                  sizes="(max-w-7xl) 33vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Meta Badges */}
                <div className="absolute inset-x-4 top-4 flex items-center justify-between pointer-events-none">
                  <span className="bg-secondary/95 text-zinc-900 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-md">
                    Special Offer
                  </span>
                  
                  <div className="flex items-center gap-1 bg-white/95 text-slate-900 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold shadow-md">
                    <Star size={13} fill="currentColor" className="text-amber-500 stroke-amber-500" />
                    <span>{tour.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 xl:p-7 flex flex-col justify-between flex-1">
                <div>
                  {/* Location & Metadata info row */}
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 mb-3 text-xs font-semibold text-slate-400">
                    <div className="flex items-center gap-1 text-slate-500">
                      <MapPin size={14} className="text-slate-400" />
                      <span>{tour.location}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-primary tracking-tight mb-2 group-hover:text-primary/80 transition-colors line-clamp-1">
                    {tour.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed font-normal mb-6 line-clamp-2">
                    {tour.shortDescription}
                  </p>
                </div>

                {/* Footer Pricing & Action Actions Block */}
                <div className="pt-5 border-t border-slate-50 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Starting from</span>
                    <span className="text-2xl font-black text-primary tracking-tight">
                      {formatPrice(tour.price)}
                    </span>
                  </div>
                  
                  <Link
                    href={`/tours/${tour._id}`}
                    className="inline-flex items-center justify-center w-11 h-11 bg-primary text-white rounded-full hover:bg-hover transition-colors shadow-sm group/btn"
                  >
                    <ArrowRight size={18} className="transform group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All CTA Trigger button */}
        <div className="text-center mt-12 md:hidden">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 font-bold text-sm rounded-xl w-full justify-center"
          >
            <span>View All Tours</span>
            <ArrowRight size={16} />
          </Link>
        </div>
        
      </div>
    </section>
  );
}
