'use client';

import { useState } from 'react';
import { RotateCcw, Star } from 'lucide-react';

export interface FilterState {
  category: string;
  minPrice: string;
  maxPrice: string;
  rating: number | null;
}

interface FilterSidebarProps {
  categories: string[];
  onFilterChange: (filters: FilterState) => void;
}

const initialFilters: FilterState = {
  category: '',
  minPrice: '',
  maxPrice: '',
  rating: null,
};

export default function FilterSidebar({ categories, onFilterChange }: FilterSidebarProps) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const updateFilter = (key: keyof FilterState, value: string | number | null) => {
    const next = { ...filters, [key]: value };
    setFilters(next);
    onFilterChange(next);
  };

  const reset = () => {
    setFilters(initialFilters);
    onFilterChange(initialFilters);
  };

  const hasActiveFilters = filters.category || filters.minPrice || filters.maxPrice || filters.rating;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={reset}
            className="flex items-center gap-1 text-sm text-primary hover:underline"
          >
            <RotateCcw size={14} />
            Reset
          </button>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
        <select
          value={filters.category}
          onChange={(e) => updateFilter('category', e.target.value)}
          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors bg-white text-sm"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice}
            onChange={(e) => updateFilter('minPrice', e.target.value)}
            className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors text-sm"
          />
          <span className="text-gray-400">—</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(e) => updateFilter('maxPrice', e.target.value)}
            className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
        <div className="flex gap-1">
          {[5, 4, 3, 2, 1].map((star) => (
            <button
              key={star}
              onClick={() => updateFilter('rating', filters.rating === star ? null : star)}
              className={`p-1.5 rounded-lg transition-colors ${
                filters.rating && star <= filters.rating
                  ? 'text-accent'
                  : 'text-gray-300 hover:text-gray-400'
              }`}
            >
              <Star size={22} fill={filters.rating && star <= filters.rating ? 'currentColor' : 'none'} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
