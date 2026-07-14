'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Input } from '@/components'
import { serverMutation } from '@/lib/serverMutation'
import { toast } from 'react-toastify'

interface FormData {
  title: string
  shortDescription: string
  fullDescription: string
  price: string
  originalPrice: string
  location: string
  category: string
  duration: string
  imageUrl: string
}

interface FormErrors {
  title?: string
  shortDescription?: string
  fullDescription?: string
  price?: string
  originalPrice?: string
  location?: string
  category?: string
  duration?: string
  imageUrl?: string
}

const CATEGORIES = [
  'Adventure',
  'Beach',
  'Cultural',
  'Hiking',
  'Wildlife',
  'City Tours',
  'Food & Dining',
  'Luxury',
]

const inputStyle = (hasError: boolean) =>
  `w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-primary transition-colors ${
    hasError ? 'border-red-400' : 'border-gray-200'
  }`

export default function AddItemForm() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    title: '',
    shortDescription: '',
    fullDescription: '',
    price: '',
    originalPrice: '',
    location: '',
    category: '',
    duration: '',
    imageUrl: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.title.trim()) newErrors.title = 'Title is required'

    if (!formData.shortDescription.trim()) {
      newErrors.shortDescription = 'Short description is required'
    } else if (formData.shortDescription.trim().length < 10) {
      newErrors.shortDescription = 'Short description must be at least 10 characters'
    }

    if (!formData.fullDescription.trim()) {
      newErrors.fullDescription = 'Full description is required'
    } else if (formData.fullDescription.trim().length < 20) {
      newErrors.fullDescription = 'Full description must be at least 20 characters'
    }

    if (!formData.price.trim()) {
      newErrors.price = 'Price is required'
    } else if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      newErrors.price = 'Price must be a positive number'
    }

    if (formData.originalPrice.trim()) {
      if (isNaN(Number(formData.originalPrice)) || Number(formData.originalPrice) <= 0) {
        newErrors.originalPrice = 'Original price must be a positive number'
      }
    }

    if (!formData.location.trim()) newErrors.location = 'Location is required'

    if (!formData.category) newErrors.category = 'Category is required'

    if (!formData.duration.trim()) newErrors.duration = 'Duration is required'

    if (!formData.imageUrl.trim()) {
      newErrors.imageUrl = 'Image URL is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!validateForm()) return

    setLoading(true)
    try {
      const payload: Record<string, any> = {
        title: formData.title.trim(),
        shortDescription: formData.shortDescription.trim(),
        fullDescription: formData.fullDescription.trim(),
        price: Number(formData.price),
        originalPrice: formData.originalPrice ? Number(formData.originalPrice) : undefined,
        location: formData.location.trim(),
        category: formData.category,
        duration: formData.duration.trim(),
        imageUrl: formData.imageUrl.trim(),
      }
      await serverMutation('/tours', payload)
      toast.success('Tour added successfully!')
      router.push('/tours')
    } catch (err: any) {
      const message = err?.message || 'Failed to add tour'
      setError(message)
      toast.error(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-textdark mb-1.5">
            Title <span className="text-primary">*</span>
          </label>
          <Input
            value={formData.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('title', e.target.value)}
            className={errors.title ? '!border-red-400' : ''}
            placeholder="Enter tour title"
          />
          {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-textdark mb-1.5">
            Location <span className="text-primary">*</span>
          </label>
          <Input
            value={formData.location}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('location', e.target.value)}
            className={errors.location ? '!border-red-400' : ''}
            placeholder="e.g. Cox's Bazar, Bangladesh"
          />
          {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-textdark mb-1.5">
            Category <span className="text-primary">*</span>
          </label>
          <select
            value={formData.category}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange('category', e.target.value)}
            className={inputStyle(!!errors.category)}
          >
            <option value="">Select a category</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-textdark mb-1.5">
            Duration <span className="text-primary">*</span>
          </label>
          <Input
            value={formData.duration}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('duration', e.target.value)}
            className={errors.duration ? '!border-red-400' : ''}
            placeholder="e.g. 3 Days / 2 Nights"
          />
          {errors.duration && <p className="mt-1 text-sm text-red-600">{errors.duration}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-textdark mb-1.5">
            Price ($) <span className="text-primary">*</span>
          </label>
          <Input
            type="number"
            min="0"
            step="0.01"
            value={formData.price}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('price', e.target.value)}
            className={errors.price ? '!border-red-400' : ''}
            placeholder="e.g. 299"
          />
          {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-textdark mb-1.5">
            Original Price ($)
          </label>
          <Input
            type="number"
            min="0"
            step="0.01"
            value={formData.originalPrice}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('originalPrice', e.target.value)}
            className={errors.originalPrice ? '!border-red-400' : ''}
            placeholder="e.g. 499 (optional)"
          />
          {errors.originalPrice && <p className="mt-1 text-sm text-red-600">{errors.originalPrice}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-textdark mb-1.5">
          Short Description <span className="text-primary">*</span>
        </label>
          <textarea
          value={formData.shortDescription}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange('shortDescription', e.target.value)}
          rows={3}
          className={inputStyle(!!errors.shortDescription)}
          placeholder="Brief overview of the tour (min 10 characters)"
        />
        {errors.shortDescription && <p className="mt-1 text-sm text-red-600">{errors.shortDescription}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-textdark mb-1.5">
          Full Description <span className="text-primary">*</span>
        </label>
          <textarea
          value={formData.fullDescription}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange('fullDescription', e.target.value)}
          rows={6}
          className={inputStyle(!!errors.fullDescription)}
          placeholder="Detailed description of the tour (min 20 characters)"
        />
        {errors.fullDescription && <p className="mt-1 text-sm text-red-600">{errors.fullDescription}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-textdark mb-1.5">
          Image URL <span className="text-primary">*</span>
        </label>
        <Input
          value={formData.imageUrl}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('imageUrl', e.target.value)}
          className={errors.imageUrl ? '!border-red-400' : ''}
          placeholder="https://example.com/image.jpg"
        />
        {errors.imageUrl && <p className="mt-1 text-sm text-red-600">{errors.imageUrl}</p>}
      </div>

      <div className="flex gap-4 pt-2">
        <Button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Add Tour'}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}
