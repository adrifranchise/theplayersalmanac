import Link from 'next/link';
import { useState } from 'react';

// Mock data for featured games
const featuredGames = [
  { id: 1, title: 'Elden Ring', coverImage: '/images/placeholder-game1.jpg', genres: ['RPG', 'Action'], rating: 9.2 },
  { id: 2, title: 'Baldur\'s Gate 3', coverImage: '/images/placeholder-game2.jpg', genres: ['RPG', 'Strategy'], rating: 9.5 },
  { id: 3, title: 'Hollow Knight', coverImage: '/images/placeholder-game3.jpg', genres: ['Metroidvania', 'Indie'], rating: 9.0 },
  { id: 4, title: 'Cyberpunk 2077', coverImage: '/images/placeholder-game4.jpg', genres: ['RPG', 'Open World'], rating: 8.5 },
];

// Mock data for latest reviews
const latestReviews = [
  { id: 1, gameTitle: 'Final Fantasy XVI', author: 'CrystalHunter', snippet: 'A brilliant return to form with spectacular combat...', rating: 'Positive' },
  { id: 2, gameTitle: 'Starfield', author: 'CosmicVoyager', snippet: 'Vast but sometimes empty universe with memorable moments...', rating: 'Mixed' },
  { id: 3, gameTitle: 'Zelda: Tears of the Kingdom', author: 'HyruleExplorer', snippet: 'Building mechanics add a new dimension to the open world...', rating: 'Positive' },
];

