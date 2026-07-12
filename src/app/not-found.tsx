import Link from 'next/link';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md">
        <div className="text-8xl font-bold text-primary mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Oops! The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <Link href="/">
          <Button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-hover transition-colors">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
