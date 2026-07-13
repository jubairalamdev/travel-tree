'use client'

import { useQuery } from '@tanstack/react-query'
import {
  ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area,
} from 'recharts'
import { serverFetch } from '@/lib/serverFetch'
import { useSession } from '@/lib/auth-client'

export default function PriceChart() {
  const { data: session } = useSession()
  const userId = session?.user?.id

  const { data, isLoading } = useQuery<{ date: string; count: number }[]>({
    queryKey: ['daily-creation', userId],
    queryFn: () => serverFetch(`/tours/stats/daily-creation?userId=${userId}`),
    enabled: !!userId,
  })

  if (!userId || isLoading) {
    return (
      <div className="h-64 bg-gray-50 rounded-xl animate-pulse flex items-center justify-center">
        <span className="text-textgray text-sm">Loading chart...</span>
      </div>
    )
  }

  if (!data || data.length === 0) {
    return (
      <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center">
        <span className="text-textgray text-sm">No tour data available</span>
      </div>
    )
  }

  const chartData = data.map((d) => ({
    day: new Date(d.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    Tours: d.count,
  }))

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
          <XAxis dataKey="day" stroke="#9ca3af" fontSize={11} tick={{ fill: '#9ca3af' }} />
          <YAxis stroke="#9ca3af" fontSize={11} allowDecimals={false} tick={{ fill: '#9ca3af' }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333', color: '#fff' }}
            labelStyle={{ color: '#9ca3af' }}
          />
          <Area type="monotone" dataKey="Tours" stroke="#fc4c5a" fill="#fc4c5a" fillOpacity={0.12} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
