import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen relative pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/aboutme.jpg"
          alt="About Me Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Darkened overlay for better text readability */}
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 py-16 text-white">
        <h1 className="text-5xl font-bold mb-8 text-orange-400">My Basketball Journey</h1>
        
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="first-letter:text-4xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-orange-400">
            Man, basketball's been my thing for as long as I can remember. It all started with Penny Hardaway - that guy was something else. Smooth, skilled, tall point guard who could do it all. He's still my all-time favorite, no question.
          </p>

          <p>
            Growing up in the 90s was wild for hoops. Remember the Fab Five? Chris Webber and those Michigan boys had me glued to the TV. They were so cool, with their baggy shorts and black socks.
          </p>

          <p>
            Then in the NBA, you had the Sonics with Shawn Kemp throwing down those nasty dunks. And who could forget the Suns? Barkley was a force of nature, Majerle was raining threes, and for a hot minute, Richard Dumas was looking like the next big thing.
          </p>

          <p>
            As I got older, my taste in basketball evolved. The 2004 Pistons showed me that defense and teamwork could be just as exciting as flashy offense. Big Ben Wallace was a monster! And those early 2000s Kings teams? Pure magic. Webber, Bibby, Peja - they played such a beautiful game.
          </p>

          <p>
            Over time, I started getting really into the nuts and bolts of basketball. I'd rewind plays, trying to figure out what made them work. That's when I realized there was so much more to explore beyond the NBA.
          </p>

          <p>
            I started checking out international games, and it was like a whole new world opened up. The way Europeans moved the ball, the toughness of South American teams - it was eye-opening. And don't even get me started on women's basketball. Watching the WNBA and international women's tournaments, I saw some of the smartest, most fundamental basketball I'd ever seen.
          </p>

          <p className="border-l-4 border-orange-400 pl-4 italic">
            These days, I'm all in. NBA, EuroLeague, WNBA, Olympics - if it's good basketball, I'm watching it. It's crazy to think how far my love for the game has come, from being a kid idolizing Penny to now breaking down pick-and-roll coverages in a Serbian league game. Basketball's been a hell of a journey for me, and I'm still loving every minute of it.
          </p>
        </div>
      </div>
    </main>
  )
}
