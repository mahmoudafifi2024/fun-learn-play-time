
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const hideNavigation = location.pathname === '/games/play'; // Hide nav during gameplay

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <main className="pb-20 md:pb-0">
        {children}
      </main>
      {!hideNavigation && <Navigation />}
    </div>
  );
};

export default Layout;
