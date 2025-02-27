import GameCard from '../../components/GameCard';

// Mock data for games
const games = [
  {
    id: 1,
    title: 'Elden Ring',
    coverImage: '/images/placeholder-game1.jpg',
    genres: ['Action', 'RPG', 'Open World'],
    platforms: ['PlayStation', 'Xbox', 'PC'],
    releaseYear: 2022,
    rating: 9.3,
    status: 'completed'
  },
  {
    id: 2,
    title: 'God of War Ragnarök',
    coverImage: '/images/placeholder-game2.jpg',
    genres: ['Action', 'Adventure'],
    platforms: ['PlayStation'],
    releaseYear: 2022,
    rating: 9.4,
    userRating: 9.5,
    status: 'playing'
  },
  {
    id: 3,
    title: 'The Legend of Zelda: Tears of the Kingdom',
    coverImage: '/images/placeholder-game3.jpg',
    genres: ['Action', 'Adventure', 'Open World'],
    platforms: ['Switch'],
    releaseYear: 2023,
    rating: 9.6,
    status: 'wishlist'
  },
  {
    id: 4,
    title: 'Cyberpunk 2077',
    coverImage: '/images/placeholder-game4.jpg',
    genres: ['RPG', 'Open World', 'FPS'],
    platforms: ['PlayStation', 'Xbox', 'PC'],
    releaseYear: 2020,
    rating: 7.8,
    status: 'backlog'
  },
  {
    id: 5,
    title: 'Baldur\'s Gate 3',
    coverImage: '/images/placeholder-game5.jpg',
    genres: ['RPG', 'Turn-Based', 'Fantasy'],
    platforms: ['PC', 'PlayStation'],
    releaseYear: 2023,
    rating: 9.7,
    userRating: 9.2
  },
  {
    id: 6,
    title: 'Final Fantasy XVI',
    coverImage: '/images/placeholder-game6.jpg',
    genres: ['Action', 'RPG', 'Fantasy'],
    platforms: ['PlayStation'],
    releaseYear: 2023,
    rating: 8.7
  },
  {
    id: 7,
    title: 'Starfield',
    coverImage: '/images/placeholder-game7.jpg',
    genres: ['RPG', 'Open World', 'Sci-Fi'],
    platforms: ['Xbox', 'PC'],
    releaseYear: 2023,
    rating: 8.2,
    status: 'playing'
  },
  {
    id: 8,
    title: 'Horizon Forbidden West',
    coverImage: '/images/placeholder-game8.jpg',
    genres: ['Action', 'Adventure', 'Open World'],
    platforms: ['PlayStation'],
    releaseYear: 2022,
    rating: 9.0
  }
];

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Simple Navigation */}
      <nav className="p-4 border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold" style={{color: '#39FF14'}}>The Player's Almanac</div>
          <a href="/" className="text-white hover:text-blue-400 transition">Back to Home</a>
        </div>
      </nav>
      
      <main className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Game Library</h1>
          <p className="text-gray-400">Browse our collection of games.</p>
        </div>
        
        {/* Filters (placeholder for now) */}
        <div className="mb-8 p-4 bg-gray-900 rounded-lg">
          <h2 className="text-xl mb-4">Filters</h2>
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm mb-1 text-gray-400">Genre</label>
              <select className="bg-gray-800 p-2 rounded text-sm w-48">
                <option>All Genres</option>
                <option>RPG</option>
                <option>Action</option>
                <option>Adventure</option>
                <option>FPS</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm mb-1 text-gray-400">Platform</label>
              <select className="bg-gray-800 p-2 rounded text-sm w-48">
                <option>All Platforms</option>
                <option>PlayStation</option>
                <option>Xbox</option>
                <option>PC</option>
                <option>Switch</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm mb-1 text-gray-400">Year</label>
              <select className="bg-gray-800 p-2 rounded text-sm w-48">
                <option>All Years</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm mb-1 text-gray-400">Status</label>
              <select className="bg-gray-800 p-2 rounded text-sm w-48">
                <option>All Status</option>
                <option>Completed</option>
                <option>Playing</option>
                <option>Backlog</option>
                <option>Wishlist</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Game Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              title={game.title}
              coverImage={game.coverImage}
              genres={game.genres}
              platforms={game.platforms}
              releaseYear={game.releaseYear}
              rating={game.rating}
              userRating={game.userRating}
              status={game.status}
            />
          ))}
        </div>
        
        {/* Section Title: Your Collection */}
        <div className="mt-16 mb-8">
          <h2 className="text-2xl font-bold mb-2">Your Collection</h2>
          <p className="text-gray-400">Games you own, shown in compact view.</p>
        </div>
        
        {/* Compact Game Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {games.slice(0, 6).map((game) => (
            <GameCard
              key={`compact-${game.id}`}
              id={game.id}
              title={game.title}
              coverImage={game.coverImage}
              releaseYear={game.releaseYear}
              rating={game.rating}
              status={game.status}
              compact={true}
            />
          ))}
        </div>
      </main>
      
      {/* Simple Footer */}
      <footer className="bg-gray-900 py-6 px-4 mt-12 border-t border-gray-800">
        <div className="container mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} The Player's Almanac. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
