
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
      { id: '1', title: 'The Office', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/mLyW3UTgi2lsMdtueYODcfAB9Ku.jpg', genre: 'Comedy', year: 2023, streamingService: 'Apple TV+' },
      { id: '2', title: 'Brooklyn-99', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/9AeiA1XtP5sel2tAf9LaGeUjhDb.jpg', genre: 'Comedy', year: 2020, streamingService: 'Netflix' },
      { id: '3', title: 'The Big Bang Theory', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/sccDflItNho4OiHkzpiDxB2fUFw.jpg', genre: 'Comedy', year: 2020, streamingService: 'Netflix' },
      { id: '4', title: 'How I Met Your Mother', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/9YteO4VWteiPmEbWYJRAeBTQZPD.jpg', genre: 'Comedy', year: 2021, streamingService: 'NBC' },
      { id: '5', title: 'Modern Family', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/x4lxFIhhrDI4nWtV8osnYwbGESV.jpg', genre: 'Comedy', year: 2020, streamingService: 'NBC' }
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
    <div className="mb-10 px-4">
      <div className="glass-effect rounded-xl p-8 max-w-full">
        <div className="flex items-center space-x-4 mb-8">
          <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <div>
             <h2 className="text-3xl font-bold text-foreground tracking-tight">Can't Decide What to Watch?</h2>
            <p className="text-muted-foreground text-lg mt-2 font-medium">Pick your mood and get personalized AI recommendations</p>
          </div>
        </div>

        {!selectedMood ? (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {moods.map((mood) => (
              <Button
                key={mood.id}
                onClick={() => handleMoodSelection(mood.id)}
                variant="ghost"
                className="h-32 flex-col space-y-3 border border-border/50 hover:border-primary/60 transition-all duration-300 group relative overflow-hidden rounded-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${mood.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300`} />
                <div className={`p-3 rounded-xl bg-gradient-to-br ${mood.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {mood.icon}
                </div>
                <div className="text-center relative z-10">
                  <div className="font-semibold text-base">{mood.name}</div>
                  <div className="text-sm text-muted-foreground">{mood.description}</div>
                </div>
              </Button>
            ))}
          </div>
        ) : (
          <div className="animate-fade-in">
           <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${moods.find(m => m.id === selectedMood)?.gradient} text-white shadow-lg`}>
                  {moods.find(m => m.id === selectedMood)?.icon}
                </div>
                <div>
                   <h3 className="text-2xl font-bold">{moods.find(m => m.id === selectedMood)?.name} Recommendations</h3>
                  <p className="text-muted-foreground text-lg">AI-curated for your current mood</p>
                </div>
              </div>
               <Button onClick={resetSelection} variant="outline" size="lg" className="text-base">
                Try Another Mood
              </Button>
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
                <span className="ml-4 text-muted-foreground text-lg">Finding perfect matches...</span>
              </div>
            ) : (
               <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {recommendations.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="group relative rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 animate-scale-in hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-video relative">
                      <img
                        src={item.image.startsWith('http') ? item.image : `https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=400&q=80`}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3 text-xs bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg font-medium">
                        {item.streamingService}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-base line-clamp-1 mb-2">{item.title}</h4>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span className="font-medium">{item.genre}</span>
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
