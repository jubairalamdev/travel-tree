'use client';

import { motion } from 'framer-motion'; // or 'framer-motion'
import { Users, MapPin, Heart, Star } from 'lucide-react';

export default function StatisticsSection() {
  const stats = [
    {
      icon: Users,
      title: 'Happy Travelers',
      value: '50,000+',
      description: 'Satisfied customers tracking their memory book.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 border-blue-100',
      shadowGlow: 'hover:shadow-blue-500/10'
    },
    {
      icon: MapPin,
      title: 'Destinations',
      value: '500+',
      description: 'Handpicked exotic travel locations worldwide.',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 border-emerald-100',
      shadowGlow: 'hover:shadow-emerald-500/10'
    },
    {
      icon: Heart,
      title: 'Total Likes',
      value: '120K',
      description: 'Authentic 5-star customer shared reviews.',
      color: 'text-rose-600',
      bgColor: 'bg-rose-50 border-rose-100',
      shadowGlow: 'hover:shadow-rose-500/10'
    },
    {
      icon: Star,
      title: 'Average Rating',
      value: '4.9',
      description: 'Top-tier overall customer satisfaction rate.',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50 border-amber-100',
      shadowGlow: 'hover:shadow-amber-500/10'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 80, damping: 15 } 
    }
  };

  return (
    <section className="relative py-20 lg:py-32 bg-slate-50/50 overflow-hidden">
      {/* Dynamic Structural Grid Background lines for clean modernism */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Subtle, premium header to ground the cards */}
        <div className="text-center md:text-left mb-16 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-200/60 px-3 py-1 rounded-full">
            Our Legacy
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight mt-3">
            By the numbers.
          </h2>
        </div>

        {/* Asymmetric offset Grid system */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02
              }}
              className={`bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] ${stat.shadowGlow} transition-shadow duration-500 cursor-pointer flex flex-col justify-between h-full`}
            >
              <div>
                {/* Floating Rounded Accent Icon Box */}
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`${stat.bgColor} w-14 h-14 border rounded-2xl flex items-center justify-center mb-8`}
                >
                  <stat.icon size={26} className={stat.color} />
                </motion.div>

                {/* Main statistical tracking header */}
                <h3 className="text-4xl xl:text-5xl font-black text-slate-900 tracking-tight mb-1">
                  {stat.value}
                </h3>

                <p className="text-base font-bold text-slate-800 mb-2">
                  {stat.title}
                </p>
              </div>

              <p className="text-sm text-slate-400 font-medium leading-relaxed pt-2 border-t border-slate-50">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}