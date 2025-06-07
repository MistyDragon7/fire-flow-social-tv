
import React from 'react';

interface StreamingBadgeProps {
  service: string;
}

const StreamingBadge = ({ service }: StreamingBadgeProps) => {
  const getServiceStyles = (service: string) => {
    switch (service.toLowerCase()) {
      case 'netflix':
        return 'bg-red-600 text-white';
      case 'prime video':
        return 'bg-blue-500 text-white';
      case 'disney+':
        return 'bg-blue-700 text-white';
      case 'hulu':
        return 'bg-green-500 text-white';
      case 'hbo max':
        return 'bg-purple-600 text-white';
      case 'apple tv+':
        return 'bg-gray-800 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className={`absolute bottom-2 left-2 px-2 py-1 rounded text-xs font-medium ${getServiceStyles(service)}`}>
      {service}
    </div>
  );
};

export default StreamingBadge;
