'use client';

import { useState, useMemo, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import { Tour } from '@/types/tour';
import { serverFetch } from '@/lib/serverFetch';
import FilterSidebar from '@/components/FilterSidebar';
import type { FilterState } from '@/components/FilterSidebar';
import SortDropdown from '@/components/SortDropdown';
import type { SortOption } from '@/components/SortDropdown';
import ToursGrid from '@/components/ToursGrid';
import Pagination from '@/components/Pagination';

const ITEMS_PER_PAGE = 6;

export default function ToursPage() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    minPrice: '',
    maxPrice: '',
    rating: null,
  });
  const [sort, setSort] = useState<SortOption>('price_asc');
  const [page, setPage] = useState(1);

  const { data: tours = [], isLoading } = useQuery<Tour[]>({
    queryKey: ['tours'],
    queryFn: () => serverFetch<Tour[]>('/tours'),
  });

  const uniqueCategories = useMemo(() => {
    const cats = new Set(tours.map((t) => t.category).filter(Boolean));
    return Array.from(cats).sort();
  }, [tours]);

  const filtered = useMemo(() => {
    let result = [...tours];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.location.toLowerCase().includes(q) ||
          t.shortDescription.toLowerCase().includes(q)
      );
    }

    if (filters.category) {
      result = result.filter((t) => t.category === filters.category);
    }
    if (filters.minPrice) {
      result = result.filter((t) => t.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter((t) => t.price <= Number(filters.maxPrice));
    }
    if (filters.rating !== null) {
      result = result.filter((t) => t.rating >= (filters.rating as number));
    }

    result.sort((a, b) => {
      switch (sort) {
        case 'price_asc': return a.price - b.price;
        case 'price_desc': return b.price - a.price;
        case 'rating_desc': return b.rating - a.rating;
        default: return 0;
      }
    });

    return result;
  }, [tours, search, filters, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paginated = filtered.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);

  const handleFilterChange = useCallback((f: FilterState) => {
    setFilters(f);
    setPage(1);
  }, []);

  const handleSortChange = useCallback((s: SortOption) => {
    setSort(s);
    setPage(1);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Tours</h1>
          <p className="text-gray-600">Discover amazing destinations and plan your next adventure.</p>
        </div>

        <div className="relative mb-8">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search tours by name, location, or description..."
            className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors text-sm"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 shrink-0">
            <FilterSidebar
              categories={uniqueCategories}
              onFilterChange={handleFilterChange}
            />
          </aside>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">
                {isLoading ? 'Loading...' : `${filtered.length} tour${filtered.length !== 1 ? 's' : ''} found`}
              </p>
              <SortDropdown value={sort} onChange={handleSortChange} />
            </div>

            <ToursGrid tours={paginated} loading={isLoading} />

            <div className="mt-10">
              <Pagination
                currentPage={safePage}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
