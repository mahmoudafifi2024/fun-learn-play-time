
import { ReactNode } from 'react';
import { Star, Clock, Users } from 'lucide-react';

interface GameCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  players: string;
  stars: number;
  isLocked?: boolean;
  onClick: () => void;
}

const GameCard = ({
  title,
  description,
  icon,
  difficulty,
  duration,
  players,
  stars,
  isLocked = false,
  onClick
}: GameCardProps) => {
  const difficultyColors = {
    Easy: 'from-green-400 to-green-600',
    Medium: 'from-yellow-400 to-orange-500',
    Hard: 'from-red-400 to-red-600'
  };

  return (
    <div 
      className={`game-card cursor-pointer relative overflow-hidden ${
        isLocked ? 'opacity-60 cursor-not-allowed' : ''
      }`}
      onClick={!isLocked ? onClick : undefined}
    >
      {isLocked && (
        <div className="absolute top-2 right-2 bg-slate-800 text-white p-1 rounded-full">
          🔒
        </div>
      )}
      
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-gradient-to-r from-game-primary to-game-purple p-3 rounded-2xl text-white shadow-lg">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-slate-800 mb-1">{title}</h3>
          <p className="text-slate-600 text-sm">{description}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <div className={`bg-gradient-to-r ${difficultyColors[difficulty]} text-white px-3 py-1 rounded-full text-sm font-bold`}>
          {difficulty}
        </div>
        <div className="flex items-center gap-1 text-yellow-500">
          <Star size={16} fill="currentColor" />
          <span className="font-bold text-sm">{stars}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users size={14} />
          <span>{players}</span>
        </div>
      </div>
      
      {!isLocked && (
        <div className="mt-4">
          <button className="w-full bg-gradient-to-r from-game-primary to-game-purple text-white font-bold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
            Play Now
          </button>
        </div>
      )}
    </div>
  );
};

export default GameCard;
