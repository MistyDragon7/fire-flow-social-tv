
import React from 'react';
import { Button } from '@/components/ui/button';

interface App {
  id: string;
  name: string;
  icon: string;
  color: string;
  logo?: string;
}

const AppLauncher = () => {
  const apps: App[] = [
    { id: '1', name: 'Netflix', icon: 'NETFLIX', color: 'bg-red-600', logo: 'text-white font-bold text-xs' },
    { id: '2', name: 'Prime Video', icon: 'prime video', color: 'bg-blue-600', logo: 'text-white text-xs' },
    { id: '3', name: 'Disney+', icon: 'Disney+', color: 'bg-blue-800', logo: 'text-white font-bold text-xs' },
    { id: '4', name: 'HBO Max', icon: 'HBO max', color: 'bg-purple-700', logo: 'text-white text-xs font-bold' },
    { id: '5', name: 'Hulu', icon: 'hulu', color: 'bg-green-500', logo: 'text-white font-bold text-xs' },
    { id: '6', name: 'YouTube', icon: 'YouTube', color: 'bg-red-500', logo: 'text-white font-bold text-xs' },
    { id: '7', name: 'Apple TV+', icon: 'tv+', color: 'bg-gray-800', logo: 'text-white text-xs' },
    { id: '8', name: 'Twitch', icon: 'twitch', color: 'bg-purple-600', logo: 'text-white font-bold text-xs' },
    { id: '9', name: 'Paramount+', icon: 'P+', color: 'bg-blue-500', logo: 'text-white font-bold text-xs' },
    { id: '10', name: 'Peacock', icon: 'peacock', color: 'bg-indigo-600', logo: 'text-white text-xs' },
    { id: '11', name: 'ESPN+', icon: 'ESPN+', color: 'bg-red-700', logo: 'text-white font-bold text-xs' },
    { id: '12', name: 'Discovery+', icon: 'discovery+', color: 'bg-blue-400', logo: 'text-white text-xs' },
    { id: '13', name: 'Spotify', icon: 'Spotify', color: 'bg-green-600', logo: 'text-white font-bold text-xs' },
    { id: '14', name: 'Crunchyroll', icon: 'CR', color: 'bg-orange-500', logo: 'text-white font-bold text-xs' }
  ];

  return (
    <div className="px-4 mb-8">
      <div className="glass-effect-light rounded-xl p-4">
        <div className="grid grid-cols-7 md:grid-cols-14 gap-3 max-w-full">
          {apps.map((app) => (
            <Button
              key={app.id}
              variant="ghost"
              className="flex-shrink-0 p-0 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 group"
              onClick={() => console.log(`Launching ${app.name}`)}
            >
              <div className={`w-16 h-14 rounded-lg ${app.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className={`${app.logo} leading-tight text-center relative z-10 transition-transform duration-300 group-hover:scale-105`}>
                  {app.icon}
                </span>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppLauncher;
