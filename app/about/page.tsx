import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen relative pt-16"> {/* Added pt-16 for navbar space */}
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/aboutme.jpg"
          alt="About Me Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Subtle dark overlay */}
      </div>
    </main>
  )
}
