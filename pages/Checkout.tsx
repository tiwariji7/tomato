
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { MapPin, CreditCard, ChevronLeft, Truck, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const Checkout: React.FC = () => {
  const { totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      clearCart();
      navigate('/success');
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/cart" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-10 transition-colors">
        <ChevronLeft size={20} /> Return to bag
      </Link>

      <h1 className="text-4xl font-black mb-12">CHECKOUT</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#ff4d4d] w-10 h-10 rounded-xl flex items-center justify-center text-white"><MapPin size={24} /></div>
              <h2 className="text-2xl font-bold">Delivery Address</h2>
            </div>
            <div className="glass p-6 rounded-3xl border-white/10 space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Address Line</label>
                <input type="text" placeholder="123 Galactic Way, Space City" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#ff4d4d]/50" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Pincode</label>
                  <input type="text" placeholder="700001" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#ff4d4d]/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Phone</label>
                  <input type="text" placeholder="+91 9876543210" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#ff4d4d]/50" />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-500 w-10 h-10 rounded-xl flex items-center justify-center text-white"><CreditCard size={24} /></div>
              <h2 className="text-2xl font-bold">Payment Mode</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="glass border-[#ff4d4d]/50 p-6 rounded-3xl text-center space-y-2 group transition-all bg-[#ff4d4d]/5">
                <div className="mx-auto w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#ff4d4d] group-hover:scale-110 transition-transform"><CheckCircle2 size={24} /></div>
                <p className="font-bold">COD</p>
              </button>
              <button className="glass border-white/10 p-6 rounded-3xl text-center space-y-2 group transition-all hover:bg-white/5 grayscale opacity-50 cursor-not-allowed">
                <div className="mx-auto w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40"><CreditCard size={24} /></div>
                <p className="font-bold">UPI / Cards</p>
              </button>
            </div>
            <p className="text-[10px] text-white/30 text-center mt-4">Digital payments are temporarily unavailable in this quadrant.</p>
          </section>
        </div>

        <div className="space-y-8">
          <div className="glass p-8 rounded-[40px] border-white/10 sticky top-28">
            <h3 className="text-xl font-black mb-8">ORDER SUMMARY</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-white/60">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Platform Charges</span>
                <span>₹5</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Delivery</span>
                <span className="text-green-400">FREE</span>
              </div>
              <div className="border-t border-white/10 pt-4 flex justify-between text-2xl font-black">
                <span>To Pay</span>
                <span className="text-[#ff4d4d]">₹{totalPrice + 5}</span>
              </div>
            </div>

            <div className="bg-white/5 p-4 rounded-2xl mb-8 flex items-center gap-4 border border-white/5">
              <Truck size={32} className="text-white/20" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#ff4d4d]">Fast Delivery</p>
                <p className="text-sm text-white/60">Estimated: 35-40 mins</p>
              </div>
            </div>

            <button 
              onClick={handlePlaceOrder}
              disabled={loading}
              className="w-full bg-[#ff4d4d] py-5 rounded-2xl font-black text-xl shadow-2xl shadow-red-500/30 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                  PROCESSING...
                </>
              ) : (
                'PLACE ORDER'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
