
import React from 'react';
import { Play, Heart, Clock, Users } from 'lucide-react';

interface ActivityItem {
  id: string;
  friend: string;
  action: 'watching' | 'finished' | 'liked' | 'added';
  content: string;
  time: string;
  image: string;
}

const FriendActivity = () => {
  const activities: ActivityItem[] = [
    {
      id: '1',
      friend: 'Alex',
      action: 'watching',
      content: 'The Bear',
      time: '2 min ago',
      image: 'photo-1514933651103-005eec06c04b'
    },
    {
      id: '2',
      friend: 'Maya',
      action: 'finished',
      content: 'Wednesday',
      time: '1 hour ago',
      image: 'photo-1489599828345-e2f5b0b3915f'
    },
    {
      id: '3',
      friend: 'Jake',
      action: 'liked',
      content: 'House of the Dragon',
      time: '3 hours ago',
      image: 'photo-1578662996442-48f60103fc96'
    },
    {
      id: '4',
      friend: 'Sara',
      action: 'added',
      content: 'The Last of Us',
      time: '5 hours ago',
      image: 'photo-1440404653325-ab127d49abc1'
    },
    {
      id: '5',
      friend: 'Chris',
      action: 'watching',
      content: 'Top Gun: Maverick',
      time: '1 day ago',
      image: 'photo-1517604931442-7e0c8ed2963c'
    }
  ];

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'watching': return <Play className="w-3 h-3 text-green-400" />;
      case 'finished': return <Clock className="w-3 h-3 text-blue-400" />;
      case 'liked': return <Heart className="w-3 h-3 text-red-400" />;
      case 'added': return <Users className="w-3 h-3 text-purple-400" />;
      default: return <Play className="w-3 h-3" />;
    }
  };

  const getActionText = (action: string) => {
    switch (action) {
      case 'watching': return 'is watching';
      case 'finished': return 'finished watching';
      case 'liked': return 'liked';
      case 'added': return 'added to watchlist';
      default: return action;
    }
  };

  return (
    <div className="bg-card/30 backdrop-blur-sm rounded-lg p-4 h-fit sticky top-24">
      <div className="flex items-center space-x-2 mb-4">
        <Users className="w-5 h-5 text-primary" />
        <h3 className="font-semibold">Friend Activity</h3>
      </div>
      
      <div className="space-y-3">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 p-2 rounded hover:bg-muted/20 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {activity.friend[0]}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1">
                <span className="font-medium text-sm">{activity.friend}</span>
                {getActionIcon(activity.action)}
              </div>
              
              <p className="text-xs text-muted-foreground">
                {getActionText(activity.action)} <span className="text-foreground font-medium">{activity.content}</span>
              </p>
              
              <span className="text-xs text-muted-foreground">{activity.time}</span>
            </div>
            
            <div className="w-12 h-8 rounded overflow-hidden flex-shrink-0">
              <img
                src={`https://images.unsplash.com/${activity.image}?auto=format&fit=crop&w=100&q=80`}
                alt={activity.content}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-sm text-primary hover:text-primary/80 transition-colors">
        See all activity
      </button>
    </div>
  );
};

export default FriendActivity;
