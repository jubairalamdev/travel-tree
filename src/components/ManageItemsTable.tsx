'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Table } from '@heroui/react'
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
      <div className="hidden md:block">
        <Table>
          <Table.Content aria-label="Manage tours" className="min-w-[700px]">
            <Table.Header>
              <Table.Column isRowHeader>Title</Table.Column>
              <Table.Column>Price</Table.Column>
              <Table.Column>Location</Table.Column>
              <Table.Column>Rating</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>
            <Table.Body>
              {tours.map((tour) => (
                <Table.Row key={tour._id}>
                  <Table.Cell className="font-medium">{tour.title}</Table.Cell>
                  <Table.Cell>${tour.price.toLocaleString()}</Table.Cell>
                  <Table.Cell>{tour.location}</Table.Cell>
                  <Table.Cell>{'★'.repeat(Math.round(tour.rating))} {tour.rating}</Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/tours/${tour._id}`}
                        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
                      >
                        <Eye size={16} />
                        View
                      </Link>
                      <button
                        onClick={() => setDeleteId(tour._id)}
                        className="inline-flex items-center gap-1 text-sm text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table>
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
