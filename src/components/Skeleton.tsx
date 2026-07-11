export default function Skeleton({ className = '', width = '100%', height = '20px', ...props }: any) {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      style={{ width, height }}
      {...props}
    />
  )
}
