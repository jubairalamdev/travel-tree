export interface Event {
  id: string
  title: string
  date: string
  location: string
  description: string
  image: string
  category: string
  organizer: string
  capacity: number
  registered: number
  price?: number
  isRegistrationOpen: boolean
  status: 'upcoming' | 'ongoing' | 'completed'
}

export interface EventFilters {
  category?: string
  status?: string
  date?: string
  location?: string
}
