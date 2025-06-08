import React from 'react';
import HeroSection from './HeroSection';
import ContentRow from './ContentRow';
import AppLauncher from './AppLauncher';
import MoodRecommender from './MoodRecommender';

const MainPage = () => {
  const continueWatchingContent = [
    {
      id: '1',
      title: 'The Bear',
      image: 'photo-1514933651103-005eec06c04b',
      rating: 4.8,
      duration: '30 min episodes',
      year: 2023,
      genre: 'Comedy-Drama',
      watchedBy: ['Alex', 'Maya'],
      streamingService: 'Hulu'
    },
    {
      id: '2',
      title: 'Succession',
      image: 'photo-1440404653325-ab127d49abc1',
      rating: 4.7,
      duration: '1h episodes',
      year: 2023,
      genre: 'Drama',
      watchedBy: ['Jake'],
      streamingService: 'HBO Max'
    },
    {
      id: '3',
      title: 'Ted Lasso',
      image: 'photo-1489599828345-e2f5b0b3915f',
      rating: 4.6,
      duration: '45 min episodes',
      year: 2023,
      genre: 'Comedy',
      watchedBy: ['Sara', 'Chris', 'Maya'],
      streamingService: 'Apple TV+'
    },
    {
      id: '4',
      title: 'The Menu',
      image: 'photo-1578662996442-48f60103fc96',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Alex'],
      streamingService: 'HBO Max'
    },
    {
      id: '17',
      title: 'House of the Dragon',
      image: 'photo-1517604931442-7e0c8ed2963c',
      rating: 4.5,
      duration: '1h episodes',
      year: 2023,
      genre: 'Fantasy',
      watchedBy: ['Jake', 'Chris'],
      streamingService: 'HBO Max'
    },
    {
      id: '18',
      title: 'The Last of Us',
      image: 'photo-1514933651103-005eec06c04b',
      rating: 4.8,
      duration: '50 min episodes',
      year: 2023,
      genre: 'Drama',
      watchedBy: ['Maya', 'Alex'],
      streamingService: 'HBO Max'
    }
  ];

  const trendingContent = [
    {
      id: '5',
      title: 'Wednesday',
      image: 'photo-1489599828345-e2f5b0b3915f',
      rating: 4.5,
      duration: '50 min episodes',
      year: 2022,
      genre: 'Horror-Comedy',
      watchedBy: ['Maya', 'Jake', 'Sara'],
      streamingService: 'Netflix'
    },
    {
      id: '6',
      title: 'Glass Onion',
      image: 'photo-1517604931442-7e0c8ed2963c',
      rating: 4.4,
      duration: '2h 19m',
      year: 2022,
      genre: 'Mystery',
      watchedBy: ['Chris', 'Alex'],
      streamingService: 'Netflix'
    },
    {
      id: '7',
      title: 'Avatar: The Way of Water',
      image: 'photo-1440404653325-ab127d49abc1',
      rating: 4.2,
      duration: '3h 12m',
      year: 2022,
      genre: 'Sci-Fi',
      watchedBy: ['Jake', 'Maya'],
      streamingService: 'Disney+'
    },
    {
      id: '8',
      title: 'The White Lotus',
      image: 'photo-1578662996442-48f60103fc96',
      rating: 4.6,
      duration: '1h episodes',
      year: 2022,
      genre: 'Dark Comedy',
      watchedBy: ['Sara', 'Alex', 'Chris'],
      streamingService: 'HBO Max'
    },
    {
      id: '19',
      title: 'Squid Game',
      image: 'photo-1489599828345-e2f5b0b3915f',
      rating: 4.7,
      duration: '1h episodes',
      year: 2023,
      genre: 'Thriller',
      watchedBy: ['Maya', 'Jake', 'Sara', 'Alex'],
      streamingService: 'Netflix'
    },
    {
      id: '20',
      title: 'Top Gun: Maverick',
      image: 'photo-1517604931442-7e0c8ed2963c',
      rating: 4.6,
      duration: '2h 11m',
      year: 2022,
      genre: 'Action',
      watchedBy: ['Chris', 'Jake'],
      streamingService: 'Prime Video'
    }
  ];

  const friendsRecommendations = [
    {
      id: '9',
      title: 'Everything Everywhere All at Once',
      image: 'photo-1514933651103-005eec06c04b',
      rating: 4.9,
      duration: '2h 19m',
      year: 2022,
      genre: 'Sci-Fi',
      watchedBy: ['Maya', 'Jake'],
      streamingService: 'Prime Video'
    },
    {
      id: '10',
      title: 'The Batman',
      image: 'photo-1440404653325-ab127d49abc1',
      rating: 4.3,
      duration: '2h 56m',
      year: 2022,
      genre: 'Action',
      watchedBy: ['Jake', 'Chris'],
      streamingService: 'HBO Max'
    },
    {
      id: '11',
      title: 'Euphoria',
      image: 'photo-1489599828345-e2f5b0b3915f',
      rating: 4.4,
      duration: '1h episodes',
      year: 2022,
      genre: 'Drama',
      watchedBy: ['Sara', 'Maya', 'Alex'],
      streamingService: 'HBO Max'
    },
    {
      id: '12',
      title: 'Dune',
      image: 'photo-1578662996442-48f60103fc96',
      rating: 4.5,
      duration: '2h 35m',
      year: 2021,
      genre: 'Sci-Fi',
      watchedBy: ['Chris', 'Jake'],
      streamingService: 'Prime Video'
    },
    {
      id: '21',
      title: 'The Crown',
      image: 'photo-1514933651103-005eec06c04b',
      rating: 4.4,
      duration: '1h episodes',
      year: 2023,
      genre: 'Drama',
      watchedBy: ['Sara', 'Maya'],
      streamingService: 'Netflix'
    },
    {
      id: '22',
      title: 'Stranger Things 4',
      image: 'photo-1440404653325-ab127d49abc1',
      rating: 4.6,
      duration: '1h 15m episodes',
      year: 2022,
      genre: 'Sci-Fi',
      watchedBy: ['Jake', 'Chris', 'Maya'],
      streamingService: 'Netflix'
    }
  ];

  const amazonOriginalsContent = [
    {
      id: '13',
      title: 'The Boys',
      image: 'photo-1517604931442-7e0c8ed2963c',
      rating: 4.7,
      duration: '1h episodes',
      year: 2023,
      genre: 'Superhero',
      watchedBy: ['Jake', 'Chris'],
      streamingService: 'Prime Video'
    },
    {
      id: '14',
      title: 'The Marvelous Mrs. Maisel',
      image: 'photo-1489599828345-e2f5b0b3915f',
      rating: 4.6,
      duration: '50 min episodes',
      year: 2023,
      genre: 'Comedy',
      watchedBy: ['Sara', 'Maya'],
      streamingService: 'Prime Video'
    },
    {
      id: '15',
      title: 'Citadel',
      image: 'photo-1440404653325-ab127d49abc1',
      rating: 4.1,
      duration: '1h episodes',
      year: 2023,
      genre: 'Action',
      watchedBy: ['Alex'],
      streamingService: 'Prime Video'
    },
    {
      id: '16',
      title: 'The Power',
      image: 'photo-1578662996442-48f60103fc96',
      rating: 4.3,
      duration: '45 min episodes',
      year: 2023,
      genre: 'Sci-Fi',
      watchedBy: ['Maya', 'Jake'],
      streamingService: 'Prime Video'
    },
    {
      id: '23',
      title: 'Rings of Power',
      image: 'photo-1517604931442-7e0c8ed2963c',
      rating: 4.2,
      duration: '1h 10m episodes',
      year: 2023,
      genre: 'Fantasy',
      watchedBy: ['Chris', 'Jake'],
      streamingService: 'Prime Video'
    },
    {
      id: '24',
      title: 'The Terminal List',
      image: 'photo-1514933651103-005eec06c04b',
      rating: 4.0,
      duration: '55 min episodes',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Alex', 'Jake'],
      streamingService: 'Prime Video'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <AppLauncher />
      
      <MoodRecommender />
      
      <div className="space-y-8 pb-12">
        <ContentRow
          title="Continue Watching"
          content={continueWatchingContent}
        />
        
        <ContentRow
          title="Trending Now"
          content={trendingContent}
        />
        
        <ContentRow
          title="Because Your Friends Watched"
          subtitle="Popular with your circle"
          isAI={true}
          content={friendsRecommendations}
        />
        
        <ContentRow
          title="Amazon Originals"
          content={amazonOriginalsContent}
        />
      </div>
    </div>
  );
};

export default MainPage;
