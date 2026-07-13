'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, Trash2, ExternalLink, Pencil } from 'lucide-react'
import { Tour } from '@/types/tour'
import { serverMutation } from '@/lib/serverMutation'
import { toast } from 'react-toastify'
import Modal from './Modal'
import Button from './Button'

const CATEGORIES = [
  'Adventure', 'Beach', 'Cultural', 'Hiking', 'Wildlife',
  'City Tours', 'Food & Dining', 'Luxury',
]

interface ManageItemsTableProps {
  tours: Tour[]
  onDelete: (id: string) => void
  onUpdate: (tour: Tour) => void
}

export default function ManageItemsTable({ tours, onDelete, onUpdate }: ManageItemsTableProps) {
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [deleting, setDeleting] = useState(false)
  const [editTour, setEditTour] = useState<Tour | null>(null)
  const [editForm, setEditForm] = useState({
    title: '', shortDescription: '', fullDescription: '', price: '',
    originalPrice: '', location: '', category: '', duration: '', imageUrl: '',
  })
  const [updating, setUpdating] = useState(false)

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

  const openEdit = (tour: Tour) => {
    setEditTour(tour)
    setEditForm({
      title: tour.title,
      shortDescription: tour.shortDescription,
      fullDescription: tour.fullDescription,
      price: String(tour.price),
      originalPrice: tour.originalPrice ? String(tour.originalPrice) : '',
      location: tour.location,
      category: tour.category,
      duration: tour.duration,
      imageUrl: tour.imageUrl,
    })
  }

  const handleUpdate = async () => {
    if (!editTour) return
    setUpdating(true)
    try {
      const payload: Record<string, any> = {
        title: editForm.title.trim(),
        shortDescription: editForm.shortDescription.trim(),
        fullDescription: editForm.fullDescription.trim(),
        price: Number(editForm.price),
        location: editForm.location.trim(),
        category: editForm.category,
        duration: editForm.duration.trim(),
        imageUrl: editForm.imageUrl.trim(),
      }
      if (editForm.originalPrice) {
        payload.originalPrice = Number(editForm.originalPrice)
      }
      const updated = await serverMutation<Tour>(`/tours/${editTour._id}`, payload, 'PATCH')
      toast.success('Tour updated successfully')
      onUpdate(updated)
      setEditTour(null)
    } catch (err: any) {
      toast.error(err?.message || 'Failed to update tour')
    } finally {
      setUpdating(false)
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
                      onClick={() => openEdit(tour)}
                      className="inline-flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-700 font-medium"
                    >
                      <Pencil size={15} />
                      Edit
                    </button>
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
                onClick={() => openEdit(tour)}
                className="inline-flex items-center gap-1 text-sm text-blue-500 hover:text-blue-700 font-medium"
              >
                <Pencil size={15} />
                Edit
              </button>
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

      {/* Edit tour modal */}
      <Modal
        isOpen={!!editTour}
        onClose={() => !updating && setEditTour(null)}
        title="Edit Tour"
      >
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
          <div>
            <label className="block text-sm font-semibold text-textdark mb-1">Title <span className="text-primary">*</span></label>
            <input
              value={editForm.title}
              onChange={(e) => setEditForm((p) => ({ ...p, title: e.target.value }))}
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-textdark mb-1">Price <span className="text-primary">*</span></label>
              <input
                type="number"
                value={editForm.price}
                onChange={(e) => setEditForm((p) => ({ ...p, price: e.target.value }))}
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-textdark mb-1">Original Price</label>
              <input
                type="number"
                value={editForm.originalPrice}
                onChange={(e) => setEditForm((p) => ({ ...p, originalPrice: e.target.value }))}
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-textdark mb-1">Location <span className="text-primary">*</span></label>
              <input
                value={editForm.location}
                onChange={(e) => setEditForm((p) => ({ ...p, location: e.target.value }))}
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-textdark mb-1">Category <span className="text-primary">*</span></label>
              <select
                value={editForm.category}
                onChange={(e) => setEditForm((p) => ({ ...p, category: e.target.value }))}
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm bg-white"
              >
                <option value="">Select</option>
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-textdark mb-1">Duration <span className="text-primary">*</span></label>
              <input
                value={editForm.duration}
                onChange={(e) => setEditForm((p) => ({ ...p, duration: e.target.value }))}
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-textdark mb-1">Image URL <span className="text-primary">*</span></label>
              <input
                value={editForm.imageUrl}
                onChange={(e) => setEditForm((p) => ({ ...p, imageUrl: e.target.value }))}
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-textdark mb-1">Short Description <span className="text-primary">*</span></label>
            <textarea
              rows={2}
              value={editForm.shortDescription}
              onChange={(e) => setEditForm((p) => ({ ...p, shortDescription: e.target.value }))}
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-textdark mb-1">Full Description <span className="text-primary">*</span></label>
            <textarea
              rows={3}
              value={editForm.fullDescription}
              onChange={(e) => setEditForm((p) => ({ ...p, fullDescription: e.target.value }))}
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm resize-none"
            />
          </div>
        </div>
        <div className="flex gap-3 justify-end mt-6 pt-4 border-t border-gray-100">
          <Button variant="outline" onClick={() => setEditTour(null)} disabled={updating}>
            Cancel
          </Button>
          <Button onClick={handleUpdate} disabled={updating}>
            {updating ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </Modal>
    </>
  )
}
