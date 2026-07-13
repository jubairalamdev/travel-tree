"use client"

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, ChevronDown, LogOut, LayoutDashboard, PlusCircle } from 'lucide-react';
import { useSession, authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import MobileMenu from './MobileMenu';
import Image from 'next/image';

export default function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { data: session, isPending } = useSession();

  console.log('Session data ============>', session);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success('Signed out successfully');
    setIsDropdownOpen(false);
    router.push('/');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tours', href: '/tours' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-40 bg-white shadow-lg py-3"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/assets/logo-small.png" alt="site-logo" width={45} height={45} priority />
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
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {isPending ? (
                <div className="w-20 h-9 bg-gray-200 rounded-lg animate-pulse" />
              ) : session ? (
                <>
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
                    >
                      <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {session.user?.name?.charAt(0)?.toUpperCase() || 'U'}
                      </div>
                      <span className="text-sm font-medium text-gray-700 max-w-[120px] md:max-w-[180px] truncate">
                        {session.user?.name || 'User'}
                      </span>
                      <ChevronDown size={16} className={`text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                        <div className="px-4 py-2 border-b">
                          <p className="text-sm font-medium text-gray-900 truncate">{session.user?.name}</p>
                          <p className="text-xs text-gray-500 truncate">{session.user?.email}</p>
                        </div>
                        <Link
                          href="/items/manage"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <LayoutDashboard size={16} className="text-gray-400" />
                          Manage Items
                        </Link>
                        <Link
                          href="/items/add"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <PlusCircle size={16} className="text-gray-400" />
                          Add Item
                        </Link>
                        <div className="border-t my-1" />
                        <button
                          onClick={handleSignOut}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                        >
                          <LogOut size={16} />
                          Sign Out
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
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
                </>
              )}
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
        session={session}
        isPending={isPending}
      />
    </>
  );
}