export default function Home() {
  const [hoverFeature, setHoverFeature] = useState(null);
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="p-4 border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-neon-green text-2xl font-bold">The Player's Almanac</div>
          <div className="hidden md:flex space-x-6">
            <Link href="/games" className="text-white hover:text-neon-blue transition">Games</Link>
            <Link href="/reviews" className="text-white hover:text-neon-blue transition">Reviews</Link>
            <Link href="/stats" className="text-white hover:text-neon-blue transition">Stats</Link>
            <Link href="/about" className="text-white hover:text-neon-blue transition">About</Link>
          </div>
          <div>
            <Link href="/signin" className="text-neon-violet border border-neon-violet px-4 py-2 rounded hover:bg-neon-violet hover:bg-opacity-20 transition">Sign In</Link>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
        <div className="container mx-auto relative z-10 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
            <span className="text-neon-green">Track.</span> 
            <span className="text-neon-blue ml-2">Review.</span> 
            <span className="text-neon-violet ml-2">Discover.</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl text-center mb-10">
            Your ultimate gaming companion for tracking progress, writing reviews, and discovering new adventures.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-neon-green text-black px-8 py-3 rounded-md font-semibold hover:bg-opacity-80 transition">
              Join Now
            </button>
            <button className="border border-neon-blue text-neon-blue px-8 py-3 rounded-md font-semibold hover:bg-neon-blue hover:bg-opacity-20 transition">
              Explore Features
            </button>
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Redefining Your Gaming Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to organize, track, and enhance your gaming journey.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div 
            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-neon-green transition duration-300 transform hover:-translate-y-2"
            onMouseEnter={() => setHoverFeature(1)}
            onMouseLeave={() => setHoverFeature(null)}
          >
            <div className={`text-4xl mb-4 ${hoverFeature === 1 ? 'text-neon-green' : 'text-gray-300'}`}>
              📊
            </div>
            <h3 className="text-xl font-bold mb-2">Game Tracking</h3>
            <p className="text-gray-400">Monitor playtime, completion percentages, and build your personal game collection.</p>
          </div>
          
          {/* Feature 2 */}
          <div 
            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-neon-blue transition duration-300 transform hover:-translate-y-2"
            onMouseEnter={() => setHoverFeature(2)}
            onMouseLeave={() => setHoverFeature(null)}
          >
            <div className={`text-4xl mb-4 ${hoverFeature === 2 ? 'text-neon-blue' : 'text-gray-300'}`}>
              ✍️
            </div>
            <h3 className="text-xl font-bold mb-2">Custom Reviews</h3>
            <p className="text-gray-400">Share your thoughts with custom-formatted reviews, tags, and sentiment analysis.</p>
          </div>
          
          {/* Feature 3 */}
          <div 
            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-neon-violet transition duration-300 transform hover:-translate-y-2"
            onMouseEnter={() => setHoverFeature(3)}
            onMouseLeave={() => setHoverFeature(null)}
          >
            <div className={`text-4xl mb-4 ${hoverFeature === 3 ? 'text-neon-violet' : 'text-gray-300'}`}>
              🏆
            </div>
            <h3 className="text-xl font-bold mb-2">Achievement Tracking</h3>
            <p className="text-gray-400">Track your achievements across platforms and showcase your gaming accomplishments.</p>
          </div>
          
          {/* Feature 4 */}
          <div 
            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-neon-green transition duration-300 transform hover:-translate-y-2"
            onMouseEnter={() => setHoverFeature(4)}
            onMouseLeave={() => setHoverFeature(null)}
          >
            <div className={`text-4xl mb-4 ${hoverFeature === 4 ? 'text-neon-green' : 'text-gray-300'}`}>
              🔍
            </div>
            <h3 className="text-xl font-bold mb-2">Game Discovery</h3>
            <p className="text-gray-400">Find new games based on your preferences, playstyle, and community recommendations.</p>
          </div>
        </div>
      </section>
      
      {/* Featured Games Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-neon-blue">Featured Games</h2>
            <Link href="/games" className="text-neon-blue hover:underline">View All →</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGames.map(game => (
              <div key={game.id} className="group bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-neon-blue/20 transition duration-300">
                <div className="relative h-48 bg-gray-800">
                  {/* Replace with actual images when available */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400">Game Cover</span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold group-hover:text-neon-blue transition">{game.title}</h3>
                    <span className="text-neon-green font-bold">{game.rating}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {game.genres.map((genre, index) => (
                      <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Latest Reviews Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-neon-violet">Latest Reviews</h2>
            <Link href="/reviews" className="text-neon-violet hover:underline">View All →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestReviews.map(review => (
              <div key={review.id} className="bg-black border border-gray-800 rounded-lg p-6 hover:border-neon-violet transition duration-300">
                <h3 className="font-bold text-xl mb-1">{review.gameTitle}</h3>
                <p className="text-gray-400 text-sm mb-3">Reviewed by {review.author}</p>
                <p className="text-gray-300 mb-4">"{review.snippet}"</p>
                <div className={`inline-block px-3 py-1 rounded text-sm font-semibold ${
                  review.rating === 'Positive' ? 'bg-green-900 text-green-300' : 
                  review.rating === 'Mixed' ? 'bg-yellow-900 text-yellow-300' :
                  'bg-red-900 text-red-300'
                }`}>
                  {review.rating}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Community Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Gaming Community</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Connect with fellow gamers, share your experiences, and discover your next favorite game.
          </p>
          <button className="bg-gradient-to-r from-neon-green to-neon-blue text-black font-bold px-10 py-4 rounded-md hover:opacity-90 transition">
            Sign Up Now
          </button>
          <p className="text-gray-500 mt-4">Already a member? <Link href="/signin" className="text-neon-blue hover:underline">Sign In</Link></p>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-neon-green text-xl font-bold mb-4">The Player's Almanac</h3>
              <p className="text-gray-400 max-w-md">
                Your ultimate hub for game tracking, reviews, stats, and discovery.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-4">Navigation</h4>
                <ul className="space-y-2">
                  <li><Link href="/games" className="text-gray-400 hover:text-neon-blue">Games</Link></li>
                  <li><Link href="/reviews" className="text-gray-400 hover:text-neon-blue">Reviews</Link></li>
                  <li><Link href="/stats" className="text-gray-400 hover:text-neon-blue">Stats</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-neon-blue">About</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Community</h4>
                <ul className="space-y-2">
                  <li><Link href="/leaderboards" className="text-gray-400 hover:text-neon-blue">Leaderboards</Link></li>
                  <li><Link href="/forums" className="text-gray-400 hover:text-neon-blue">Forums</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-neon-blue">Blog</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><Link href="/privacy" className="text-gray-400 hover:text-neon-blue">Privacy</Link></li>
                  <li><Link href="/terms" className="text-gray-400 hover:text-neon-blue">Terms</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} The Player's Almanac. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


