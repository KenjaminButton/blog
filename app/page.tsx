import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-purple-600" />
      
      {/* Content */}
      <div className="relative z-10 h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">Get Shit Done</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
            A beautiful UI Kit built on Next.js and Tailwind CSS for a modern development workflow
          </p>
        </div>
      </div>
    </main>
  )
}
