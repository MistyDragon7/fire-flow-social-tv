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
      description: 'A young chef from the fine dining world returns to Chicago to run his deceased brother\'s Italian beef sandwich shop.',
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
      description: 'The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down from the company.',
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
      description: 'Ted Lasso, an American football coach, moves to England when he\'s hired to coach a soccer team—despite having no experience coaching soccer.',
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
      description: 'A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.',
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
      description: 'Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.',
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
      description: 'Tech billionaire Miles Bron invites his friends for a getaway on his private Greek island. When someone turns up dead, Detective Benoit Blanc is put on the case.',
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
      description: 'Jake Sully and Ney\'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora.',
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
      description: 'The exploits of various guests and employees at an exclusive tropical resort over the span of a week as with each passing day, a darker complexity emerges.',
      watchedBy: ['Sara', 'Alex', 'Chris'],
      streamingService: 'HBO Max'
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
      description: 'An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what\'s important to her by connecting with the lives she could have led.',
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
      description: 'Batman ventures into Gotham City\'s underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home.',
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
      description: 'A group of high school students navigate love and friendships in a world of drugs, sex, trauma and social media.',
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
      description: 'Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the dangerous planet Arrakis.',
      watchedBy: ['Chris', 'Jake'],
      streamingService: 'Prime Video'
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
      description: 'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.',
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
      description: 'A housewife in 1958 decides to become a stand-up comic.',
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
      description: 'Global spy agency Citadel has fallen, and its agents\' memories were wiped clean. Now the powerful syndicate, Manticore, is rising in the void.',
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
      description: 'Women around the world develop the ability to release electrical jolts from their hands, leading to rapid changes in every aspect of human society.',
      watchedBy: ['Maya', 'Jake'],
      streamingService: 'Prime Video'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <AppLauncher />
      
      <MoodRecommender />
      
      <div className="space-y-8 pb-8">
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
