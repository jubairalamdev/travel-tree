// TypeScript Type Definitions
// Tour type interface
// User type interface
// Navigation link types
// Stats type
// Testimonial type
// Event type
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

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  role: 'user' | 'admin' | 'guide'
}

export interface NavigationLink {
  label: string
  href: string
}

export interface Stats {
  id: string
  label: string
  value: string
  icon: string
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  avatar: string
}

export interface Event {
  id: string
  title: string
  date: string
  location: string
  description: string
  image: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
}
