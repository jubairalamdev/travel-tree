export interface Stats {
  id: string
  label: string
  value: string
  icon: string
  trend?: string
}

export interface StatsData {
  users: number
  tours: number
  likes: number
  ratings: number
  trend: {
    users: string
    tours: string
    likes: string
    ratings: string
  }
}
