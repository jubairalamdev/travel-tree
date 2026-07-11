export default function Card({ children, className = '', hover = false, ...props }: any) {
  const baseClasses = 'bg-white rounded-lg shadow-md overflow-hidden'
  const hoverClasses = hover ? 'card-hover' : ''
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`} {...props}>
      {children}
    </div>
  )
}
