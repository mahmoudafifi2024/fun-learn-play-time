
import { Home, Gamepad2, User, ShoppingBag, Trophy } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Gamepad2, label: 'Games', path: '/games' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: ShoppingBag, label: 'Shop', path: '/shop' },
    { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 md:relative md:border-0 md:bg-transparent md:flex md:justify-center md:py-4">
      <div className="flex justify-around md:bg-white md:rounded-2xl md:shadow-lg md:px-8 md:py-3 md:max-w-md">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          
          return (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center justify-center py-2 px-3 md:px-4 transition-all duration-300 ${
                isActive
                  ? 'text-game-primary scale-110'
                  : 'text-slate-500 hover:text-game-primary hover:scale-105'
              }`}
            >
              <Icon 
                size={24} 
                className={`mb-1 ${isActive ? 'animate-bounce-in' : ''}`} 
              />
              <span className="text-xs font-medium">{label}</span>
              {isActive && (
                <div className="w-1 h-1 bg-game-primary rounded-full mt-1 animate-pulse-glow" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
