export interface Tour {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  price: number
  image: string
  location: string
  rating: number
  reviews: number
  duration: string
  groupSize: number
  difficulty: 'Easy' | 'Moderate' | 'Hard'
  departureDate: string
  featured: boolean
  tags: string[]
}

export interface TourFilters {
  category?: string
  minPrice?: number
  maxPrice?: number
  rating?: number
  duration?: string
  difficulty?: string
}

export interface PaginatedTours {
  tours: Tour[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}
