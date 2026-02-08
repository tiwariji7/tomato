
export interface Restaurant {
  id: string;
  name: string;
  cuisine: string[];
  rating: number;
  deliveryTime: number;
  priceForTwo: number;
  image: string;
  isVeg: boolean;
  offers?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  isVeg: boolean;
  rating: number;
}

export interface CartItem extends MenuItem {
  quantity: number;
  restaurantId: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  date: string;
  status: 'Delivered' | 'On the way' | 'Preparing' | 'Cancelled';
}
