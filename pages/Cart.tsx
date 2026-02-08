
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ChevronRight, Tag, ShoppingBag, ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart();
  const [coupon, setCoupon] = useState('');
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-12 transition-colors group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <div className="text-center py-12">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <ShoppingBag size={100} className="mx-auto text-white/10 mb-8" />
          </motion.div>
          <h2 className="text-4xl font-black mb-4">YOUR BAG IS EMPTY</h2>
          <p className="text-white/40 mb-12 max-w-md mx-auto">Looks like you haven't discovered any delicacies yet. Let's find something delicious for you!</p>
          <Link to="/restaurants" className="bg-[#ff4d4d] px-12 py-4 rounded-2xl font-black shadow-xl shadow-red-500/20 inline-block hover:scale-105 active:scale-95 transition-all">
            EXPLORE RESTAURANTS
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <button 
        onClick={() => navigate(-1)} 
        className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors group"
      >
        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back
      </button>

      <h1 className="text-4xl font-black mb-12">MY SHOPPING BAG</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <motion.div 
              layout
              key={item.id}
              className="glass p-5 rounded-3xl flex flex-col sm:flex-row gap-6 items-center border-white/5"
            >
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-2xl border border-white/10" />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-white/40 text-sm">₹{item.price}</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-xl">
                  <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-[#ff4d4d] transition-colors"><Minus size={18} /></button>
                  <span className="font-black text-lg min-w-[20px] text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-[#ff4d4d] transition-colors"><Plus size={18} /></button>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="p-3 bg-red-500/10 text-red-400 rounded-xl hover:bg-red-500/20 transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <div className="sticky top-28 space-y-6">
            <div className="glass p-6 rounded-[32px] border-white/10">
              <h3 className="text-xl font-black mb-6">PRICE SUMMARY</h3>
              <div className="space-y-4 text-white/60 mb-6 pb-6 border-b border-white/10">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="text-green-400 font-bold uppercase text-[10px] bg-green-500/10 px-2 py-1 rounded">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Platform Fee</span>
                  <span className="text-white">₹5</span>
                </div>
              </div>
              <div className="flex justify-between text-2xl font-black mb-8">
                <span>Total</span>
                <span className="text-[#ff4d4d]">₹{totalPrice + 5}</span>
              </div>
              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-[#ff4d4d] py-5 rounded-2xl font-black shadow-xl shadow-red-500/20 flex items-center justify-center gap-2 group transition-all"
              >
                PROCEED TO CHECKOUT <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="glass p-6 rounded-[32px] border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Tag size={20} className="text-[#ff4d4d]" />
                <span className="font-bold">APPLY COUPON</span>
              </div>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Enter code..." 
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-[#ff4d4d]/50"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button className="text-[#ff4d4d] font-bold text-sm px-2">APPLY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
