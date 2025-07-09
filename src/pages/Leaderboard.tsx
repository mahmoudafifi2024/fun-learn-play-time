
import { useState } from 'react';
import { Trophy, Crown, Medal, Star, TrendingUp } from 'lucide-react';
import Layout from '../components/Layout';
import Header from '../components/Header';

const Leaderboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('weekly');

  const periods = [
    { id: 'daily', name: 'Today' },
    { id: 'weekly', name: 'This Week' },
    { id: 'monthly', name: 'This Month' },
    { id: 'alltime', name: 'All Time' },
  ];

  const leaderboardData = {
    daily: [
      { rank: 1, name: 'Emma Watson', score: 2850, avatar: '👩‍🎓', change: '+2' },
      { rank: 2, name: 'Alex Johnson', score: 2750, avatar: '👨‍💻', change: '0', isCurrentUser: true },
      { rank: 3, name: 'Sarah Chen', score: 2680, avatar: '👩‍🔬', change: '-1' },
      { rank: 4, name: 'Mike Rodriguez', score: 2540, avatar: '👨‍🎨', change: '+3' },
      { rank: 5, name: 'Lisa Park', score: 2480, avatar: '👩‍🚀', change: '-2' },
    ],
    weekly: [
      { rank: 1, name: 'Sarah Chen', score: 18750, avatar: '👩‍🔬', change: '+1' },
      { rank: 2, name: 'Alex Johnson', score: 17200, avatar: '👨‍💻', change: '+1', isCurrentUser: true },
      { rank: 3, name: 'Emma Watson', score: 16800, avatar: '👩‍🎓', change: '-2' },
      { rank: 4, name: 'David Kim', score: 15900, avatar: '👨‍⚕️', change: '0' },
      { rank: 5, name: 'Jessica Brown', score: 15420, avatar: '👩‍🏫', change: '+2' },
    ],
    monthly: [
      { rank: 1, name: 'Alex Johnson', score: 67500, avatar: '👨‍💻', change: '0', isCurrentUser: true },
      { rank: 2, name: 'Sarah Chen', score: 65200, avatar: '👩‍🔬', change: '+1' },
      { rank: 3, name: 'Emma Watson', score: 62800, avatar: '👩‍🎓', change: '-1' },
      { rank: 4, name: 'Mike Rodriguez', score: 58400, avatar: '👨‍🎨', change: '+2' },
      { rank: 5, name: 'Lisa Park', score: 56700, avatar: '👩‍🚀', change: '-1' },
    ],
    alltime: [
      { rank: 1, name: 'Sarah Chen', score: 156750, avatar: '👩‍🔬', change: '0' },
      { rank: 2, name: 'Alex Johnson', score: 145200, avatar: '👨‍💻', change: '0', isCurrentUser: true },
      { rank: 3, name: 'Emma Watson', score: 142800, avatar: '👩‍🎓', change: '0' },
      { rank: 4, name: 'David Kim', score: 138900, avatar: '👨‍⚕️', change: '0' },
      { rank: 5, name: 'Jessica Brown', score: 135420, avatar: '👩‍🏫', change: '0' },
    ],
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="text-yellow-500" size={24} />;
      case 2: return <Medal className="text-slate-400" size={24} />;
      case 3: return <Medal className="text-amber-600" size={24} />;
      default: return <span className="text-slate-600 font-bold text-lg">#{rank}</span>;
    }
  };

  const getChangeIcon = (change: string) => {
    if (change === '0') return null;
    const isPositive = change.startsWith('+');
    return (
      <div className={`flex items-center gap-1 text-sm ${
        isPositive ? 'text-green-500' : 'text-red-500'
      }`}>
        <TrendingUp size={14} className={isPositive ? '' : 'rotate-180'} />
        <span>{change}</span>
      </div>
    );
  };

  const currentData = leaderboardData[selectedPeriod as keyof typeof leaderboardData];

  return (
    <Layout>
      <Header title="Leaderboard" />
      
      <div className="px-4 py-6 max-w-4xl mx-auto">
        {/* Top 3 Podium */}
        <div className="mb-8">
          <div className="flex items-end justify-center gap-4 mb-6">
            {/* 2nd Place */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-slate-300 to-slate-500 w-16 h-20 rounded-t-2xl flex items-center justify-center text-white font-bold text-lg mb-2">
                2
              </div>
              <div className="text-3xl mb-2">{currentData[1]?.avatar}</div>
              <div className="font-bold text-sm text-slate-800">{currentData[1]?.name.split(' ')[0]}</div>
              <div className="text-xs text-slate-600">{currentData[1]?.score.toLocaleString()}</div>
            </div>

            {/* 1st Place */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-20 h-24 rounded-t-2xl flex items-center justify-center text-white font-bold text-xl mb-2 relative">
                <Crown className="absolute -top-3 text-yellow-300" size={20} />
                1
              </div>
              <div className="text-4xl mb-2">{currentData[0]?.avatar}</div>
              <div className="font-bold text-slate-800">{currentData[0]?.name.split(' ')[0]}</div>
              <div className="text-sm text-slate-600">{currentData[0]?.score.toLocaleString()}</div>
            </div>

            {/* 3rd Place */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-amber-500 to-amber-700 w-16 h-16 rounded-t-2xl flex items-center justify-center text-white font-bold text-lg mb-2">
                3
              </div>
              <div className="text-3xl mb-2">{currentData[2]?.avatar}</div>
              <div className="font-bold text-sm text-slate-800">{currentData[2]?.name.split(' ')[0]}</div>
              <div className="text-xs text-slate-600">{currentData[2]?.score.toLocaleString()}</div>
            </div>
          </div>
        </div>

        {/* Period Selector */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {periods.map((period) => (
            <button
              key={period.id}
              onClick={() => setSelectedPeriod(period.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                selectedPeriod === period.id
                  ? 'bg-gradient-to-r from-game-primary to-game-purple text-white shadow-lg'
                  : 'bg-white text-slate-700 shadow-md hover:shadow-lg hover:scale-105'
              }`}
            >
              {period.name}
            </button>
          ))}
        </div>

        {/* Full Leaderboard */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-game-primary to-game-purple p-4 text-white">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Trophy size={20} />
              {periods.find(p => p.id === selectedPeriod)?.name} Leaders
            </h3>
          </div>
          
          <div className="divide-y divide-slate-200">
            {currentData.map((player, index) => (
              <div
                key={index}
                className={`p-4 flex items-center gap-4 transition-all duration-300 hover:bg-slate-50 ${
                  player.isCurrentUser ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                }`}
              >
                <div className="flex items-center justify-center w-10">
                  {getRankIcon(player.rank)}
                </div>
                
                <div className="text-3xl">{player.avatar}</div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`font-bold ${player.isCurrentUser ? 'text-blue-600' : 'text-slate-800'}`}>
                      {player.name}
                    </span>
                    {player.isCurrentUser && (
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-bold">
                        You
                      </span>
                    )}
                  </div>
                  <div className="text-slate-600 text-sm">
                    {player.score.toLocaleString()} points
                  </div>
                </div>
                
                <div className="text-right">
                  {getChangeIcon(player.change)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current User Stats */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl mt-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Star size={20} />
            Your Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">#{currentData.find(p => p.isCurrentUser)?.rank}</div>
              <div className="text-sm opacity-80">Current Rank</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">{currentData.find(p => p.isCurrentUser)?.score.toLocaleString()}</div>
              <div className="text-sm opacity-80">Total Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">42</div>
              <div className="text-sm opacity-80">Stars Earned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">7</div>
              <div className="text-sm opacity-80">Day Streak</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Leaderboard;
