import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden pt-16"> 
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/background-images.png"
          alt="Basketball background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Subtle dark overlay */}
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-[calc(100vh-64px)] flex items-center justify-center"> 
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">Get Buckets</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
            A basketball blog built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </main>
  )
}
