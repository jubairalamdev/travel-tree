'use client'

import { useState, useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Tour } from '@/types/tour'
import { serverFetch } from '@/lib/serverFetch'
import { ManageItemsTable, DailyCreationChart } from '@/components'

export default function ManageItemsPage() {
  const [tours, setTours] = useState<Tour[]>([])

  const { isLoading } = useQuery<Tour[]>({
    queryKey: ['tours'],
    queryFn: async () => {
      const data = await serverFetch<Tour[]>('/tours')
      setTours(data)
      return data
    },
  })

  const handleDelete = useCallback((id: string) => {
    setTours((prev) => prev.filter((t) => t._id !== id))
  }, [])

  const handleUpdate = useCallback((updated: Tour) => {
    setTours((prev) => prev.map((t) => (t._id === updated._id ? updated : t)))
  }, [])

  if (isLoading) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-8" />
        <div className="h-64 bg-gray-100 rounded-xl animate-pulse mb-8" />
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-12 bg-gray-100 rounded-lg animate-pulse" />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-8 mt-20">Manage Tours</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <h2 className="text-lg font-semibold text-textdark mb-4">Tour Creation Trend (Last 7 Days)</h2>
        <DailyCreationChart />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-textdark mb-4">All Tours</h2>
        <ManageItemsTable tours={tours} onDelete={handleDelete} onUpdate={handleUpdate} />
      </div>
    </section>
  )
}
