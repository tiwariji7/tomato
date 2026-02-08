
import { Restaurant, MenuItem, Order } from './types';

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'res-1',
    name: 'Cyber Sushi',
    cuisine: ['Japanese', 'Sushi', 'Asian'],
    rating: 4.8,
    deliveryTime: 25,
    priceForTwo: 1200,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800',
    isVeg: false,
    offers: '50% OFF up to ₹100'
  },
  {
    id: 'res-2',
    name: 'The Burger Lab',
    cuisine: ['American', 'Burgers', 'Fast Food'],
    rating: 4.5,
    deliveryTime: 30,
    priceForTwo: 600,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    isVeg: false,
    offers: 'Free Delivery'
  },
  {
    id: 'res-3',
    name: 'Verde Kitchen',
    cuisine: ['Healthy', 'Salads', 'Continental'],
    rating: 4.7,
    deliveryTime: 35,
    priceForTwo: 800,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    isVeg: true,
    offers: '₹125 OFF with TOMATO'
  },
  {
    id: 'res-4',
    name: 'Spicy Nebula',
    cuisine: ['Indian', 'Tandoor', 'Biryani'],
    rating: 4.4,
    deliveryTime: 40,
    priceForTwo: 1000,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800',
    isVeg: false
  },
  {
    id: 'res-5',
    name: 'Pasta Planet',
    cuisine: ['Italian', 'Pasta', 'Pizza'],
    rating: 4.6,
    deliveryTime: 32,
    priceForTwo: 900,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800',
    isVeg: true,
    offers: 'Buy 1 Get 1'
  },
  {
    id: 'res-6',
    name: 'Wok Star',
    cuisine: ['Chinese', 'Thai', 'Asian'],
    rating: 4.2,
    deliveryTime: 28,
    priceForTwo: 700,
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=800',
    isVeg: false
  },
  {
    id: 'res-7',
    name: 'Taco Nebula',
    cuisine: ['Mexican', 'Tacos', 'Tex-Mex'],
    rating: 4.6,
    deliveryTime: 22,
    priceForTwo: 500,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800',
    isVeg: false,
    offers: '20% OFF'
  },
  {
    id: 'res-8',
    name: 'Gelato Galaxy',
    cuisine: ['Desserts', 'Ice Cream'],
    rating: 4.9,
    deliveryTime: 15,
    priceForTwo: 400,
    image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&q=80&w=800',
    isVeg: true,
    offers: 'Summer Special'
  },
  {
    id: 'res-9',
    name: 'The Green Planet',
    cuisine: ['Vegan', 'Eco-friendly', 'Healthy'],
    rating: 4.7,
    deliveryTime: 38,
    priceForTwo: 850,
    image: 'https://images.unsplash.com/photo-1540914124281-342729c4aa1f?auto=format&fit=crop&q=80&w=800',
    isVeg: true
  }
];

export const MENU_ITEMS: Record<string, MenuItem[]> = {
  'res-1': [
    { id: 'm1', name: 'Neon Dragon Roll', price: 450, category: 'Sushi', description: 'Tempura prawn with spicy tuna topping and neon soy sauce glaze.', image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=400', isVeg: false, rating: 4.9 },
    { id: 'm2', name: 'Miso Soul Soup', price: 180, category: 'Soups', description: 'Traditional miso soup with silk tofu and spring onions.', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400', isVeg: true, rating: 4.5 }
  ],
  'res-2': [
    { id: 'm3', name: 'Galactic Double Cheese', price: 320, category: 'Burgers', description: 'Double wagyu beef with melted neon cheddar.', image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=400', isVeg: false, rating: 4.8 },
    { id: 'm4', name: 'Solar Fries', price: 150, category: 'Sides', description: 'Seasoned crinkle cut fries with peri-peri stardust.', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400', isVeg: true, rating: 4.6 }
  ],
  'res-7': [
    { id: 'm7a', name: 'Cosmic Carnitas', price: 280, category: 'Tacos', description: 'Slow-cooked pork with zero-gravity salsa verde.', image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&q=80&w=400', isVeg: false, rating: 4.7 },
    { id: 'm7b', name: 'Stardust Nachos', price: 210, category: 'Sides', description: 'Tortilla chips with radioactive cheese sauce (it is just cheddar, we promise).', image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&q=80&w=400', isVeg: true, rating: 4.4 }
  ],
  'res-8': [
    { id: 'm8a', name: 'Milky Way Vanilla', price: 120, category: 'Scoops', description: 'Pure vanilla bean from the furthest moons.', image: 'https://images.unsplash.com/photo-1570197788417-0e9232a9d3ad?auto=format&fit=crop&q=80&w=400', isVeg: true, rating: 4.9 },
    { id: 'm8b', name: 'Black Hole Chocolate', price: 150, category: 'Scoops', description: 'Darkest chocolate imaginable, dense enough to warp light.', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=400', isVeg: true, rating: 4.8 }
  ],
  'res-9': [
    { id: 'm9a', name: 'Bio-Sphere Bowl', price: 390, category: 'Bowls', description: 'Quinoa, kale, avocado, and hydroponic sprouts.', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400', isVeg: true, rating: 4.6 },
    { id: 'm9b', name: 'Zen Smoothie', price: 180, category: 'Drinks', description: 'Spinach, apple, and tranquility.', image: 'https://images.unsplash.com/photo-1623065422902-30a2ad299dd4?auto=format&fit=crop&q=80&w=400', isVeg: true, rating: 4.7 }
  ],
};

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-77421',
    items: [
      { id: 'm1', name: 'Neon Dragon Roll', price: 450, category: 'Sushi', description: '', image: '', isVeg: false, rating: 4.9, quantity: 2, restaurantId: 'res-1' }
    ],
    total: 900,
    date: '2023-11-15',
    status: 'Delivered'
  }
];
