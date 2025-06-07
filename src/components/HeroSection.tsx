
import React from 'react';
import { Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative h-[60vh] mb-6 overflow-hidden mx-4">
      {/* Main Featured Banner */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1489599828345-e2f5b0b3915f?auto=format&fit=crop&w=2000&q=80"
          alt="Featured Content"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center px-8">
        <div className="max-w-2xl">
          {/* Service Badge */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">
              NETFLIX
            </div>
            <div className="text-yellow-400 text-sm">
              ★ Trending #1 in TV Shows
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Stranger Things
          </h1>
          
          {/* Metadata */}
          <div className="flex items-center space-x-4 mb-6 text-white">
            <span className="bg-white/20 px-2 py-1 rounded text-sm">TV-14</span>
            <span>2022</span>
            <span>4 Seasons</span>
            <span>Drama, Horror, Sci-Fi</span>
          </div>
          
          {/* Description */}
          <p className="text-lg text-gray-200 mb-8 max-w-xl leading-relaxed">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
          </p>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold">
              <Play className="w-5 h-5 mr-2" />
              Watch Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-3 text-lg">
              <Info className="w-5 h-5 mr-2" />
              More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
