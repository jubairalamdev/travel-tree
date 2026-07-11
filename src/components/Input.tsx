export default function Input({ className = '', ...props }: any) {
  return (
    <input
      className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors ${className}`}
      {...props}
    />
  )
}
