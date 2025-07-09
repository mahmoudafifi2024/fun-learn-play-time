
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Trophy, Target, BookOpen, Star, Zap } from 'lucide-react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';

const Index = () => {
  const [streak, setStreak] = useState(7);
  const [dailyGoal, setDailyGoal] = useState({ current: 3, total: 5 });

  const quickActions = [
    {
      title: 'Daily Challenge',
      description: 'Complete today\'s special challenge',
      icon: <Target size={24} />,
      gradient: 'from-red-400 to-pink-600',
      path: '/games',
    },
    {
      title: 'Continue Learning',
      description: 'Pick up where you left off',
      icon: <BookOpen size={24} />,
      gradient: 'from-blue-400 to-blue-600',
      path: '/games',
    },
    {
      title: 'Practice Mode',
      description: 'Sharpen your skills',
      icon: <Zap size={24} />,
      gradient: 'from-yellow-400 to-orange-500',
      path: '/games',
    },
  ];

  const achievements = [
    { title: 'First Steps', description: 'Complete your first game', earned: true },
    { title: 'Week Warrior', description: '7-day learning streak', earned: true },
    { title: 'Star Collector', description: 'Earn 50 stars', earned: false },
    { title: 'Speed Demon', description: 'Complete 10 games in 5 minutes', earned: false },
  ];

  return (
    <Layout>
      <Header title="EduPlay" />
      
      <div className="px-4 py-6 max-w-6xl mx-auto">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-game-primary to-game-purple rounded-3xl p-6 mb-6 text-white shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Welcome back, Alex! 🎉</h2>
              <p className="opacity-90">Ready to continue your learning adventure?</p>
            </div>
            <div className="bg-white/20 rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold">{streak}</div>
              <div className="text-sm opacity-80">Day Streak</div>
            </div>
          </div>
          
          <ProgressBar 
            current={dailyGoal.current} 
            total={dailyGoal.total} 
            label="Daily Goal Progress"
            showPercentage={false}
          />
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Sparkles className="text-game-primary" size={24} />
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.path}
                className="group bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className={`bg-gradient-to-r ${action.gradient} p-3 rounded-2xl text-white shadow-lg mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                  {action.icon}
                </div>
                <h4 className="font-bold text-lg text-slate-800 mb-2">{action.title}</h4>
                <p className="text-slate-600 text-sm">{action.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Trophy className="text-yellow-500" size={24} />
            Recent Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-4 shadow-lg border transition-all duration-300 ${
                  achievement.earned 
                    ? 'border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50' 
                    : 'border-slate-200 opacity-60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${
                    achievement.earned 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
                      : 'bg-slate-200 text-slate-400'
                  }`}>
                    <Trophy size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{achievement.title}</h4>
                    <p className="text-sm text-slate-600">{achievement.description}</p>
                  </div>
                  {achievement.earned && (
                    <Star size={20} className="text-yellow-500 ml-auto animate-pulse" fill="currentColor" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Overview */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Your Progress</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-game-primary mb-1">156</div>
              <div className="text-sm text-slate-600">Games Played</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-game-success mb-1">89%</div>
              <div className="text-sm text-slate-600">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-game-warning mb-1">42</div>
              <div className="text-sm text-slate-600">Stars Earned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-game-secondary mb-1">12</div>
              <div className="text-sm text-slate-600">Achievements</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
