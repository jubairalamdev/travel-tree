'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Shield, Globe, MapPin, Quote } from 'lucide-react';
import { TeamMember } from '@/types';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'With over 15 years in the travel industry, Sarah founded Travel Tree to make extraordinary journeys accessible to everyone.',
    image: '',
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Head of Operations',
    bio: 'Marcus ensures every trip runs smoothly, managing logistics across 50+ destinations worldwide.',
    image: '',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Travel Experience Designer',
    bio: 'Elena crafts unique itineraries that blend adventure, culture, and relaxation into unforgettable experiences.',
    image: '',
  },
  {
    id: '4',
    name: 'James O\'Brien',
    role: 'Customer Relations Manager',
    bio: 'James leads our support team, ensuring every traveler feels supported from booking to return.',
    image: '',
  },
];

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To inspire and enable meaningful travel experiences that connect people with the world\'s most beautiful destinations, while promoting sustainable and responsible tourism.',
  },
  {
    icon: Heart,
    title: 'Our Passion',
    description: 'We believe travel transforms lives. Every itinerary we create is driven by a genuine love for exploration and a commitment to sharing the world\'s wonders.',
  },
  {
    icon: Shield,
    title: 'Our Promise',
    description: 'Safety, comfort, and authenticity are the cornerstones of every Travel Tree experience. We partner only with trusted local guides and verified accommodations.',
  },
  {
    icon: Globe,
    title: 'Our Impact',
    description: 'We are dedicated to eco-friendly travel practices, supporting local communities, and preserving the natural beauty of the destinations we explore.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Travel Tree was born from a simple idea — that the best journeys are the ones that 
            feel effortless. Founded in 2020, we set out to transform how people explore the 
            world by combining local expertise with seamless planning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              From a Dream to 50,000 Trips
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                What started as a small group of travel enthusiasts sharing hidden gems 
                has grown into a trusted platform connecting thousands of travelers with 
                extraordinary experiences across the globe.
              </p>
              <p>
                Today, we offer over 50,000 curated trips spanning every continent, 
                from guided cultural tours through ancient cities to adventurous treks 
                through untouched wilderness.
              </p>
              <p>
                Our team of experienced travelers, local guides, and dedicated planners 
                work tirelessly to ensure every journey tells a story worth remembering.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-secondary/30 to-primary/10 rounded-2xl flex items-center justify-center">
              <MapPin size={64} className="text-primary/40" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -right-4 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </section>

      <section className="bg-secondary/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every decision we make is guided by our core values and commitment to exceptional travel experiences.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate people dedicated to making your travel dreams a reality.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
