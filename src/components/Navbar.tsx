"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';
import MobileMenu from './MobileMenu';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tours', href: '/tours' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white shadow-lg py-4 bg-transparent py-3`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/assets/logo-small.png" alt="site-logo" width={45} height={45} />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-hover uppercase">Travel</span>
                <span className="text-3xl font-bold text-primary uppercase -mt-2">Tree</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/tours" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Find Tours
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login">
                <button className="px-6 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-all">
                  Sign In
                </button>
              </Link>
              <Link href="/register">
                <button className="px-6 py-2 bg-primary text-white hover:bg-hover rounded-lg font-semibold transition-all">
                  Get Started
                </button>
              </Link>
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
