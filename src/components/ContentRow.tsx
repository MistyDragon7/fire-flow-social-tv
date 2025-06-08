
import React from 'react';
import ContentCard from './ContentCard';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContentRowProps {
  title: string;
  subtitle?: string;
  isAI?: boolean;
  content: Array<{
    id: string;
    title: string;
    image: string;
    rating?: number;
    duration?: string;
    year?: number;
    genre?: string;
    watchedBy?: string[];
    streamingService?: string;
  }>;
}

const ContentRow = ({ title, subtitle, isAI = false, content }: ContentRowProps) => {
  return (
    <div className="mb-8 px-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-semibold text-foreground">{title}</h2>
            {isAI && (
              <div className="flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-2 py-0.5 rounded text-xs font-bold">
                <Sparkles className="w-3 h-3 mr-1" />
                AI
              </div>
            )}
          </div>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
          )}
        </div>
        
        <div className="flex space-x-1">
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-7 h-7 text-muted-foreground hover:text-foreground hover:bg-accent fire-tv-focus"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-7 h-7 text-muted-foreground hover:text-foreground hover:bg-accent fire-tv-focus"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
        {content.map((item) => (
          <div key={item.id} className="flex-shrink-0">
            <ContentCard
              title={item.title}
              image={item.image}
              rating={item.rating}
              duration={item.duration}
              year={item.year}
              genre={item.genre}
              showWatchedBy={item.watchedBy}
              streamingService={item.streamingService}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentRow;
