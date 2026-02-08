
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Truck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RESTAURANTS } from '../constants';
import { TiltCard } from '../components/TiltCard';

export const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
              FUTURE OF <br />
              <span className="text-[#ff4d4d] text-neon">DELIVERY.</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 max-w-lg">
              Experience the fusion of taste and technology. Tomato delivers your favorite meals with supersonic speed in a futuristic aesthetic.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/restaurants" 
                className="bg-[#ff4d4d] hover:bg-[#ff3333] px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-red-500/20 flex items-center gap-2 group"
              >
                Order Now <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="glass px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white/10 transition-all">
                Download App
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="flex flex-col"><span className="text-2xl font-bold">10k+</span><span className="text-xs uppercase tracking-widest opacity-50">Restaurants</span></div>
              <div className="flex flex-col"><span className="text-2xl font-bold">5M+</span><span className="text-xs uppercase tracking-widest opacity-50">Orders</span></div>
              <div className="flex flex-col"><span className="text-2xl font-bold">4.9</span><span className="text-xs uppercase tracking-widest opacity-50">App Rating</span></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-[#ff4d4d] blur-[120px] opacity-20" />
            <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000" 
              alt="Food" 
              className="relative w-full h-[500px] object-cover rounded-[40px] shadow-2xl border-4 border-white/5 rotate-3"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-black mb-2 uppercase tracking-tighter">Popular Picks</h2>
              <div className="w-20 h-1.5 bg-[#ff4d4d] rounded-full" />
            </div>
            <Link to="/restaurants" className="text-[#ff4d4d] font-bold flex items-center gap-1 hover:underline">
              View all <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESTAURANTS.slice(0, 3).map((res, idx) => (
              <motion.div
                key={res.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <TiltCard>
                  <Link to={`/restaurant/${res.id}`} className="block group">
                    <div className="glass overflow-hidden rounded-[32px] p-2 border-white/5 h-full">
                      <div className="relative aspect-video overflow-hidden rounded-[26px]">
                        <img 
                          src={res.image} 
                          alt={res.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                        <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <Star size={14} className="text-yellow-400 fill-yellow-400" /> {res.rating}
                        </div>
                        {res.offers && (
                          <div className="absolute bottom-4 left-4 bg-[#ff4d4d] px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg">
                            {res.offers}
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-2xl font-bold mb-1">{res.name}</h3>
                        <p className="text-white/40 text-sm mb-4">{res.cuisine.join(' • ')}</p>
                        <div className="flex items-center justify-between text-xs font-medium text-white/60">
                          <span className="flex items-center gap-1"><Clock size={14} /> {res.deliveryTime} mins</span>
                          <span className="flex items-center gap-1"><Award size={14} /> ₹{res.priceForTwo} for two</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center text-[#ff4d4d] mb-6 shadow-xl">
              <Truck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Sonic Speed</h3>
            <p className="text-white/50 text-sm">Delivery within 30 minutes or it's on us. Every single time.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-6 shadow-xl">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Top Quality</h3>
            <p className="text-white/50 text-sm">Only the highest rated restaurants on our network.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 shadow-xl">
              <Star size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Futuristic UI</h3>
            <p className="text-white/50 text-sm">Experience ordering like never before in full 3D.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
