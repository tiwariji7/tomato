
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, ChevronRight, Github, Chrome, ChevronLeft } from 'lucide-react';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      login(email);
      navigate('/');
    }
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-md w-full mb-6">
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full glass p-8 md:p-12 rounded-[48px] border-white/10 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff4d4d] blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2" />
        
        <div className="text-center mb-10">
          <div className="inline-flex bg-[#ff4d4d] w-16 h-16 rounded-3xl items-center justify-center text-white text-3xl font-black mb-6 shadow-xl shadow-red-500/20">T</div>
          <h1 className="text-3xl font-black">WELCOME BACK</h1>
          <p className="text-white/40 text-sm">Log in to continue your culinary voyage.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input 
                type="email" 
                required
                placeholder="commander@tomato.space" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#ff4d4d]/50 transition-all text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-2">Secret Key</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input 
                type="password" 
                required
                placeholder="••••••••" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#ff4d4d]/50 transition-all text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button className="w-full bg-[#ff4d4d] py-5 rounded-2xl font-black text-lg shadow-xl shadow-red-500/20 flex items-center justify-center gap-2 group transition-all hover:scale-[1.02] active:scale-95">
            LOG IN <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="relative my-8 text-center">
          <span className="bg-[#0a0a0a] px-4 text-white/20 text-xs font-bold relative z-10">OR CONNECT WITH</span>
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="glass p-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/5 transition-all">
            <Chrome size={20} /> <span className="text-sm font-bold">Google</span>
          </button>
          <button className="glass p-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/5 transition-all">
            <Github size={20} /> <span className="text-sm font-bold">GitHub</span>
          </button>
        </div>

        <p className="text-center mt-10 text-sm text-white/40">
          New to the sector? <button onClick={() => navigate('/login')} className="text-[#ff4d4d] font-bold hover:underline">Join the Fleet</button>
        </p>
      </motion.div>
    </div>
  );
};
