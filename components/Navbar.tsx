
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, MapPin, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3 shadow-2xl border-white/10">
        <Link to="/" className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
          <span className="bg-[#ff4d4d] w-8 h-8 rounded-lg flex items-center justify-center text-white text-xl">T</span>
          TOMATO
        </Link>

        <div className="hidden md:flex items-center glass rounded-xl px-4 py-2 gap-3 w-1/3">
          <MapPin size={18} className="text-[#ff4d4d]" />
          <input 
            type="text" 
            placeholder="Search for restaurants..." 
            className="bg-transparent border-none outline-none text-sm w-full text-white placeholder-white/40"
            onClick={() => navigate('/restaurants')}
          />
          <Search size={18} className="text-white/40" />
        </div>

        <div className="flex items-center gap-4 lg:gap-8">
          <Link to="/cart" className="relative p-2 hover:bg-white/10 rounded-xl transition-colors group">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-[#ff4d4d] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#0a0a0a]"
              >
                {totalItems}
              </motion.span>
            )}
          </Link>

          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <Link to="/profile" className="flex items-center gap-2 p-1 hover:bg-white/10 rounded-xl transition-colors">
                <img src={user?.avatar} alt="Profile" className="w-8 h-8 rounded-lg border border-white/20" />
                <span className="hidden sm:inline font-medium text-sm">{user?.name}</span>
              </Link>
              <button 
                onClick={() => { logout(); navigate('/'); }} 
                className="p-2 hover:bg-red-500/20 rounded-xl transition-colors text-red-400"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="bg-[#ff4d4d] hover:bg-[#ff3333] px-6 py-2 rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-red-500/20 active:scale-95">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
