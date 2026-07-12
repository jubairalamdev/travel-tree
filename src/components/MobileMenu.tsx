"use client"

import { X, LayoutDashboard, PlusCircle, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ name: string; href: string }>;
  session: any;
  isPending: boolean;
}

export default function MobileMenu({ isOpen, onClose, navLinks, session, isPending }: MobileMenuProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success('Signed out successfully');
    onClose();
    router.push('/');
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 h-full w-64 bg-white z-50 lg:hidden shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <button
              onClick={onClose}
              className="text-gray-700 hover:text-primary"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex-1 p-6 overflow-y-auto">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className="text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-6 border-t space-y-4">
                {isPending ? (
                  <div className="space-y-3">
                    <div className="w-full h-11 bg-gray-200 rounded-lg animate-pulse" />
                    <div className="w-full h-11 bg-gray-200 rounded-lg animate-pulse" />
                  </div>
                ) : session ? (
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 px-1">
                      <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {session.user?.name?.charAt(0)?.toUpperCase() || 'U'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{session.user?.name}</p>
                        <p className="text-xs text-gray-500 truncate">{session.user?.email}</p>
                      </div>
                    </div>
                    <Link href="/items/manage" onClick={onClose}>
                      <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-all">
                        <LayoutDashboard size={18} />
                        Manage Items
                      </button>
                    </Link>
                    <Link href="/items/add" onClick={onClose}>
                      <button className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-white hover:bg-hover rounded-lg font-medium transition-all">
                        <PlusCircle size={18} />
                        Add Item
                      </button>
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="w-full flex items-center justify-center gap-2 py-3 border border-red-200 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-all"
                    >
                      <LogOut size={18} />
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link href="/login" onClick={onClose}>
                      <button className="w-full py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-all">
                        Sign In
                      </button>
                    </Link>
                    <Link href="/register" onClick={onClose}>
                      <button className="w-full py-3 bg-primary text-white hover:bg-hover rounded-lg font-semibold transition-all">
                        Get Started
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
