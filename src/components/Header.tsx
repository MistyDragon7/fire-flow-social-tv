
import React from 'react';
import { Search, User, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onSocialPageToggle: () => void;
  showingSocialPage: boolean;
}

const Header = ({ onSocialPageToggle, showingSocialPage }: HeaderProps) => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/50 p-4 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            FireStream
          </h1>
          <nav className="flex space-x-4">
            <Button
              variant={!showingSocialPage ? "default" : "ghost"}
              onClick={() => !showingSocialPage && onSocialPageToggle()}
              className="text-sm"
            >
              Home
            </Button>
            <Button
              variant={showingSocialPage ? "default" : "ghost"}
              onClick={onSocialPageToggle}
              className="text-sm"
            >
              Social
            </Button>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search movies, shows, friends..."
              className="bg-secondary/50 border border-border/30 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
            />
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
