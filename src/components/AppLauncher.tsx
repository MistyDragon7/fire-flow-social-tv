
import React from 'react';
import { Button } from '@/components/ui/button';

interface App {
  id: string;
  name: string;
  icon: string;
  color: string;
}

const AppLauncher = () => {
  const apps: App[] = [
    { id: '1', name: 'Netflix', icon: 'N', color: 'bg-red-600' },
    { id: '2', name: 'Prime Video', icon: 'P', color: 'bg-blue-500' },
    { id: '3', name: 'Disney+', icon: 'D+', color: 'bg-blue-700' },
    { id: '4', name: 'Hulu', icon: 'H', color: 'bg-green-500' },
    { id: '5', name: 'HBO Max', icon: 'HBO', color: 'bg-purple-600' },
    { id: '6', name: 'YouTube', icon: 'YT', color: 'bg-red-500' },
    { id: '7', name: 'Apple TV+', icon: 'TV+', color: 'bg-gray-800' },
    { id: '8', name: 'Paramount+', icon: 'P+', color: 'bg-blue-600' }
  ];

  return (
    <div className="mb-8 px-4">
      <h2 className="text-lg font-semibold mb-4 text-foreground">Your Apps</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {apps.map((app) => (
          <Button
            key={app.id}
            variant="ghost"
            className="flex-shrink-0 flex flex-col items-center p-3 hover:bg-accent/50 transition-colors"
            onClick={() => console.log(`Launching ${app.name}`)}
          >
            <div className={`w-16 h-16 rounded-lg ${app.color} flex items-center justify-center text-white font-bold text-sm mb-2 shadow-lg`}>
              {app.icon}
            </div>
            <span className="text-xs text-center text-muted-foreground">{app.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AppLauncher;
