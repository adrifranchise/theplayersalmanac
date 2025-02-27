import Link from 'next/link';
import { useState } from 'react';

// Define TypeScript interface for the GameCard props
interface GameCardProps {
  id: number | string;
  title: string;
  coverImage?: string;
  genres?: string[];
  platforms?: string[];
  releaseYear?: number;
  rating?: number;
  userRating?: number;
  status?: 'completed' | 'playing' | 'backlog' | 'wishlist' | null;
  compact?: boolean; // For smaller card variant
}

/**
 * GameCard component - displays a game with its details in a card format
 * Can be used in grid layouts for game listings, user collections, etc.
 */
export default function GameCard({
  id,
  title,
  coverImage,
  genres = [],
  platforms = [],
  releaseYear,
  rating,
  userRating,
  status,
  compact = false
}: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Status color mapping
  const statusColors = {
    completed: 'bg-green-700 text-green-100',
    playing: 'bg-blue-700 text-blue-100',
    backlog: 'bg-orange-700 text-orange-100',
    wishlist: 'bg-purple-700 text-purple-100'
  };

  // Platform icon mapping (add more as needed)
  const getPlatformIcon = (platform: string) => {
    const lowerPlatform = platform.toLowerCase();
    if (lowerPlatform.includes('xbox')) return '🎮';
    if (lowerPlatform.includes('playstation')) return '🎮';
    if (lowerPlatform.includes('switch')) return '🎮';
    if (lowerPlatform.includes('pc')) return '💻';
    if (lowerPlatform.includes('mobile')) return '📱';
    return '🎮';
  };

  return (
    <Link href={`/games/${id}`}>
      <div
        className={`group bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 ${
          isHovered ? 'shadow-lg shadow-neon-blue/20 scale-[1.02]' : ''
        } ${compact ? 'h-64' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ cursor: 'pointer' }}
      >
        {/* Cover Image */}
        <div className={`relative ${compact ? 'h-36' : 'h-48'} bg-gray-800`}>
          {coverImage ? (
            <img
              src={coverImage}
              alt={`${title} cover`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-400">Cover Not Available</span>
            </div>
          )}
          
          {/* Status badge, show only if status is defined */}
          {status && (
            <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-semibold ${statusColors[status] || 'bg-gray-700 text-gray-100'}`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </div>
          )}
        </div>
        
        {/* Card Content */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className={`font-bold ${isHovered ? 'text-neon-blue' : 'text-white'} transition-colors ${compact ? 'text-sm' : 'text-base'}`}>
              {title}
            </h3>
            
            {/* Only show rating if provided */}
            {rating && (
              <span className="text-neon-green font-bold">{rating.toFixed(1)}</span>
            )}
          </div>
          
          {!compact && (
            <div className="flex flex-wrap gap-2 mt-2">
              {genres.map((genre, index) => (
                <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                  {genre}
                </span>
              ))}
            </div>
          )}
          
          <div className="mt-2 flex justify-between items-center">
            {/* Release Year */}
            {releaseYear && <span className="text-gray-400 text-xs">{releaseYear}</span>}
            
            {/* Platform Icons */}
            {!compact && platforms.length > 0 && (
              <div className="flex gap-1">
                {platforms.slice(0, 3).map((platform, index) => (
                  <span key={index} title={platform} className="text-xs">
                    {getPlatformIcon(platform)}
                  </span>
                ))}
                {platforms.length > 3 && <span className="text-xs">+{platforms.length - 3}</span>}
              </div>
            )}
          </div>
          
          {/* User Rating if available */}
          {userRating && (
            <div className="mt-2 pt-2 border-t border-gray-700 flex items-center">
              <span className="text-xs text-gray-400 mr-2">Your Rating:</span>
              <div className="flex items-center">
                <span className={`text-yellow-400 text-sm font-semibold`}>
                  {userRating.toFixed(1)}
                </span>
                <span className="text-yellow-400 ml-1">★</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
