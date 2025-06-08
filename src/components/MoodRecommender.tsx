
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Heart, Zap, Leaf, Coffee, Moon } from 'lucide-react';

interface MoodOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  gradient: string;
  description: string;
}

interface RecommendedContent {
  id: string;
  title: string;
  image: string;
  genre: string;
  year: number;
  streamingService: string;
}

const MoodRecommender = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [recommendations, setRecommendations] = useState<RecommendedContent[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const moods: MoodOption[] = [
    {
      id: 'feel-good',
      name: 'Feel-Good',
      icon: <Heart className="w-6 h-6" />,
      gradient: 'from-pink-500 to-rose-500',
      description: 'Uplifting and heartwarming'
    },
    {
      id: 'intense',
      name: 'Intense',
      icon: <Zap className="w-6 h-6" />,
      gradient: 'from-orange-500 to-red-500',
      description: 'Thrilling and action-packed'
    },
    {
      id: 'relaxing',
      name: 'Relaxing',
      icon: <Leaf className="w-6 h-6" />,
      gradient: 'from-green-500 to-emerald-500',
      description: 'Calm and peaceful'
    },
    {
      id: 'energizing',
      name: 'Energizing',
      icon: <Coffee className="w-6 h-6" />,
      gradient: 'from-yellow-500 to-orange-500',
      description: 'Dynamic and motivating'
    },
    {
      id: 'mysterious',
      name: 'Mysterious',
      icon: <Moon className="w-6 h-6" />,
      gradient: 'from-purple-500 to-indigo-500',
      description: 'Dark and suspenseful'
    }
  ];

  const mockRecommendations: Record<string, RecommendedContent[]> = {
    'feel-good': [
      { id: '1', title: 'Ted Lasso', image: 'photo-1489599828345-e2f5b0b3915f', genre: 'Comedy', year: 2023, streamingService: 'Apple TV+' },
      { id: '2', title: 'Schitt\'s Creek', image: 'photo-1440404653325-ab127d49abc1', genre: 'Comedy', year: 2020, streamingService: 'Netflix' },
      { id: '3', title: 'The Good Place', image: 'photo-1514933651103-005eec06c04b', genre: 'Comedy', year: 2020, streamingService: 'Netflix' },
      { id: '4', title: 'Brooklyn Nine-Nine', image: 'photo-1578662996442-48f60103fc96', genre: 'Comedy', year: 2021, streamingService: 'NBC' },
      { id: '5', title: 'Parks and Recreation', image: 'photo-1517604931442-7e0c8ed2963c', genre: 'Comedy', year: 2020, streamingService: 'NBC' }
    ],
    'intense': [
      { id: '6', title: 'The Boys', image: 'photo-1517604931442-7e0c8ed2963c', genre: 'Action', year: 2023, streamingService: 'Prime Video' },
      { id: '7', title: 'Breaking Bad', image: 'photo-1440404653325-ab127d49abc1', genre: 'Drama', year: 2013, streamingService: 'Netflix' },
      { id: '8', title: 'John Wick', image: 'photo-1489599828345-e2f5b0b3915f', genre: 'Action', year: 2023, streamingService: 'Prime Video' },
      { id: '9', title: 'The Dark Knight', image: 'photo-1578662996442-48f60103fc96', genre: 'Action', year: 2008, streamingService: 'HBO Max' },
      { id: '10', title: 'Mad Max: Fury Road', image: 'photo-1514933651103-005eec06c04b', genre: 'Action', year: 2015, streamingService: 'HBO Max' }
    ],
    'relaxing': [
      { id: '11', title: 'The Great British Bake Off', image: 'photo-1514933651103-005eec06c04b', genre: 'Reality', year: 2023, streamingService: 'Netflix' },
      { id: '12', title: 'Planet Earth', image: 'photo-1440404653325-ab127d49abc1', genre: 'Documentary', year: 2023, streamingService: 'BBC' },
      { id: '13', title: 'Studio Ghibli Collection', image: 'photo-1489599828345-e2f5b0b3915f', genre: 'Animation', year: 2023, streamingService: 'Netflix' },
      { id: '14', title: 'The Crown', image: 'photo-1578662996442-48f60103fc96', genre: 'Drama', year: 2023, streamingService: 'Netflix' },
      { id: '15', title: 'Call the Midwife', image: 'photo-1517604931442-7e0c8ed2963c', genre: 'Drama', year: 2023, streamingService: 'BBC' }
    ],
    'energizing': [
      { id: '16', title: 'Marvel\'s Avengers', image: 'photo-1517604931442-7e0c8ed2963c', genre: 'Action', year: 2023, streamingService: 'Disney+' },
      { id: '17', title: 'Top Gun: Maverick', image: 'photo-1489599828345-e2f5b0b3915f', genre: 'Action', year: 2022, streamingService: 'Prime Video' },
      { id: '18', title: 'The Fast Saga', image: 'photo-1440404653325-ab127d49abc1', genre: 'Action', year: 2023, streamingService: 'HBO Max' },
      { id: '19', title: 'Mission: Impossible', image: 'photo-1578662996442-48f60103fc96', genre: 'Action', year: 2023, streamingService: 'Prime Video' },
      { id: '20', title: 'Spider-Man: No Way Home', image: 'photo-1514933651103-005eec06c04b', genre: 'Action', year: 2021, streamingService: 'Disney+' }
    ],
    'mysterious': [
      { id: '21', title: 'Dark', image: 'photo-1514933651103-005eec06c04b', genre: 'Sci-Fi', year: 2020, streamingService: 'Netflix' },
      { id: '22', title: 'Sherlock', image: 'photo-1440404653325-ab127d49abc1', genre: 'Mystery', year: 2017, streamingService: 'Netflix' },
      { id: '23', title: 'The X-Files', image: 'photo-1489599828345-e2f5b0b3915f', genre: 'Sci-Fi', year: 2018, streamingService: 'Hulu' },
      { id: '24', title: 'True Detective', image: 'photo-1578662996442-48f60103fc96', genre: 'Crime', year: 2023, streamingService: 'HBO Max' },
      { id: '25', title: 'Westworld', image: 'photo-1517604931442-7e0c8ed2963c', genre: 'Sci-Fi', year: 2022, streamingService: 'HBO Max' }
    ]
  };

  const handleMoodSelection = async (moodId: string) => {
    setSelectedMood(moodId);
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setRecommendations(mockRecommendations[moodId] || []);
      setIsLoading(false);
    }, 1000);
  };

  const resetSelection = () => {
    setSelectedMood(null);
    setRecommendations([]);
  };

  return (
    <div className="mb-8 px-4">
      <div className="glass-effect rounded-xl p-6 max-w-6xl mx-auto">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight">Can't Decide What to Watch?</h2>
            <p className="text-muted-foreground text-sm mt-1">Pick your mood and get personalized recommendations</p>
          </div>
        </div>

        {!selectedMood ? (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {moods.map((mood) => (
              <Button
                key={mood.id}
                onClick={() => handleMoodSelection(mood.id)}
                variant="ghost"
                className="h-24 flex-col space-y-2 border border-border hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${mood.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className={`p-2 rounded-lg bg-gradient-to-br ${mood.gradient} text-white`}>
                  {mood.icon}
                </div>
                <div className="text-center">
                  <div className="font-medium text-sm">{mood.name}</div>
                  <div className="text-xs text-muted-foreground">{mood.description}</div>
                </div>
              </Button>
            ))}
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${moods.find(m => m.id === selectedMood)?.gradient} text-white`}>
                  {moods.find(m => m.id === selectedMood)?.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{moods.find(m => m.id === selectedMood)?.name} Recommendations</h3>
                  <p className="text-muted-foreground text-sm">Perfect for your current mood</p>
                </div>
              </div>
              <Button onClick={resetSelection} variant="outline" size="sm">
                Try Another Mood
              </Button>
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <span className="ml-3 text-muted-foreground">Finding perfect matches...</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {recommendations.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="group relative rounded-lg overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-video relative">
                      <img
                        src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=400&q=80`}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute top-2 right-2 text-xs bg-black/50 text-white px-2 py-1 rounded">
                        {item.streamingService}
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium text-sm line-clamp-1 mb-1">{item.title}</h4>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{item.genre}</span>
                        <span>{item.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodRecommender;
