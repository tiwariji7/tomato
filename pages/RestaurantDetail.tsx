
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, Info, Plus, Minus, ShoppingBag, ChevronLeft } from 'lucide-react';
import { RESTAURANTS, MENU_ITEMS } from '../constants';
import { useCart } from '../context/CartContext';

export const RestaurantDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = RESTAURANTS.find(r => r.id === id);
  const menu = MENU_ITEMS[id || ''] || [];
  const { cart, addToCart, updateQuantity, totalItems, totalPrice } = useCart();

  if (!restaurant) return <div>Restaurant not found</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link to="/restaurants" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-6 transition-colors">
        <ChevronLeft size={20} /> Back to restaurants
      </Link>

      {/* Banner */}
      <div className="relative h-64 md:h-80 rounded-[40px] overflow-hidden mb-12 shadow-2xl">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-2">{restaurant.name}</h1>
            <p className="text-white/60 text-lg">{restaurant.cuisine.join(' • ')}</p>
          </div>
          <div className="flex gap-4">
            <div className="glass px-6 py-3 rounded-2xl flex flex-col items-center">
              <span className="flex items-center gap-1 font-bold text-xl"><Star size={18} className="text-yellow-400 fill-yellow-400" /> {restaurant.rating}</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">Rating</span>
            </div>
            <div className="glass px-6 py-3 rounded-2xl flex flex-col items-center">
              <span className="font-bold text-xl">{restaurant.deliveryTime}m</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">Delivery</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Menu Items */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-black mb-8 border-b border-white/10 pb-4">MENU</h2>
          <div className="space-y-8">
            {menu.length > 0 ? menu.map((item) => {
              const cartItem = cart.find(i => i.id === item.id);
              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {item.isVeg ? <div className="w-3 h-3 border border-green-500 p-0.5"><div className="w-full h-full bg-green-500 rounded-full" /></div> : <div className="w-3 h-3 border border-red-500 p-0.5"><div className="w-full h-full bg-red-500 rounded-full" /></div>}
                      {item.rating > 4.5 && <span className="text-xs font-bold text-yellow-400 flex items-center gap-0.5"><Star size={10} fill="currentColor" /> Bestseller</span>}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                    <p className="text-lg font-medium text-white/80 mb-2">₹{item.price}</p>
                    <p className="text-white/40 text-sm line-clamp-2">{item.description}</p>
                  </div>
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-2xl shadow-lg border border-white/5" />
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4">
                      {cartItem ? (
                        <div className="bg-[#ff4d4d] flex items-center justify-between px-2 py-1 rounded-xl shadow-lg font-bold">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-black/10 rounded-lg"><Minus size={14} /></button>
                          <span className="text-sm">{cartItem.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-black/10 rounded-lg"><Plus size={14} /></button>
                        </div>
                      ) : (
                        <button 
                          onClick={() => addToCart(item, id!)}
                          className="bg-white text-black w-full py-1.5 rounded-xl shadow-lg font-bold text-sm hover:bg-[#ff4d4d] hover:text-white transition-colors uppercase tracking-wider"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            }) : (
              <div className="text-center py-12 glass rounded-3xl">
                <p className="text-white/40 italic">Menu is currently being updated by the robots...</p>
              </div>
            )}
          </div>
        </div>

        {/* Floating Cart (Desktop) */}
        <div className="hidden lg:block">
          <div className="sticky top-28 glass p-6 rounded-[32px] border-white/10">
            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
              <ShoppingBag size={20} className="text-[#ff4d4d]" /> YOUR BAG
            </h3>
            {cart.length > 0 ? (
              <>
                <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center text-sm">
                      <div className="flex-1">
                        <p className="font-bold">{item.name}</p>
                        <p className="text-white/40">₹{item.price} x {item.quantity}</p>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded-lg">
                        <button onClick={() => updateQuantity(item.id, -1)}><Minus size={12} /></button>
                        <span className="w-4 text-center font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}><Plus size={12} /></button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-4 mb-6">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Subtotal</span>
                    <span>₹{totalPrice}</span>
                  </div>
                  <p className="text-[10px] text-white/40 mt-1 uppercase tracking-widest">Extra charges may apply</p>
                </div>
                <Link to="/cart" className="block w-full bg-[#ff4d4d] py-4 rounded-2xl text-center font-black shadow-xl shadow-red-500/20 hover:scale-[1.02] active:scale-95 transition-all">
                  CHECKOUT
                </Link>
              </>
            ) : (
              <div className="text-center py-8">
                <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="Empty" className="w-20 mx-auto mb-4 opacity-20 grayscale" />
                <p className="text-white/40 text-sm">Your bag is as empty as deep space.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Floating Cart */}
      {totalItems > 0 && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="lg:hidden fixed bottom-6 left-4 right-4 z-40"
        >
          <Link to="/cart" className="bg-[#ff4d4d] flex items-center justify-between p-4 rounded-2xl shadow-2xl font-black">
            <div className="flex items-center gap-3">
              <span className="bg-white/20 w-8 h-8 rounded-lg flex items-center justify-center text-sm">{totalItems}</span>
              <span>₹{totalPrice}</span>
            </div>
            <span className="flex items-center gap-2">VIEW BAG <ShoppingBag size={18} /></span>
          </Link>
        </motion.div>
      )}
    </div>
  );
};
