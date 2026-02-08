
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Settings, History, MapPin, LogOut, ChevronRight, ChevronLeft } from 'lucide-react';
import { MOCK_ORDERS } from '../constants';
import { useNavigate } from 'react-router-dom';

export const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button 
        onClick={() => navigate(-1)} 
        className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-12 transition-colors group"
      >
        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back
      </button>

      <div className="flex items-center gap-8 mb-16">
        <motion.img 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          src={user.avatar} 
          alt="Avatar" 
          className="w-32 h-32 rounded-3xl border-4 border-[#ff4d4d] shadow-2xl" 
        />
        <div>
          <h1 className="text-4xl font-black mb-2">{user.name.toUpperCase()}</h1>
          <p className="text-white/40 mb-6 font-medium">{user.email}</p>
          <div className="flex gap-4">
            <button className="glass p-3 rounded-xl hover:bg-white/10 transition-all"><Settings size={20} /></button>
            <button className="glass p-3 rounded-xl hover:bg-white/10 transition-all"><MapPin size={20} /></button>
            <button onClick={() => { logout(); navigate('/'); }} className="glass p-3 rounded-xl hover:bg-red-500/20 text-red-400 transition-all"><LogOut size={20} /></button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <section>
          <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
            <History className="text-[#ff4d4d]" /> PAST ORDERS
          </h2>
          <div className="space-y-4">
            {MOCK_ORDERS.map(order => (
              <div key={order.id} className="glass p-6 rounded-3xl border-white/5 hover:border-white/20 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{order.items[0].name}</h3>
                    <p className="text-white/40 text-xs">#{order.id} • {order.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${order.status === 'Delivered' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                    {order.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#ff4d4d]">₹{order.total}</span>
                  <button className="text-xs font-bold flex items-center gap-1 group-hover:text-[#ff4d4d] transition-colors">
                    REORDER <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-8">MY VIBE</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass p-6 rounded-3xl text-center">
              <span className="text-3xl font-black text-[#ff4d4d]">12</span>
              <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Orders this month</p>
            </div>
            <div className="glass p-6 rounded-3xl text-center">
              <span className="text-3xl font-black text-[#ff4d4d]">₹4.2k</span>
              <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Saved with offers</p>
            </div>
            <div className="glass p-6 rounded-3xl col-span-2">
              <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4 font-black">Top Cuisines</p>
              <div className="flex flex-wrap gap-2">
                {['Japanese', 'Italian', 'Healthy'].map(tag => (
                  <span key={tag} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-bold">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
