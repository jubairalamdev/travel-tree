import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    links: [
      { name: 'Homepage', href: '/' },
      { name: 'Browse Tours', href: '/tours' },
      { name: 'Add Tours', href: '/Items/Add' },
    ],
    about: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Reviews', href: '/#testimonials' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/assets/logo-white.png" alt="site-logo" width={45} height={45} />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-hover uppercase">Travel</span>
                <span className="text-3xl font-bold text-primary uppercase -mt-2">Tree</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Your trusted partner for unforgettable travel experiences. Discover amazing tours around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-3">
              {footerLinks.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
        </div>
      </div>

      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} TravelTree. All rights reserved.
            </div>

              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
              >
                <ArrowUp size={20} />
                <span>Back to Top</span>
              </Link>
            </div>
          </div>
        </div>
    </footer>
  );
}
