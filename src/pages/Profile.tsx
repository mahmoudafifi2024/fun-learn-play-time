
import { useState } from 'react';
import { Camera, Edit3, Trophy, Star, Target, Calendar } from 'lucide-react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('stats');

  const tabs = [
    { id: 'stats', name: 'Stats', icon: <Target size={20} /> },
    { id: 'achievements', name: 'Achievements', icon: <Trophy size={20} /> },
    { id: 'settings', name: 'Settings', icon: <Edit3 size={20} /> },
  ];

  const achievements = [
    { 
      title: 'First Steps', 
      description: 'Complete your first game', 
      earned: true, 
      date: '2024-01-15',
      rarity: 'Common'
    },
    { 
      title: 'Week Warrior', 
      description: '7-day learning streak', 
      earned: true, 
      date: '2024-01-20',
      rarity: 'Rare'
    },
    { 
      title: 'Math Master', 
      description: 'Score 100% on 10 math games', 
      earned: true, 
      date: '2024-01-25',
      rarity: 'Epic'
    },
    { 
      title: 'Star Collector', 
      description: 'Earn 50 stars', 
      earned: false, 
      progress: 42,
      total: 50,
      rarity: 'Rare'
    },
    { 
      title: 'Speed Demon', 
      description: 'Complete 10 games in 5 minutes', 
      earned: false,
      progress: 6,
      total: 10,
      rarity: 'Epic'
    },
  ];

  const stats = [
    { label: 'Total Games Played', value: 156, icon: '🎮' },
    { label: 'Average Score', value: '89%', icon: '📊' },
    { label: 'Stars Earned', value: 42, icon: '⭐' },
    { label: 'Streak Days', value: 7, icon: '🔥' },
    { label: 'Achievements', value: 12, icon: '🏆' },
    { label: 'Hours Played', value: 24, icon: '⏰' },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'from-slate-400 to-slate-600';
      case 'Rare': return 'from-blue-400 to-blue-600';
      case 'Epic': return 'from-purple-400 to-purple-600';
      case 'Legendary': return 'from-yellow-400 to-orange-500';
      default: return 'from-slate-400 to-slate-600';
    }
  };

  return (
    <Layout>
      <Header title="Profile" showProfile={false} />
      
      <div className="px-4 py-6 max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200 mb-6">
          <div className="flex items-center gap-6 mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-game-primary to-game-purple rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                A
              </div>
              <button className="absolute -bottom-1 -right-1 bg-white rounded-full p-2 shadow-lg border-2 border-slate-200 hover:scale-110 transition-transform duration-300">
                <Camera size={16} className="text-slate-600" />
              </button>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-800 mb-1">Alex Johnson</h2>
              <p className="text-slate-600 mb-2">Level 12 Explorer</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <span className="font-bold">42 Stars</span>
                </div>
                <div className="flex items-center gap-1 text-purple-500">
                  <Trophy size={16} />
                  <span className="font-bold">12 Achievements</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Level Progress */}
          <div>
            <ProgressBar current={750} total={1000} label="Level 12 Progress" />
            <p className="text-sm text-slate-500 mt-1">250 XP until Level 13</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-2xl font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-game-primary to-game-purple text-white shadow-lg'
                  : 'bg-white text-slate-700 shadow-md hover:shadow-lg hover:scale-105'
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'stats' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border transition-all duration-300 hover:scale-105 ${
                  achievement.earned 
                    ? 'border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50' 
                    : 'border-slate-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`bg-gradient-to-r ${getRarityColor(achievement.rarity)} p-3 rounded-2xl text-white shadow-lg`}>
                    <Trophy size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-lg text-slate-800">{achievement.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                        achievement.rarity === 'Epic' ? 'bg-purple-100 text-purple-600' :
                        achievement.rarity === 'Rare' ? 'bg-blue-100 text-blue-600' :
                        'bg-slate-100 text-slate-600'
                      }`}>
                        {achievement.rarity}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-2">{achievement.description}</p>
                    {achievement.earned ? (
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar size={14} />
                        <span>Earned on {achievement.date}</span>
                      </div>
                    ) : (
                      <div className="mt-3">
                        <ProgressBar 
                          current={achievement.progress || 0} 
                          total={achievement.total || 100} 
                          showPercentage={false}
                        />
                      </div>
                    )}
                  </div>
                  {achievement.earned && (
                    <Star size={24} className="text-yellow-500 animate-pulse" fill="currentColor" />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Account Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-slate-200">
                <span className="font-medium text-slate-700">Notifications</span>
                <button className="bg-gradient-to-r from-game-primary to-game-purple w-12 h-6 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform duration-300"></div>
                </button>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-slate-200">
                <span className="font-medium text-slate-700">Sound Effects</span>
                <button className="bg-gradient-to-r from-game-primary to-game-purple w-12 h-6 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform duration-300"></div>
                </button>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-slate-200">
                <span className="font-medium text-slate-700">Music</span>
                <button className="bg-slate-300 w-12 h-6 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform duration-300"></div>
                </button>
              </div>
              <div className="pt-4">
                <button className="w-full bg-gradient-to-r from-red-400 to-red-600 text-white font-bold py-3 rounded-2xl hover:scale-105 transition-transform duration-300">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
