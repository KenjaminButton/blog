import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { BlogPost } from '@/types/blog';

// This will be replaced with Supabase fetch later
const posts: BlogPost[] = [
  {
    id: '1',
    title: 'The Evolution of the Point Guard Position',
    excerpt: 'From Penny Hardaway to today\'s hybrid guards, the position has transformed dramatically...',
    date: 'March 14, 2025',
    readingTime: '5 min read',
    slug: 'evolution-of-point-guards',
    coverImage: '/images/pointguard.webp',
    content: `
      The point guard position has undergone a remarkable transformation over the decades. From pure playmakers to scoring threats, the evolution reflects the changing nature of basketball itself.

      ## The Traditional Era
      Historically, point guards were floor generals first and foremost. Their primary responsibility was to set up teammates and manage the game's tempo. Scoring was secondary to playmaking.

      ## The Hybrid Revolution
      Modern point guards are expected to be both elite scorers and playmakers. This shift began with players like Penny Hardaway, who combined traditional point guard skills with scoring ability.

      ## Today's Game
      In today's NBA, the lines between positions have blurred. Point guards are often their team's primary scorers, while maintaining their playmaking responsibilities. This evolution has led to some of the most exciting basketball we've ever seen.

      ## The Future
      As basketball continues to evolve, we're likely to see even more versatility from the point guard position. The next generation of players will need to be able to do it all - score, pass, defend, and lead.
    `,
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
    content: `
      The 2004 Detroit Pistons weren't just a great defensive team - they were a defensive revolution that changed how we think about team basketball.

      ## The Foundation
      At the core of the Pistons' defense was Ben Wallace, a defensive force unlike anything the league had seen. But what made this team special was how every player bought into the defensive system.

      ## The System
      The Pistons' defensive scheme was built on perfect rotations, communication, and trust. Every player knew exactly where to be and when to be there.

      ## The Personnel
      - Ben Wallace: The anchor
      - Rasheed Wallace: The versatile defender
      - Tayshaun Prince: The lockdown wing
      - Chauncey Billups: The smart defender
      - Richard Hamilton: The tireless worker

      ## Legacy
      The 2004 Pistons proved that defense wins championships, even in an era of high-scoring offenses. Their influence can still be seen in today's defensive schemes.
    `,
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
    content: `
      The Sacramento Kings of the early 2000s were more than just a basketball team - they were a basketball revolution. Led by the creative genius of Jason Williams and later Mike Bibby, alongside Chris Webber, Vlade Divac, and Peja Stojakovic, the Kings played a style of basketball that was ahead of its time.

      ## The Perfect Storm
      What made these Kings special wasn't just their talent - it was their perfect blend of skills and basketball IQ. Webber's versatility, Divac's passing, and Stojakovic's shooting created a system where every player was a threat from anywhere on the court.

      ## European Influence
      The Kings' style was heavily influenced by European basketball, particularly through Divac and Stojakovic. Their emphasis on ball movement, player movement, and creative passing was revolutionary in an era dominated by isolation basketball.

      ## Legacy
      While they never won a championship, their influence on modern basketball is undeniable. The Warriors' beautiful game, the Spurs' system, and the modern emphasis on ball movement all owe a debt to those Kings teams.
    `,
    tags: ['NBA', 'Offense', 'History']
  }
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug);
  
  if (!post || !post.content) {
    notFound();
  }

  return (
    <main className="min-h-screen relative pt-16">
      {/* Hero section with image */}
      <div className="relative h-[60vh]">
        <Image
          src={post.coverImage || '/images/court2.avif'}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/80">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-invert">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          
          <div className="flex justify-center my-8">
            <Link 
              href="/ramblings"
              className="px-6 py-3 bg-gradient-to-r from-[#FFA726] to-[#FF5252] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Back to Ramblings
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
