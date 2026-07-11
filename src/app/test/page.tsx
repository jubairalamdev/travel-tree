import Link from 'next/link'

export default function TestPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Design System Test
      </h1>
      <TestColors />
    </main>
  )
}

function TestColors() {
  return (
    <div className="space-y-4 p-8 bg-white rounded-lg shadow-lg">
      <div className="flex gap-4 flex-wrap">
        <div className="w-40 h-40 bg-primary flex items-center justify-center text-white font-bold rounded-lg shadow-md">
          Primary<br/>&#35;fc4c5a
        </div>
        <div className="w-40 h-40 bg-secondary flex items-center justify-center text-white font-bold rounded-lg shadow-md">
          Secondary<br/>&#35;7fdbc9
        </div>
        <div className="w-40 h-40 bg-accent flex items-center justify-center text-white font-bold rounded-lg shadow-md">
          Accent<br/>&#35;ffc83d
        </div>
        <div className="w-40 h-40 bg-hover flex items-center justify-center text-white font-bold rounded-lg shadow-md">
          Hover<br/>&#35;0d6efd
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-6">Test completed successfully!</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-white rounded-lg font-semibold btn-primary"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
