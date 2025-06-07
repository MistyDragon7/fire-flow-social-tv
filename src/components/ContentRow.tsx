
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
  }>;
}

const ContentRow = ({ title, subtitle, isAI = false, content }: ContentRowProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4 px-4">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold text-foreground">{title}</h2>
            {isAI && (
              <div className="flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                <Sparkles className="w-3 h-3 mr-1" />
                AI Curated
              </div>
            )}
          </div>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-4">
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
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentRow;
