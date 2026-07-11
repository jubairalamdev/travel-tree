import Link from 'next/link';
import Image from 'next/image';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { formatPrice } from '@/lib/formatPrice';
import { ratingToStars } from '@/lib/ratingToStars';

interface WeeklyTour {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  departureDate: string;
}

interface DiscoverWeeklySectionProps {
  title?: string;
  subtitle?: string;
}

const weeklyTours: WeeklyTour[] = [
  {
    id: '1',
    title: 'Bali Paradise Adventure',
    shortDescription: 'Experience the beauty of Bali with guided tours and authentic experiences',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Bali, Indonesia',
    rating: 4.8,
    reviews: 124,
    price: 1299,
    departureDate: '2024-03-15'
  },
  {
    id: '2',
    title: 'Santorini Sunset Tour',
    shortDescription: 'Watch the famous Santorini sunset with luxury accommodation and fine dining',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Santorini, Greece',
    rating: 4.9,
    reviews: 89,
    price: 1599,
    departureDate: '2024-03-22'
  },
  {
    id: '3',
    title: 'Tokyo Neon Lights',
    shortDescription: 'Explore Tokyo\'s vibrant culture, ancient temples, and modern cityscape',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Tokyo, Japan',
    rating: 4.7,
    reviews: 156,
    price: 1899,
    departureDate: '2024-04-01'
  },
  {
    id: '4',
    title: 'Swiss Alps Adventure',
    shortDescription: 'Experience the majestic Swiss Alps with hiking, skiing, and mountain scenery',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Swiss Alps, Switzerland',
    rating: 4.9,
    reviews: 203,
    price: 2199,
    departureDate: '2024-04-08'
  },
  {
    id: '5',
    title: 'Egyptian Pyramid Tour',
    shortDescription: 'Discover ancient Egypt\'s mysteries with visits to pyramids and temples',
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Cairo, Egypt',
    rating: 4.6,
    reviews: 178,
    price: 999,
    departureDate: '2024-04-15'
  },
  {
    id: '6',
    title: 'Maldives Beach Escape',
    shortDescription: 'Relax on pristine beaches and swim in crystal clear turquoise waters',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Maldives',
    rating: 4.8,
    reviews: 92,
    price: 2499,
    departureDate: '2024-04-20'
  }
];

export default function DiscoverWeeklySection({
  title = 'Discover Weekly Tours',
  subtitle = 'Handpicked tours for this week, curated just for you'
}: DiscoverWeeklySectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weeklyTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  width={800}
                  height={350}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Special Offer
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {tour.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {tour.shortDescription}
                </p>

                <div className="flex items-center space-x-4 mb-4 text-sm">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="font-semibold text-gray-900">{tour.rating}</span>
                    <span className="text-gray-500">({tour.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <MapPin size={16} />
                    <span>{tour.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-primary">
                      {formatPrice(tour.price)}
                    </p>
                  </div>
                  <Link
                    href={`/tours/${tour.id}`}
                    className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-hover transition-all duration-300 flex items-center space-x-2 group-hover:scale-105"
                  >
                    <span>Explore</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/tours"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-xl transition-all duration-300"
          >
            <span>View All Tours</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
