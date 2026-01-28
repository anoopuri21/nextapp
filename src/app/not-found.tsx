'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function NotFound() {
  useEffect(() => {
    // Optional: Log 404 to analytics or send to admin
    console.log('Page not found');
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl">Page Not Found</p>
      <Link href="/" className="mt-6 text-blue-600 underline">
        Go Back Home
      </Link>
    </div>
  );
}