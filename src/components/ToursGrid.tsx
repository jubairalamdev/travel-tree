'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star, MapPin } from 'lucide-react';
import { Tour } from '@/types/tour';
import { formatPrice } from '@/lib/formatPrice';
import Card from './Card';
import Skeleton from './Skeleton';

interface ToursGridProps {
  tours: Tour[];
  loading?: boolean;
}

export default function ToursGrid({ tours, loading }: ToursGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Skeleton className="aspect-[4/3] w-full" />
            <div className="p-4 space-y-3">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-5 w-1/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">No tours found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {tours.map((tour) => (
        <Link key={tour._id} href={`/tours/${tour._id}`} className="group">
          <Card hover className="h-full flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              {tour.imageUrl && (
                <Image
                  src={tour.imageUrl}
                  alt={tour.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-full">
                {tour.category}
              </div>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-1.5">
                <MapPin size={14} />
                <span className="truncate">{tour.location}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                {tour.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">
                {tour.shortDescription}
              </p>
              <div className="flex items-center justify-between pt-3 border-t">
                <div className="flex items-center gap-1">
                  <Star size={15} className="text-accent fill-current" />
                  <span className="text-sm font-semibold text-gray-700">{tour.rating}</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-primary">{formatPrice(tour.price)}</span>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
