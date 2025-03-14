'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link 
      href={`/ramblings/${post.slug}`}
      className="group block bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-black/40 transition-all duration-300 border border-white/10"
    >
      {post.coverImage && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-orange-400 mb-2">
          <time>{post.date}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        <h2 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
          {post.title}
        </h2>
        <p className="text-white/80">
          {post.excerpt}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map(tag => (
              <span 
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-orange-400/20 text-orange-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
