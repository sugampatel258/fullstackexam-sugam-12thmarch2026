export interface AuthUser {
  id: number;
  name: string;
  email: string;
}

export interface LoginResponse {
  token: string;
  user: AuthUser;
}

export interface Product {
  _id: string;
  name: string;
  category: string;
  description?: string;
  price: number;
  stock: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Order {
  id: number;
  user_id: number;
  total_amount: number;
  created_at: string;
}

export interface OrderItem {
  order_id: number;
  product_id: string;
  quantity: number;
  price: number;
}

export interface RevenueReport {
  day: string;
  revenue: number;
}

export interface CategorySummary {
  _id: string;
  totalProducts: number;
  avgPrice: number;
}
