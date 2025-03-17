'use client';

import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!session) {
    return null; // Don't render anything while redirecting
  }

  return (
    <main className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/court2.avif"
          alt="Basketball Court"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="bg-black/50 p-8 rounded-lg backdrop-blur-sm w-full max-w-md">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white text-center mb-8">
              Admin Dashboard
            </h1>
            <div className="text-center text-gray-200 space-y-2">
              <p>Welcome, {session.user?.name}!</p>
              <p className="text-sm opacity-75">Signed in as {session.user?.email}</p>
            </div>
            
            {/* Add your admin dashboard content here */}
            <div className="mt-8 space-y-4">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors">
                Create New Post
              </button>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors">
                Manage Posts
              </button>
            </div>

            <button
              onClick={() => signOut()}
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
