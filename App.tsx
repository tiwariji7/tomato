
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ThreeDBackground } from './components/ThreeDBackground';
import { Navbar } from './components/Navbar';

// Pages
import { Home } from './pages/Home';
import { RestaurantListing } from './pages/RestaurantListing';
import { RestaurantDetail } from './pages/RestaurantDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { OrderSuccess } from './pages/OrderSuccess';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <ThreeDBackground />
      <Navbar />
      <main className="pb-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<RestaurantListing />} />
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<OrderSuccess />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      {/* Footer */}
      <footer className="py-12 px-4 glass border-t-0 border-white/5 bg-black/40 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-[#ff4d4d] font-black text-xl mb-4">TOMATO</h4>
            <p className="text-white/40 text-sm">The first intergalactic food delivery service on Earth.</p>
          </div>
          <div>
            <h5 className="font-bold mb-4">Discover</h5>
            <ul className="text-white/40 text-sm space-y-2">
              <li><button className="hover:text-white transition-colors">Restaurants</button></li>
              <li><button className="hover:text-white transition-colors">Offers</button></li>
              <li><button className="hover:text-white transition-colors">Trending</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Help</h5>
            <ul className="text-white/40 text-sm space-y-2">
              <li><button className="hover:text-white transition-colors">Support</button></li>
              <li><button className="hover:text-white transition-colors">FAQs</button></li>
              <li><button className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Social</h5>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#ff4d4d] transition-colors cursor-pointer">X</div>
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#ff4d4d] transition-colors cursor-pointer">IG</div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-white/20 text-[10px] uppercase tracking-widest font-bold flex flex-col items-center gap-2">
          <span>&copy; 2024 TOMATO INDUSTRIES • DESIGNED FOR THE FUTURE</span>
          <span className="text-white/40">Developed with ❤️ by Shivam Tiwari</span>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
