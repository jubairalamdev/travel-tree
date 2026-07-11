export default function TestColors() {
  return (
    <div className="space-y-4 p-8">
      <div className="flex gap-4">
        <div className="w-32 h-32 bg-primary flex items-center justify-center text-white font-bold">
          Primary
        </div>
        <div className="w-32 h-32 bg-secondary flex items-center justify-center text-white font-bold">
          Secondary
        </div>
        <div className="w-32 h-32 bg-accent flex items-center justify-center text-white font-bold">
          Accent
        </div>
        <div className="w-32 h-32 bg-hover flex items-center justify-center text-white font-bold">
          Hover
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-600">Click the links below to test the colors</p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="/test"
            className="px-6 py-2 bg-primary text-white rounded-lg font-semibold"
          >
            Primary Button
          </a>
          <a
            href="/test"
            className="px-6 py-2 bg-secondary text-white rounded-lg font-semibold"
          >
            Secondary Button
          </a>
          <a
            href="/test"
            className="px-6 py-2 bg-accent text-white rounded-lg font-semibold"
          >
            Accent Button
          </a>
        </div>
      </div>
    </div>
  )
}
