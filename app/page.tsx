import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen relative pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/background-image.png"
          alt="Basketball Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Get Buckets
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
          A basketball enthusiast's journey through the game, sharing stories, analysis, and passion for hoops.
        </p>
      </div>
    </main>
  );
}
