'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { Star, MapPin, Clock, Tag } from 'lucide-react';
import { toast } from 'react-toastify';
import { Tour } from '@/types/tour';
import { serverFetch } from '@/lib/serverFetch';
import { formatPrice } from '@/lib/formatPrice';
import Card from './Card';
import Button from './Button';
import Skeleton from './Skeleton';

interface TourDetailsClientProps {
  tourId: string;
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function TourDetailsClient({ tourId }: TourDetailsClientProps) {
  const { data: tour, isLoading, error } = useQuery<Tour>({
    queryKey: ['tour', tourId],
    queryFn: () => serverFetch<Tour>(`/tours/${tourId}`),
  });

  const { data: allTours = [] } = useQuery<Tour[]>({
    queryKey: ['tours'],
    queryFn: () => serverFetch<Tour[]>('/tours'),
  });

  const [heroLoaded, setHeroLoaded] = useState(false);

  const relatedTours = useMemo(() => {
    if (!tour || !allTours.length) return [];
    return shuffleArray(
      allTours.filter((t) => t._id !== tour._id && t.category === tour.category)
    ).slice(0, 4);
  }, [tour, allTours]);

  if (isLoading) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-[400px] w-full rounded-xl mb-8" />
          <Skeleton className="h-8 w-2/3 mb-3" />
          <Skeleton className="h-5 w-1/3 mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-32 w-full rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !tour) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tour Not Found</h2>
          <p className="text-gray-600 mb-6">The tour you are looking for does not exist or has been removed.</p>
          <Link href="/tours">
            <Button>Back to Tours</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tours" className="hover:text-primary transition-colors">Tours</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate">{tour.title}</span>
        </nav>

        <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden mb-8">
          {!heroLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse z-[1]" />
          )}
          {tour.imageUrl && (
            <Image
              src={tour.imageUrl}
              alt={tour.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              onLoad={() => setHeroLoaded(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full mb-3">
              {tour.category}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">{tour.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
              <div className="flex items-center gap-1.5">
                <MapPin size={16} />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star size={16} className="text-accent fill-current" />
                <span>{tour.rating}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">About This Tour</h2>
              <p className="text-gray-600 leading-relaxed">{tour.fullDescription}</p>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tour Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Tag size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="font-bold text-xl text-primary">{formatPrice(tour.price)}</p>
                    {tour.originalPrice && (
                      <p className="text-xs text-gray-400 line-through">{formatPrice(tour.originalPrice)}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="font-semibold text-gray-900">{tour.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Tag size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Category</p>
                    <p className="font-semibold text-gray-900 capitalize">{tour.category}</p>
                  </div>
                </div>
              </div>
              <Button
                className="w-full text-center mt-6"
                onClick={() => toast.success(`${tour.title} has been added!`)}
              >
                Book Now
              </Button>
            </Card>
          </div>
        </div>

        {relatedTours.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Related Tours</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedTours.map((t) => (
                <Link key={t._id} href={`/tours/${t._id}`} className="group">
                  <Card hover className="h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      {t.imageUrl && (
                        <Image
                          src={t.imageUrl}
                          alt={t.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        {t.category}
                      </div>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-1.5">
                        <MapPin size={14} />
                        <span className="truncate">{t.location}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                        {t.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">
                        {t.shortDescription}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t">
                        <div className="flex items-center gap-1">
                          <Star size={15} className="text-accent fill-current" />
                          <span className="text-sm font-semibold text-gray-700">{t.rating}</span>
                        </div>
                        <span className="text-lg font-bold text-primary">{formatPrice(t.price)}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
