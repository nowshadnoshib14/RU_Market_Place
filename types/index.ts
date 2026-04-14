export type CategoryType = 'Electronics' | 'Books' | 'Furniture' | 'Gadgets' | 'Others' | 'All';

export interface Product {
  id: string;
  title: string;
  price: number;
  category: CategoryType;
  location: string;
  emoji: string;
  description: string;
  posted_at: string;
  seller: Seller;
  images?: string[];
  liked?: boolean;
}

export interface Seller {
  id: string;
  name: string;
  avatar: string;
  department: string;
  rating: number;
  reviews: number;
  listings: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  department: string;
  location: string;
  listings: number;
  sold: number;
  saved: number;
}
