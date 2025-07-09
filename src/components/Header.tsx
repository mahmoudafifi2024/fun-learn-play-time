
import { Coins, Star, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  title: string;
  coins?: number;
  stars?: number;
  showProfile?: boolean;
}

const Header = ({ title, coins = 150, stars = 42, showProfile = true }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200 px-4 py-3 md:px-6 md:py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <h1 className="text-xl md:text-2xl font-bold text-slate-800">{title}</h1>
        
        <div className="flex items-center gap-3 md:gap-4">
          {/* Coins Display */}
          <div className="coin-display">
            <Coins size={18} />
            <span className="font-bold">{coins.toLocaleString()}</span>
          </div>
          
          {/* Stars Display */}
          <div className="bg-gradient-to-r from-game-purple to-game-secondary text-white px-3 py-2 rounded-full font-bold shadow-md flex items-center gap-2">
            <Star size={18} fill="currentColor" />
            <span>{stars}</span>
          </div>
          
          {/* Profile Link */}
          {showProfile && (
            <Link 
              to="/profile" 
              className="bg-gradient-to-r from-slate-600 to-slate-700 text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <User size={20} />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
