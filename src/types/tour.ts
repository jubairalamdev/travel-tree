export interface Tour {
  _id: string
  title: string
  shortDescription: string
  fullDescription: string
  price: number
  originalPrice?: number
  location: string
  category: string
  duration: string
  rating: number
  imageUrl: string
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
