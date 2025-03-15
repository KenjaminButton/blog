import Image from 'next/image';
import BlogPostCard from '@/app/components/BlogPostCard';
import { BlogPost } from '@/types/blog';

// Sample posts for layout (these will come from your database later)
const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Evolution of the Point Guard Position',
    excerpt: 'From Penny Hardaway to today\'s hybrid guards, the position has transformed dramatically...',
    date: 'March 14, 2025',
    readingTime: '5 min read',
    slug: 'evolution-of-point-guards',
    coverImage: '/images/pointguard.webp',
    tags: ['NBA', 'Analysis', 'History']
  },
  {
    id: '2',
    title: 'Breaking Down the 2004 Pistons Defense',
    excerpt: 'How Ben Wallace and company revolutionized team defense in the modern era...',
    date: 'March 12, 2025',
    readingTime: '8 min read',
    slug: 'pistons-2004-defense',
    coverImage: '/images/pistons.jpeg',
    tags: ['NBA', 'Defense', 'Analysis']
  },
  {
    id: '3',
    title: 'The Beautiful Game: Early 2000s Kings',
    excerpt: 'Exploring the offensive brilliance of the Sacramento Kings and their impact...',
    date: 'March 10, 2025',
    readingTime: '6 min read',
    slug: 'kings-beautiful-game',
    coverImage: '/images/2000kings.jpg',
    tags: ['NBA', 'Offense', 'History']
  }
];

export default function RamblingsPage() {
  return (
    <main className="min-h-screen relative pt-16">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/court2.avif"
          alt="Basketball Court"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Basketball Ramblings
              </h1>
              <p className="text-lg text-white/80 max-w-2xl">
                Thoughts, analysis, and stories about the game we love. From classic games to modern tactics,
                join me as we explore basketball&apos;s past, present, and future.
              </p>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {samplePosts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
