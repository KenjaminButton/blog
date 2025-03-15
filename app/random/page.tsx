import Image from 'next/image';

async function getRandomNBAGame() {
  // First, get the NBA league ID
  const leagueRes = await fetch('https://v1.basketball.api-sports.io/leagues?name=NBA', {
    headers: {
      'x-rapidapi-key': process.env.BASKETBALL_API_KEY || '',
      'x-rapidapi-host': 'v1.basketball.api-sports.io'
    }
  });

  if (!leagueRes.ok) {
    throw new Error('Failed to fetch NBA league data');
  }

  const leagueData = await leagueRes.json();
  const nbaLeagueId = leagueData.response[0]?.id;

  // Get NBA games
  const gamesRes = await fetch(`https://v1.basketball.api-sports.io/games?league=${nbaLeagueId}&season=2023-2024`, {
    headers: {
      'x-rapidapi-key': process.env.BASKETBALL_API_KEY || '',
      'x-rapidapi-host': 'v1.basketball.api-sports.io'
    }
  });

  if (!gamesRes.ok) {
    throw new Error('Failed to fetch NBA games');
  }

  const gamesData = await gamesRes.json();
  // Get a random game from the response
  const games = gamesData.response;
  const randomGame = games[Math.floor(Math.random() * games.length)];
  return randomGame;
}

export default async function RandomPage() {
  const game = await getRandomNBAGame();

  return (
    <main className="min-h-screen relative pt-16">
      {/* Background */}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Random NBA Game
          </h1>

          {/* Game Display */}
          <div className="bg-black/50 p-8 rounded-lg text-white">
            <div className="flex justify-between items-center mb-6">
              <div className="text-2xl">{game.teams.home.name}</div>
              <div className="text-3xl font-bold">
                {game.scores.home.points} - {game.scores.away.points}
              </div>
              <div className="text-2xl">{game.teams.away.name}</div>
            </div>

            <div className="flex justify-center gap-4 text-gray-300">
              <div>{new Date(game.date).toLocaleDateString()}</div>
              <div>•</div>
              <div>{game.status.long}</div>
              {game.arena.name && (
                <>
                  <div>•</div>
                  <div>{game.arena.name}</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
