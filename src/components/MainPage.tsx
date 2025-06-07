
import React from 'react';
import HeroSection from './HeroSection';
import ContentRow from './ContentRow';
import AppLauncher from './AppLauncher';

const MainPage = () => {
  const moodBasedContent = [
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
    }
  ];

  const personalizedContent = [
    {
      id: '9',
      title: 'Everything Everywhere All at Once',
      image: 'photo-1514933651103-005eec06c04b',
      rating: 4.9,
      duration: '2h 19m',
      year: 2022,
      genre: 'Sci-Fi',
      watchedBy: ['Maya'],
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
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <AppLauncher />
      
      <ContentRow
        title="Perfect for Your Evening Mood"
        subtitle="Relaxing content recommended based on the time of day"
        isAI={true}
        content={moodBasedContent}
      />
      
      <ContentRow
        title="Trending with Friends"
        subtitle="What's popular in your social circle"
        content={trendingContent}
      />
      
      <ContentRow
        title="Because You Watched Stranger Things"
        subtitle="AI-powered recommendations based on your viewing history"
        isAI={true}
        content={personalizedContent}
      />
    </div>
  );
};

export default MainPage;
