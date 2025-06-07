
import React from 'react';
import { Play, Plus, Heart, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContentCardProps {
  title: string;
  image: string;
  rating?: number;
  duration?: string;
  year?: number;
  genre?: string;
  size?: 'small' | 'medium' | 'large';
  showWatchedBy?: string[];
}

const ContentCard = ({ 
  title, 
  image, 
  rating = 4.2, 
  duration = "2h 15m", 
  year = 2023, 
  genre = "Action",
  size = 'medium',
  showWatchedBy = []
}: ContentCardProps) => {
  const sizeClasses = {
    small: 'w-48 h-32',
    medium: 'w-64 h-40',
    large: 'w-80 h-48'
  };

  return (
    <div className="group relative rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className={`${sizeClasses[size]} relative`}>
        <img
          src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=400&q=80`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay Controls */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Play className="w-5 h-5 mr-2" />
            Play
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="icon" variant="secondary" className="w-8 h-8">
            <Plus className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="secondary" className="w-8 h-8">
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium">
          ⭐ {rating}
        </div>
      </div>

      {/* Content Info */}
      <div className="p-3 bg-card/50 backdrop-blur-sm">
        <h3 className="font-semibold text-sm mb-1 line-clamp-1">{title}</h3>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{year} • {genre}</span>
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {duration}
          </div>
        </div>
        
        {showWatchedBy.length > 0 && (
          <div className="mt-2 flex items-center text-xs text-blue-400">
            <div className="flex -space-x-1 mr-2">
              {showWatchedBy.slice(0, 3).map((friend, index) => (
                <div key={index} className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border border-background flex items-center justify-center text-white text-xs font-bold">
                  {friend[0]}
                </div>
              ))}
            </div>
            Watched by {showWatchedBy.slice(0, 2).join(', ')}
            {showWatchedBy.length > 2 && ` +${showWatchedBy.length - 2} more`}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
