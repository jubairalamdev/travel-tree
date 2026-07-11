import { X } from 'lucide-react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ name: string; href: string }>;
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 h-full w-64 bg-white z-50 lg:hidden shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <span className="text-xl font-bold text-gray-800">Menu</span>
            <button
              onClick={onClose}
              className="text-gray-700 hover:text-primary"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex-1 p-6">
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
              <Link
                href="/tours"
                onClick={onClose}
                className="text-lg font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Find Tours
              </Link>
              <div className="pt-6 border-t space-y-4">
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
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
