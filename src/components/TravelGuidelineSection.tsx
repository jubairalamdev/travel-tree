'use client';

import { motion } from 'framer-motion';
import { Sun, Mountain, Camera, Compass, Map } from 'lucide-react';

export default function TravelGuidelineSection() {
  const guidelines = [
    {
      title: 'Pack Light',
      description: 'Travel light and carry essentials only. We recommend a medium-sized suitcase for most destinations.',
      icon: Sun,
    },
    {
      title: 'Stay Connected',
      description: 'Keep your phone charged and have a portable charger handy for your adventures.',
      icon: Compass, // Fixed repeating icon
    },
    {
      title: 'Be Adventurous',
      description: 'Try local food, explore hidden gems, and make memories that last a lifetime.',
      icon: Mountain,
    },
    {
      title: 'Respect Culture',
      description: 'Learn about local customs and traditions to ensure a respectful and enjoyable experience.',
      icon: Map, // Fixed repeating icon
    },
    {
      title: 'Capture Moments',
      description: 'Bring your camera or smartphone to capture the stunning views and experiences.',
      icon: Camera,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Guidelines Content */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-200/50 px-3 py-1 rounded-full border border-slate-200/40">
              Trip Preparation
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-primary tracking-tight mt-3 mb-4">
              Travel Guidelines
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium max-w-2xl mb-10">
              Essential tips to make your journey smooth and enjoyable. Follow these guidelines for the best experience.
            </p>

            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {guidelines.map((guideline, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 group cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 bg-primary/30 text-primary rounded-xl flex items-center justify-center transition-colors">
                      <guideline.icon size={20} className="stroke-[2]" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1 group-hover:text-black transition-colors">
                      {guideline.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-normal">
                      {guideline.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Clean Organized Theme Shapes Grid */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full min-h-[500px]">
            {/* Ambient Ambient Glows in Background */}
            <div className="absolute top-12 left-12 w-64 h-64 bg-purple-200 rounded-full opacity-40 blur-3xl pointer-events-none" />
            <div className="absolute bottom-12 right-12 w-64 h-64 bg-blue-200 rounded-full opacity-40 blur-3xl pointer-events-none" />

            {/* Structured Bouncing Geometric Container */}
            <div className="relative w-full max-w-[400px] h-[450px]">
              
              {/* Purple Circle - Top Left */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0] }}
                transition={{ animate: { repeat: Infinity, duration: 4, ease: "easeInOut" }, type: 'spring' }}
                className="absolute top-0 left-4 w-52 h-52 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/20 z-20 p-6 text-center text-white"
              >
                <div>
                  <Mountain size={40} className="mx-auto mb-2 opacity-90" />
                  <p className="font-black text-base tracking-tight">Adventure Awaits</p>
                  <p className="text-xs opacity-80 mt-0.5">Explore new horizons</p>
                </div>
              </motion.div>

              {/* Blue Circle - Mid Left Offset */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, 8, 0] }}
                transition={{ delay: 0.15, animate: { repeat: Infinity, duration: 3.5, ease: "easeInOut" } }}
                className="absolute top-60 -left-4 w-36 h-36 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/10 z-30 p-4 text-center text-white"
              >
                <div>
                  <Camera size={26} className="mx-auto mb-1.5" />
                  <p className="font-extrabold text-xs tracking-tight">Capture</p>
                </div>
              </motion.div>

              {/* Green Circle - Top Right Offset */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, -8, 0] }}
                transition={{ delay: 0.2, animate: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
                className="absolute top-16 right-0 w-36 h-36 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl shadow-green-500/10 z-10 p-4 text-center text-white"
              >
                <div>
                  <Sun size={26} className="mx-auto mb-1.5" />
                  <p className="font-extrabold text-xs tracking-tight">Sunshine</p>
                </div>
              </motion.div>

              {/* Orange Circle - Bottom Right */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, 12, 0] }}
                transition={{ delay: 0.25, animate: { repeat: Infinity, duration: 4.5, ease: "easeInOut" }, type: 'spring' }}
                className="absolute bottom-0 right-4 w-56 h-56 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/20 z-20 p-6 text-center text-white"
              >
                <div>
                  <Mountain size={40} className="mx-auto mb-2 opacity-90" />
                  <p className="font-black text-base tracking-tight">Relax & Unwind</p>
                  <p className="text-xs opacity-80 mt-0.5">Enjoy your journey</p>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}