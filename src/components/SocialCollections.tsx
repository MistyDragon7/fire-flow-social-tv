
import React, { useState } from 'react';
import { Plus, Users, Play, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Collection {
  id: string;
  name: string;
  contributors: string[];
  items: Array<{
    id: string;
    title: string;
    addedBy: string;
    image: string;
    service: string;
  }>;
  createdBy: string;
}

const SocialCollections = () => {
  const [collections] = useState<Collection[]>([
    {
      id: '1',
      name: 'Weekend Binge Watch',
      contributors: ['You', 'Arav', 'Aryan'],
      createdBy: 'You',
      items: [
        { id: '1', title: 'The Bear', addedBy: 'Arav', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/zZ3Cv1lz61V9OXXvtCPVtCFTVP7.jpg', service: 'Hulu' },
        { id: '2', title: 'Wednesday', addedBy: 'Aryan', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/9YteO4VWteiPmEbWYJRAeBTQZPD.jpg', service: 'Netflix' },
        { id: '3', title: 'House of the Dragon', addedBy: 'You', image: 'https://wallpapercat.com/w/full/8/c/f/124601-3840x2160-desktop-4k-stranger-things-wallpaper-image.jpg', service: 'HBO Max' }
      ]
    },
    {
      id: '2',
      name: 'Sci-Fi Favorites',
      contributors: ['Anvesh', 'Divyanshu', 'You'],
      createdBy: 'Anvesh',
      items: [
        { id: '4', title: 'Dune', addedBy: 'Anvesh', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/zZ3Cv1lz61V9OXXvtCPVtCFTVP7.jpg', service: 'Prime Video' },
        { id: '5', title: 'Avatar: The Way of Water', addedBy: 'Divyanshu', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/9YteO4VWteiPmEbWYJRAeBTQZPD.jpg', service: 'Disney+' }
      ]
    }
  ]);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold flex items-center">
          <Users className="w-5 h-5 mr-2 text-primary" />
          Social Collections
        </h2>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Create Collection
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {collections.map((collection) => (
          <Card key={collection.id} className="bg-card/50 backdrop-blur-sm border border-border/30">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{collection.name}</CardTitle>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Created by {collection.createdBy}</span>
                <span>•</span>
                <span>{collection.items.length} items</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Contributors:</span>
                <div className="flex -space-x-1">
                  {collection.contributors.map((contributor, index) => (
                    <div key={index} className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border border-background flex items-center justify-center text-white text-xs font-bold">
                      {contributor[0]}
                    </div>
                  ))}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="grid grid-cols-3 gap-2 mb-4">
                {collection.items.slice(0, 3).map((item) => (
                  <div key={item.id} className="relative group">
                    <img
                      src={item.image.startsWith('http') ? item.image : `https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=400&q=80`}
                      alt={item.title}
                      className="w-full h-20 object-cover rounded"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute bottom-1 left-1 bg-black/70 text-white px-1 py-0.5 rounded text-xs">
                      {item.service}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2">
                {collection.items.slice(0, 2).map((item) => (
                  <div key={item.id} className="flex items-center justify-between text-sm">
                    <span className="font-medium">{item.title}</span>
                    <span className="text-muted-foreground">Added by {item.addedBy}</span>
                  </div>
                ))}
                {collection.items.length > 2 && (
                  <div className="text-sm text-primary font-medium">
                    +{collection.items.length - 2} more items
                  </div>
                )}
              </div>
              
              <div className="flex space-x-2 mt-4">
                <Button size="sm" className="flex-1">
                  <Play className="w-4 h-4 mr-1" />
                  Play All
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  View All
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SocialCollections;
