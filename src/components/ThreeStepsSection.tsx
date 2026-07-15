'use client';

import { motion } from 'framer-motion'; 
import { Star, ArrowRight } from 'lucide-react';
import { Suitcase, Car } from '@gravity-ui/icons';

export default function ThreeStepsSection() {
  const steps = [
    {
      icon: Suitcase,
      title: 'Choose Your Trip',
      description: 'Explore our carefully curated tours and select the perfect adventure that matches your interests and schedule.',
      badgeColor: 'text-blue-600 bg-blue-50 border-slate-200',
      accentGlow: 'group-hover:blue-500'
    },
    {
      icon: Car,
      title: 'Book Your Experience',
      description: 'Secure your spot with our easy booking process. Fill out a simple form and get instant confirmation.',
      badgeColor: 'text-emerald-600 bg-emerald-50 border-slate-200',
      accentGlow: 'group-hover:emerald-500'
    },
    {
      icon: Star,
      title: 'Enjoy Your Journey',
      description: 'Sit back and relax while we take care of everything. We ensure you have an unforgettable experience.',
      badgeColor: 'text-amber-600 bg-amber-50 border-slate-200',
      accentGlow: 'group-hover:amber-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring' as const, stiffness: 90, damping: 14 } 
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-slate-50 overflow-hidden">
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Modernized Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            Workflow
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-primary tracking-tight mt-4 mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl font-medium">
            Your seamless travel experience engineered into three simple actions.
          </p>
        </div>

        {/* Steps Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group flex flex-col h-full"
            >
              {/* Desktop Connecting Line Indicator */}
              {index < 2 && (
                <div className="hidden md:block absolute top-[44px] left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-[2px] bg-slate-200/70 z-0">
                  <div className="w-full h-full bg-slate-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                </div>
              )}

              {/* Dynamic Interactive Card Base */}
              <div className="relative z-10 bg-white border border-slate-200 rounded-3xl p-8 xl:p-10 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] group-hover:ring-4 group-hover:ring-slate-200/60 group-hover:border-gray-400 transition-all duration-300 flex flex-col justify-between flex-1">
                
                <div>
                  {/* Top Header Section inside card */}
                  <div className="flex items-center justify-between mb-8">
                    {/* Fixed: Dynamically renders step.icon instead of duplicating StepForwardIcon */}
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className={`w-14 h-14 ${step.badgeColor} border rounded-2xl flex items-center justify-center`}
                    >
                      <step.icon className="w-6 h-6 stroke-[1.8]" />
                    </motion.div>

                    <span className="text-xs font-black tracking-widest text-slate-300 uppercase select-none">
                      {`// 0${index + 1}`}
                    </span>
                  </div>

                  {/* Body Copy */}
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-3 group-hover:text-black transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-500 text-sm xl:text-base leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Conditional Dynamic Link Footers */}
                {index < 2 ? (
                  <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-900 transition-colors">
                    <span>Next: Step 0{index + 2}</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                ) : (
                  <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-slate-200"> Ready to Roll</span>
                  </div>
                )}

              </div>
            </motion.div>
          ))}

        </div>
      </motion.div>
    </section>
  );
}