
import { useState } from 'react';
import { ShoppingBag, Star, Coins } from 'lucide-react';
import Layout from '../components/Layout';
import Header from '../components/Header';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('avatars');
  const [ownedItems, setOwnedItems] = useState(new Set([1, 5, 9]));

  const categories = [
    { id: 'avatars', name: 'Avatars', icon: '👤' },
    { id: 'accessories', name: 'Accessories', icon: '🎩' },
    { id: 'themes', name: 'Themes', icon: '🎨' },
    { id: 'power-ups', name: 'Power-ups', icon: '⚡' },
  ];

  const shopItems = {
    avatars: [
      { id: 1, name: 'Robot Explorer', price: 50, rarity: 'Common', emoji: '🤖' },
      { id: 2, name: 'Space Captain', price: 75, rarity: 'Rare', emoji: '👨‍🚀' },
      { id: 3, name: 'Magic Wizard', price: 100, rarity: 'Epic', emoji: '🧙‍♂️' },
      { id: 4, name: 'Dragon Rider', price: 150, rarity: 'Legendary', emoji: '🐉' },
    ],
    accessories: [
      { id: 5, name: 'Cool Sunglasses', price: 25, rarity: 'Common', emoji: '🕶️' },
      { id: 6, name: 'Golden Crown', price: 80, rarity: 'Rare', emoji: '👑' },
      { id: 7, name: 'Magic Hat', price: 120, rarity: 'Epic', emoji: '🎩' },
      { id: 8, name: 'Wings of Flight', price: 200, rarity: 'Legendary', emoji: '🪶' },
    ],
    themes: [
      { id: 9, name: 'Ocean Theme', price: 60, rarity: 'Common', emoji: '🌊' },
      { id: 10, name: 'Space Theme', price: 90, rarity: 'Rare', emoji: '🚀' },
      { id: 11, name: 'Forest Theme', price: 110, rarity: 'Epic', emoji: '🌲' },
      { id: 12, name: 'Galaxy Theme', price: 180, rarity: 'Legendary', emoji: '🌌' },
    ],
    'power-ups': [
      { id: 13, name: 'Double Coins', price: 30, rarity: 'Common', emoji: '💰' },
      { id: 14, name: 'Time Freeze', price: 45, rarity: 'Rare', emoji: '⏰' },
      { id: 15, name: 'Score Multiplier', price: 70, rarity: 'Epic', emoji: '✨' },
      { id: 16, name: 'Instant Win', price: 250, rarity: 'Legendary', emoji: '🏆' },
    ],
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'from-slate-400 to-slate-600';
      case 'Rare': return 'from-blue-400 to-blue-600';
      case 'Epic': return 'from-purple-400 to-purple-600';
      case 'Legendary': return 'from-yellow-400 to-orange-500';
      default: return 'from-slate-400 to-slate-600';
    }
  };

  const handlePurchase = (item: any) => {
    if (ownedItems.has(item.id)) return;
    
    console.log('Purchasing item:', item.name);
    setOwnedItems(prev => new Set([...prev, item.id]));
    // Here you would deduct coins and handle the actual purchase logic
  };

  return (
    <Layout>
      <Header title="Shop" coins={150} />
      
      <div className="px-4 py-6 max-w-6xl mx-auto">
        {/* Featured Item */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl p-6 text-white shadow-xl mb-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold mb-2 w-fit">
                ⭐ Daily Deal
              </div>
              <h3 className="text-2xl font-bold mb-2">Cosmic Explorer</h3>
              <p className="opacity-90 mb-4">Limited time avatar - 50% off!</p>
              <div className="flex items-center gap-4">
                <span className="text-lg line-through opacity-60">200 coins</span>
                <span className="text-2xl font-bold">100 coins</span>
              </div>
            </div>
            <div className="text-6xl">🧑‍🚀</div>
          </div>
          <button className="bg-white text-purple-600 font-bold py-3 px-6 rounded-2xl hover:scale-105 transition-transform duration-300 mt-4">
            Buy Now
          </button>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Shop Categories</h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-game-primary to-game-purple text-white shadow-lg scale-105'
                    : 'bg-white text-slate-700 shadow-md hover:shadow-lg hover:scale-105'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shopItems[selectedCategory as keyof typeof shopItems]?.map((item) => {
            const isOwned = ownedItems.has(item.id);
            
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl p-6 shadow-lg border transition-all duration-300 hover:scale-105 ${
                  isOwned ? 'border-green-200 bg-gradient-to-r from-green-50 to-emerald-50' : 'border-slate-200'
                }`}
              >
                <div className="text-center mb-4">
                  <div className="text-6xl mb-3">{item.emoji}</div>
                  <h3 className="font-bold text-lg text-slate-800 mb-1">{item.name}</h3>
                  <div className={`bg-gradient-to-r ${getRarityColor(item.rarity)} text-white px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block`}>
                    {item.rarity}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Coins size={20} />
                    <span className="font-bold text-lg">{item.price}</span>
                  </div>
                  {isOwned && (
                    <div className="flex items-center gap-1 text-green-500">
                      <Star size={16} fill="currentColor" />
                      <span className="text-sm font-bold">Owned</span>
                    </div>
                  )}
                </div>
                
                <button
                  onClick={() => handlePurchase(item)}
                  disabled={isOwned}
                  className={`w-full font-bold py-3 rounded-2xl transition-all duration-300 ${
                    isOwned
                      ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-game-primary to-game-purple text-white hover:scale-105 active:scale-95 shadow-md hover:shadow-lg'
                  }`}
                >
                  {isOwned ? 'Owned' : 'Buy Now'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Coin Balance Info */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 mt-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">Need More Coins?</h3>
              <p className="text-slate-600">Play games to earn coins and unlock amazing items!</p>
            </div>
            <div className="flex items-center gap-2 text-yellow-500">
              <Coins size={24} />
              <span className="text-2xl font-bold">150</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
