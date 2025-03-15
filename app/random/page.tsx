import Image from 'next/image';

interface Team {
  id: number;
  name: string;
  logo: string;
}

interface Score {
  quarter_1: number;
  quarter_2: number;
  quarter_3: number;
  quarter_4: number;
  over_time: number | null;
  total: number;
}

interface Game {
  id: number;
  date: string;
  time: string;
  venue: string;
  status: {
    long: string;
    short: string;
    timer: number | null;
  };
  teams: {
    home: Team;
    away: Team;
  };
  scores: {
    home: Score;
    away: Score;
  };
}

async function getNBAGames(): Promise<Game[]> {
  try {
    const baseUrl = 'https://api-basketball.p.rapidapi.com';
    const date = '2024-03-14'; // Using March 14, 2024 as we know there were games then

    const params = new URLSearchParams({
      league: '12',  // NBA
      season: '2023-2024',
      timezone: 'America/Los_Angeles',
      date: date
    });

    const url = `${baseUrl}/games?${params.toString()}`;
    console.log('API Request:', {
      url,
      params: Object.fromEntries(params.entries())
    });

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
        'x-rapidapi-host': 'api-basketball.p.rapidapi.com'
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        body: errorText
      });
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('API Response:', JSON.stringify(data, null, 2));

    if (!data.response || !Array.isArray(data.response)) {
      throw new Error('Invalid API response format');
    }

    if (data.response.length === 0) {
      throw new Error('No NBA games found for March 14, 2024');
    }

    return data.response;
  } catch (error) {
    console.error('Failed to fetch NBA games:', error);
    throw error;
  }
}

export default async function NBAGamesPage() {
  let games: Game[] = [];
  let error: Error | null = null;

  try {
    games = await getNBAGames();
  } catch (e) {
    error = e as Error;
    console.error('Error in page:', e);
  }

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
            NBA Games - March 14, 2024
          </h1>

          {error ? (
            <div className="bg-red-500/50 p-8 rounded-lg text-white text-center">
              <p className="text-xl">Error loading NBA games. Please try again later.</p>
              {process.env.NODE_ENV === 'development' && (
                <p className="mt-2 text-sm opacity-75">{error.message}</p>
              )}
            </div>
          ) : games.length > 0 ? (
            <div className="space-y-8">
              {games.map((game: Game) => (
                <div key={game.id} className="bg-black/50 p-8 rounded-lg text-white">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-4">
                      {game.teams?.home?.logo && (
                        <Image
                          src={game.teams.home.logo}
                          alt={game.teams?.home?.name || 'Home Team'}
                          width={48}
                          height={48}
                          className="w-12 h-12"
                        />
                      )}
                      <div className="text-2xl">{game.teams?.home?.name || 'Home Team'}</div>
                    </div>
                    <div className="text-3xl font-bold">
                      {game.scores?.home?.total || 0} - {game.scores?.away?.total || 0}
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">{game.teams?.away?.name || 'Away Team'}</div>
                      {game.teams?.away?.logo && (
                        <Image
                          src={game.teams.away.logo}
                          alt={game.teams?.away?.name || 'Away Team'}
                          width={48}
                          height={48}
                          className="w-12 h-12"
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center gap-4 text-gray-300">
                    <div>{game.time + ' PT'}</div>
                    <div>•</div>
                    <div>{game.status?.long || 'Status Unknown'}</div>
                    {game.venue && (
                      <>
                        <div>•</div>
                        <div>{game.venue}</div>
                      </>
                    )}
                  </div>

                  {/* Quarters Breakdown */}
                  {game.scores?.home && game.scores?.away && (
                    <div className="mt-6">
                      <h2 className="text-xl font-bold mb-4">Scoring by Quarter</h2>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b-2 border-gray-600">
                              <th className="py-2 px-4 text-left">Team</th>
                              <th className="py-2 px-4 text-center">Q1</th>
                              <th className="py-2 px-4 text-center">Q2</th>
                              <th className="py-2 px-4 text-center">Q3</th>
                              <th className="py-2 px-4 text-center">Q4</th>
                              {game.scores.home.over_time && (
                                <th className="py-2 px-4 text-center">OT</th>
                              )}
                              <th className="py-2 px-4 text-center">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-gray-700">
                              <td className="py-2 px-4">{game.teams?.home?.name || 'Home'}</td>
                              <td className="py-2 px-4 text-center">{game.scores.home.quarter_1}</td>
                              <td className="py-2 px-4 text-center">{game.scores.home.quarter_2}</td>
                              <td className="py-2 px-4 text-center">{game.scores.home.quarter_3}</td>
                              <td className="py-2 px-4 text-center">{game.scores.home.quarter_4}</td>
                              {game.scores.home.over_time && (
                                <td className="py-2 px-4 text-center">{game.scores.home.over_time}</td>
                              )}
                              <td className="py-2 px-4 text-center font-bold">{game.scores.home.total}</td>
                            </tr>
                            <tr className="border-b border-gray-700">
                              <td className="py-2 px-4">{game.teams?.away?.name || 'Away'}</td>
                              <td className="py-2 px-4 text-center">{game.scores.away.quarter_1}</td>
                              <td className="py-2 px-4 text-center">{game.scores.away.quarter_2}</td>
                              <td className="py-2 px-4 text-center">{game.scores.away.quarter_3}</td>
                              <td className="py-2 px-4 text-center">{game.scores.away.quarter_4}</td>
                              {game.scores.away.over_time && (
                                <td className="py-2 px-4 text-center">{game.scores.away.over_time}</td>
                              )}
                              <td className="py-2 px-4 text-center font-bold">{game.scores.away.total}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-black/50 p-8 rounded-lg text-white text-center">
              <p className="text-xl">No NBA games found for March 14, 2024. Check back later!</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
