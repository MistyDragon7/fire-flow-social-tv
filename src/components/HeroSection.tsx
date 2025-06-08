
import React from 'react';
import { Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative h-[70vh] mb-8 overflow-hidden mx-4">
      {/* Main Featured Banner */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1489599828345-e2f5b0b3915f?auto=format&fit=crop&w=2000&q=80"
          alt="Featured Content"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/98 via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center px-8">
        <div className="max-w-3xl animate-slide-up">
          {/* Service Badge */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-red-600 text-white px-6 py-2 rounded-lg text-sm font-bold tracking-wide shadow-lg">
              NETFLIX
            </div>
            <div className="text-yellow-400 text-sm font-semibold flex items-center glass-effect-light px-4 py-2 rounded-lg">
              <span className="text-yellow-300 mr-2 text-lg">★</span>
              Trending #1 in TV Shows
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tight leading-none text-shadow-lg">
            Stranger
            <br />
            <span className="text-red-500 animate-glow">Things</span>
          </h1>
          
          {/* Metadata */}
          <div className="flex items-center space-x-6 mb-8 text-white">
            <span className="glass-effect px-4 py-2 rounded-lg text-sm font-semibold">TV-14</span>
            <span className="font-semibold text-lg">2022</span>
            <span className="font-semibold text-lg">4 Seasons</span>
            <span className="text-muted-foreground text-lg">Drama, Horror, Sci-Fi</span>
          </div>
          
          {/* Description */}
          <p className="text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-light">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
          </p>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-6">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-10 py-4 text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <Play className="w-6 h-6 mr-3 fill-current" />
              Watch Now
            </Button>
            <Button size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/15 hover:border-white px-8 py-4 text-xl glass-effect transition-all duration-300 hover:scale-105">
              <Info className="w-6 h-6 mr-3" />
              More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
