import React from 'react';
import { Search, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onSocialPageToggle: () => void;
  showingSocialPage: boolean;
}
const Header = ({
  onSocialPageToggle,
  showingSocialPage
}: HeaderProps) => {
  return <header className="bg-black/95 backdrop-blur-sm p-4 sticky top-0 z-50">
    <div className="flex items-center justify-between max-w-7xl mx-auto">
      {/* Left side - Logo and Navigation */}
      <div className="flex items-center space-x-8">
        {/* Profile Icon */}
        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          {/* Home Button */}
          <Button
            variant="ghost"
            onClick={() => showingSocialPage && onSocialPageToggle()} // Only toggle if not already on Home
            className={`text-lg font-medium px-4 py-2 rounded-none border-b-2 transition-colors ${!showingSocialPage
                ? 'text-white border-white bg-transparent hover:bg-white/10'
                : 'text-gray-400 border-transparent hover:text-white hover:bg-white/10'
              }`}
          >
            Home
          </Button>

          {/* Static Buttons */}
          <Button variant="ghost" className="text-lg font-medium text-gray-400 hover:text-white px-4 py-2 hover:bg-white/10">
            Find
          </Button>
          <Button variant="ghost" className="text-lg font-medium text-gray-400 hover:text-white px-4 py-2 hover:bg-white/10">
            Live
          </Button>

          {/* Social Button */}
          <Button
            variant="ghost"
            onClick={() => !showingSocialPage && onSocialPageToggle()} // Only toggle if not already on Social
            className={`text-lg font-medium px-4 py-2 rounded-none border-b-2 transition-colors ${showingSocialPage
                ? 'text-white border-white bg-transparent hover:bg-white/10'
                : 'text-gray-400 border-transparent hover:text-white hover:bg-white/10'
              }`}
          >
            Social
          </Button>
        </nav>
      </div>

      {/* Right side - Apps and Settings */}
      <div className="flex items-center space-x-3">
        {/* Quick App Icons */}
        <div className="flex space-x-2">




        </div>

        {/* Settings */}
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <Settings className="w-6 h-6" />
        </Button>
      </div>
    </div>
  </header>;
};
export default Header;