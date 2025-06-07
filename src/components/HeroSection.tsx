
import React from 'react';
import { Play, Info, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative h-[70vh] mb-8 overflow-hidden rounded-lg mx-4">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1489599828345-e2f5b0b3915f?auto=format&fit=crop&w=2000&q=80"
          alt="Featured Content"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>
      
      <div className="relative z-10 h-full flex items-center px-8">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-3">
            <div className="bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
              Trending Now
            </div>
            <div className="flex items-center text-yellow-400 text-sm">
              <Users className="w-4 h-4 mr-1" />
              12 friends watching
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Stranger Things
          </h1>
          
          <p className="text-lg text-gray-200 mb-6 max-w-xl">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
          </p>
          
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-green-400 font-medium">⭐ 4.8</span>
            <span className="text-gray-300">2022</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-300">Sci-Fi, Drama</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-300">4 Seasons</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              <Play className="w-5 h-5 mr-2" />
              Play Now
            </Button>
            <Button size="lg" variant="secondary" className="bg-gray-800/70 text-white hover:bg-gray-700">
              <Info className="w-5 h-5 mr-2" />
              More Info
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
              <Heart className="w-5 h-5" />
            </Button>
          </div>

          <div className="mt-6 flex items-center space-x-3">
            <span className="text-sm text-gray-300">Recently watched by:</span>
            <div className="flex -space-x-2">
              {['Alex', 'Maya', 'Jake', 'Sara'].map((friend, index) => (
                <div key={index} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-background flex items-center justify-center text-white text-xs font-bold">
                  {friend[0]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
