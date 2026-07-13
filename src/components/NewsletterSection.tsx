"use client"

import { Mail, MapPin, Camera, Download } from 'lucide-react';
import { toast } from 'react-toastify';

export default function NewsletterSection() {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-yellow-200 rounded-full opacity-40 blur-2xl" />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-purple-200 rounded-full opacity-40 blur-2xl" />

            <div className="relative z-10 space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
                    <MapPin size={32} className="text-yellow-600" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Never Miss an Adventure
                  </h3>
                  <p className="text-gray-600">
                    Get the latest travel deals, hidden gems, and exclusive offers delivered straight to your inbox.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                    <Camera size={32} className="text-purple-600" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Beautiful Destinations
                  </h3>
                  <p className="text-gray-600">
                    Explore stunning locations from around the world with our curated collection of travel guides and recommendations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <Download size={32} className="text-blue-600" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Free Travel Resources
                  </h3>
                  <p className="text-gray-600">
                    Access our library of free travel guides, packing lists, and tips to make your trips stress-free and memorable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-lg text-gray-600">
                Join thousands of travel enthusiasts and get exclusive updates
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  onClick={(e) => {e.preventDefault(); toast.success("Email Submitted Successfully!")}}
                  className="w-full px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-hover transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Subscribe Now</span>
                  <Mail size={18} />
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>

            <div className="mt-8 flex justify-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail size={20} className="text-primary" />
                <span className="text-sm font-medium">newsletter@traveltree.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
