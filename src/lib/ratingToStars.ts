// Rating to star display function
export const ratingToStars = (rating: number): string => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
  
  let stars = ''
  for (let i = 0; i < fullStars; i++) {
    stars += '★'
  }
  if (hasHalfStar) {
    stars += '½'
  }
  for (let i = 0; i < emptyStars; i++) {
    stars += '☆'
  }
  
  return stars
}
