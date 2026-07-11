export default function Button({ children, className = '', variant = 'primary', ...props }: { children?: React.ReactNode, className?: string, variant?: 'primary' | 'secondary' | 'outline', [key: string]: any }) {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300'
  const variants: Record<string, string> = {
    primary: 'bg-primary text-white hover:bg-hover btn-primary',
    secondary: 'bg-secondary text-white hover:bg-blue-600 btn-primary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  }
  
  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
