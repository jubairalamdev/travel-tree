'use client';

import { Star, Quote, User } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  company?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Travel Tree made our honeymoon absolutely magical! The itinerary was perfectly planned, and every experience exceeded our expectations. We can\'t wait to book our next adventure with them.',
    name: 'Sarah Johnson',
    role: 'Honeymoon Couple',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
    company: 'Booking Status: Confirmed'
  },
  {
    id: '2',
    quote: 'The attention to detail and personalized service were outstanding. From the moment we booked until we returned home, every need was anticipated and exceeded. Truly a world-class experience.',
    name: 'Michael Chen',
    role: 'Business Traveler',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
    company: 'Travel Professional'
  },
  {
    id: '3',
    quote: 'I\'ve traveled extensively, but my trip with Travel Tree was the most memorable. The guides were knowledgeable, the accommodations were luxurious, and the activities were unforgettable.',
    name: 'Emily Rodriguez',
    role: 'Adventure Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
    company: 'Frequent Traveler'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from real travelers who explored the world with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    fill="currentColor"
                    className="text-accent"
                  />
                ))}
              </div>

              <Quote className="text-primary/30 mb-4" size={32} />

              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="absolute -top-1 -right-1 rounded-full bg-primary border-2 border-white" >
                    <User size={30} className="text-white" />
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                  {testimonial.company && (
                    <p className="text-xs text-primary font-medium mt-1">
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
