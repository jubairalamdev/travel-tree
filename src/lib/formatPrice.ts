// Format price function
export const formatPrice = (price: number, currency: string = '$'): string => {
  return `${currency}${price.toFixed(2)}`
}
