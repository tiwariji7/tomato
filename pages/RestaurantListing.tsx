
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronDown, Search, Star, Clock, ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { RESTAURANTS } from '../constants';
import { TiltCard } from '../components/TiltCard';

export const RestaurantListing: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'veg' | 'rating'>('all');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredRestaurants = RESTAURANTS.filter(res => {
    const matchesSearch = res.name.toLowerCase().includes(search.toLowerCase()) || 
                         res.cuisine.some(c => c.toLowerCase().includes(search.toLowerCase()));
    if (filter === 'veg') return matchesSearch && res.isVeg;
    if (filter === 'rating') return matchesSearch && res.rating >= 4.5;
    return matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button 
        onClick={() => navigate(-1)} 
        className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors group"
      >
        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back
      </button>

      <div className="mb-12">
        <h1 className="text-4xl font-black mb-8">DISCOVER THE BEST</h1>
        
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:flex-1 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#ff4d4d] transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Cuisines, dishes, or restaurants..."
              className="w-full glass bg-white/5 border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#ff4d4d]/50 transition-all text-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            <button 
              onClick={() => setFilter('all')}
              className={`whitespace-nowrap px-6 py-3 rounded-xl border text-sm font-bold transition-all ${filter === 'all' ? 'bg-[#ff4d4d] border-[#ff4d4d] text-white shadow-lg shadow-red-500/20' : 'glass border-white/10 text-white/60 hover:border-white/20'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('veg')}
              className={`whitespace-nowrap px-6 py-3 rounded-xl border text-sm font-bold transition-all ${filter === 'veg' ? 'bg-green-500 border-green-500 text-white' : 'glass border-white/10 text-white/60 hover:border-white/20'}`}
            >
              Pure Veg
            </button>
            <button 
              onClick={() => setFilter('rating')}
              className={`whitespace-nowrap px-6 py-3 rounded-xl border text-sm font-bold transition-all ${filter === 'rating' ? 'bg-yellow-500 border-yellow-500 text-white' : 'glass border-white/10 text-white/60 hover:border-white/20'}`}
            >
              Top Rated (4.5+)
            </button>
            <button className="glass border-white/10 px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 hover:border-white/20">
              <Filter size={16} /> Filters
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredRestaurants.map((res, idx) => (
            <motion.div
              layout
              key={res.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <TiltCard>
                <Link to={`/restaurant/${res.id}`} className="block glass rounded-3xl overflow-hidden border-white/5 hover:border-[#ff4d4d]/30 transition-colors">
                  <div className="relative aspect-video">
                    <img src={res.image} alt={res.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">{res.name}</h3>
                      <p className="text-white/60 text-xs">{res.cuisine.join(', ')}</p>
                    </div>
                    <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star size={14} className="text-yellow-400 fill-yellow-400" /> {res.rating}
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs font-medium text-white/60">
                      <span className="flex items-center gap-1"><Clock size={14} /> {res.deliveryTime}m</span>
                      <span>₹{res.priceForTwo} for two</span>
                    </div>
                    {res.isVeg && <div className="w-4 h-4 border border-green-500 flex items-center justify-center p-0.5"><div className="w-full h-full bg-green-500 rounded-full" /></div>}
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredRestaurants.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-white/40 font-medium italic">No futuristic restaurants found matching your vibe...</p>
        </div>
      )}
    </div>
  );
};
