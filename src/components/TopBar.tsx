import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

interface TopBarProps {
  copyright?: string;
  showPaymentIcons?: boolean;
}

export default function TopBar({
  copyright = '',
  showPaymentIcons = true
}: TopBarProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white border-b border-gray-200 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm">
          <div className="text-gray-600">
            {copyright || `© ${currentYear} TravelTree. All rights reserved.`}
          </div>

          {showPaymentIcons && (
            <div className="flex items-center space-x-6">
              <div className="flex space-x-2">
                <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-xs text-white font-semibold">VISA</span>
                </div>
                <div className="w-10 h-6 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-xs text-white font-semibold">MC</span>
                </div>
                <div className="w-10 h-6 bg-blue-800 rounded flex items-center justify-center">
                  <span className="text-xs text-white font-semibold">AMEX</span>
                </div>
                <div className="w-10 h-6 bg-black rounded flex items-center justify-center">
                  <span className="text-xs text-white font-semibold">DISC</span>
                </div>
              </div>

              <Link
                href="#"
                className="text-primary hover:text-primary/70 font-semibold transition-colors flex items-center space-x-1"
              >
                <ArrowUp size={18} />
                <span>Back to Top</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
