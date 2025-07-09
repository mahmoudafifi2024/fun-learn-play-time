
import { useState } from 'react';
import { Brain, Calculator, Globe, Palette, Music, Gamepad2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Header from '../components/Header';
import GameCard from '../components/GameCard';

const Games = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Games', icon: <Gamepad2 size={20} /> },
    { id: 'math', name: 'Math', icon: <Calculator size={20} /> },
    { id: 'science', name: 'Science', icon: <Brain size={20} /> },
    { id: 'geography', name: 'Geography', icon: <Globe size={20} /> },
    { id: 'art', name: 'Art', icon: <Palette size={20} /> },
    { id: 'music', name: 'Music', icon: <Music size={20} /> },
  ];

  const games = [
    {
      id: 1,
      title: 'Math Blast',
      description: 'Solve equations to save the galaxy!',
      category: 'math',
      icon: <Calculator size={28} />,
      difficulty: 'Easy' as const,
      duration: '5-10 min',
      players: '1 player',
      stars: 4.8,
      isLocked: false,
    },
    {
      id: 2,
      title: 'Word Explorer',
      description: 'Discover new words in exciting adventures',
      category: 'language',
      icon: <Brain size={28} />,
      difficulty: 'Medium' as const,
      duration: '10-15 min',
      players: '1-2 players',
      stars: 4.6,
      isLocked: false,
    },
    {
      id: 3,
      title: 'Science Lab',
      description: 'Conduct virtual experiments safely',
      category: 'science',
      icon: <Brain size={28} />,
      difficulty: 'Medium' as const,
      duration: '15-20 min',
      players: '1 player',
      stars: 4.9,
      isLocked: false,
    },
    {
      id: 4,
      title: 'Geography Quest',
      description: 'Travel the world and learn about countries',
      category: 'geography',
      icon: <Globe size={28} />,
      difficulty: 'Easy' as const,
      duration: '8-12 min',
      players: '1-4 players',
      stars: 4.7,
      isLocked: false,
    },
    {
      id: 5,
      title: 'Art Master',
      description: 'Create beautiful masterpieces',
      category: 'art',
      icon: <Palette size={28} />,
      difficulty: 'Hard' as const,
      duration: '20-30 min',
      players: '1 player',
      stars: 4.5,
      isLocked: true,
    },
    {
      id: 6,
      title: 'Music Maker',
      description: 'Compose and learn about music',
      category: 'music',
      icon: <Music size={28} />,
      difficulty: 'Medium' as const,
      duration: '12-18 min',
      players: '1-2 players',
      stars: 4.4,
      isLocked: true,
    },
  ];

  const filteredGames = selectedCategory === 'all' 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  const handleGameClick = (gameId: number) => {
    console.log('Starting game:', gameId);
    // Here you would navigate to the actual game or show a game modal
    // For demo purposes, we'll just log it
  };

  return (
    <Layout>
      <Header title="Games" />
      
      <div className="px-4 py-6 max-w-6xl mx-auto">
        {/* Category Filter */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Choose Your Adventure</h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-game-primary to-game-purple text-white shadow-lg scale-105'
                    : 'bg-white text-slate-700 shadow-md hover:shadow-lg hover:scale-105'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Game */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold mb-2 w-fit">
                  🔥 Featured Game
                </div>
                <h3 className="text-2xl font-bold mb-2">Daily Challenge</h3>
                <p className="opacity-90 mb-4">Complete today's special math challenge and earn bonus coins!</p>
                <button className="bg-white text-purple-600 font-bold py-3 px-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                  Start Challenge
                </button>
              </div>
              <div className="hidden md:block text-6xl opacity-30">
                🎯
              </div>
            </div>
          </div>
        </div>

        {/* Games Grid */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4">
            {selectedCategory === 'all' ? 'All Games' : categories.find(c => c.id === selectedCategory)?.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                description={game.description}
                icon={game.icon}
                difficulty={game.difficulty}
                duration={game.duration}
                players={game.players}
                stars={game.stars}
                isLocked={game.isLocked}
                onClick={() => handleGameClick(game.id)}
              />
            ))}
          </div>
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">No games found</h3>
            <p className="text-slate-600">Try selecting a different category</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Games;
