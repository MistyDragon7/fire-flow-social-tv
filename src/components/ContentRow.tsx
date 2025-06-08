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

const ContentRow = ({
  title,
  subtitle,
  isAI = false,
  content
}: ContentRowProps) => {
  return (
    <div className="mb-12 px-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">{title}</h2>
            {isAI && (
              <div className="flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-bold shadow-lg animate-glow">
                <Sparkles className="w-4 h-4 mr-2" />
                AI POWERED
              </div>
            )}
          </div>
          {subtitle && (
            <p className="text-base text-muted-foreground mt-2 font-medium">{subtitle}</p>
          )}
        </div>
        
        <div className="flex space-x-1">
          
          
        </div>
      </div>
      
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
        {content.map((item, index) => (
          <div 
            key={item.id} 
            className="flex-shrink-0 animate-fade-in"
            style={{ animationDelay: `${index * 75}ms` }}
          >
            <ContentCard 
              title={item.title} 
              image={item.image} 
              rating={item.rating} 
              duration={item.duration} 
              year={item.year} 
              genre={item.genre} 
              showWatchedBy={item.watchedBy} 
              streamingService={item.streamingService} 
              size="large"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentRow;
