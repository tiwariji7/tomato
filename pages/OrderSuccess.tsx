
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star, ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

export const OrderSuccess: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff4d4d', '#ffffff', '#000000']
    });
  }, []);

  const orderId = `TOM-${Math.floor(Math.random() * 90000) + 10000}`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      <div className="text-left mb-8">
        <button 
          onClick={() => navigate('/')} 
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Home
        </button>
      </div>

      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 10 }}
        className="w-24 h-24 bg-green-500 rounded-full mx-auto flex items-center justify-center shadow-2xl shadow-green-500/20 mb-12"
      >
        <Check size={48} className="text-white" strokeWidth={4} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="text-5xl md:text-7xl font-black mb-4">ORDER PLACED!</h1>
        <p className="text-xl text-white/40 mb-12">Your meal is now being teleported to your location.</p>
        
        <div className="glass max-w-sm mx-auto p-8 rounded-[32px] border-white/10 mb-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-black mb-1">Order ID</p>
          <h2 className="text-3xl font-black text-[#ff4d4d] mb-6">{orderId}</h2>
          <div className="flex items-center justify-center gap-2 text-yellow-400 mb-6">
            <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
          </div>
          <p className="text-sm text-white/60">Arriving in approximately 35 mins</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="bg-white text-black px-8 py-4 rounded-2xl font-black hover:bg-[#ff4d4d] hover:text-white transition-all">
            GO TO HOME
          </Link>
          <button className="glass px-8 py-4 rounded-2xl font-black hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            TRACK ORDER <ArrowRight size={20} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
