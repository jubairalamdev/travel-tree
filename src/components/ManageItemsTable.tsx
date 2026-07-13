'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, Trash2, ExternalLink } from 'lucide-react'
import { Tour } from '@/types/tour'
import { serverMutation } from '@/lib/serverMutation'
import { toast } from 'react-toastify'
import Modal from './Modal'
import Button from './Button'

interface ManageItemsTableProps {
  tours: Tour[]
  onDelete: (id: string) => void
}

export default function ManageItemsTable({ tours, onDelete }: ManageItemsTableProps) {
  const router = useRouter()
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [deleting, setDeleting] = useState(false)

  const handleDelete = async () => {
    if (!deleteId) return
    setDeleting(true)
    try {
      await serverMutation(`/tours/${deleteId}`, {}, 'DELETE')
      toast.success('Tour deleted successfully')
      onDelete(deleteId)
      setDeleteId(null)
    } catch (err: any) {
      toast.error(err?.message || 'Failed to delete tour')
    } finally {
      setDeleting(false)
    }
  }

  return (
    <>
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-textdark">Title</th>
              <th className="text-left py-3 px-4 font-semibold text-textdark">Price</th>
              <th className="text-left py-3 px-4 font-semibold text-textdark">Location</th>
              <th className="text-left py-3 px-4 font-semibold text-textdark">Rating</th>
              <th className="text-left py-3 px-4 font-semibold text-textdark">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour) => (
              <tr key={tour._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 font-medium text-textdark">{tour.title}</td>
                <td className="py-3 px-4 text-textgray">${tour.price.toLocaleString()}</td>
                <td className="py-3 px-4 text-textgray">{tour.location}</td>
                <td className="py-3 px-4 text-textgray">
                  <span className="text-accent">★</span> {tour.rating}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/tours/${tour._id}`}
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
                    >
                      <Eye size={15} />
                      View
                    </Link>
                    <button
                      onClick={() => setDeleteId(tour._id)}
                      className="inline-flex items-center gap-1.5 text-sm text-red-500 hover:text-red-700 font-medium"
                    >
                      <Trash2 size={15} />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
        {tours.map((tour) => (
          <div key={tour._id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 space-y-3">
            <h3 className="font-semibold text-textdark text-lg leading-snug">{tour.title}</h3>
            <div className="space-y-1 text-sm text-textgray">
              <p><span className="font-medium text-textdark">Price:</span> ${tour.price.toLocaleString()}</p>
              <p><span className="font-medium text-textdark">Location:</span> {tour.location}</p>
              <p><span className="font-medium text-textdark">Rating:</span> {'★'.repeat(Math.round(tour.rating))} {tour.rating}</p>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <Link
                href={`/tours/${tour._id}`}
                className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
              >
                <ExternalLink size={15} />
                View
              </Link>
              <button
                onClick={() => setDeleteId(tour._id)}
                className="inline-flex items-center gap-1 text-sm text-red-500 hover:text-red-700 ml-auto"
              >
                <Trash2 size={15} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Delete confirmation modal */}
      <Modal
        isOpen={!!deleteId}
        onClose={() => !deleting && setDeleteId(null)}
        title="Delete Tour"
      >
        <p className="text-textgray mb-6">
          Are you sure you want to delete this tour? This action cannot be undone.
        </p>
        <div className="flex gap-3 justify-end">
          <Button variant="outline" onClick={() => setDeleteId(null)} disabled={deleting}>
            Cancel
          </Button>
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
          >
            {deleting ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </Modal>
    </>
  )
}
