import type { Metadata } from 'next'
import AddItemForm from '@/components/AddItemForm'

export const metadata: Metadata = {
  title: 'Add Tour',
}

export default function AddItemPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold  mb-8 mt-20 text-primary">Add New Tour</h1>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <AddItemForm />
      </div>
    </section>
  )
}
