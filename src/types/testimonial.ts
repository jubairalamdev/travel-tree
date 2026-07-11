export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  avatar: string
  rating: number
  company?: string
  date?: string
}

export interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoplay?: boolean
  interval?: number
}
