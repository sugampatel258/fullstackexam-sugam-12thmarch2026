"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/types";

export interface CartItem {
  productId: Product;
  quantity: number;
}

export interface Cart {
  _id: string;
  userId: number;
  items: CartItem[];
}

export default function CartPage() {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCart(res.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleCheckout = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}order/checkout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Order placed successfully!");

      setCart(null);
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Checkout failed");
    } finally {
      setLoading(false);
    }
  };

  if (!cart || cart.items.length === 0) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold">Cart</h1>
        <p className="mt-4">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>

      {cart.items.map((item: CartItem) => (
        <div key={item.productId._id} className="border p-4 mb-3 rounded">
          <p className="font-semibold">{item.productId.name}</p>

          <p>Price: ${item.productId.price}</p>

          <p>Qty: {item.quantity}</p>
        </div>
      ))}

      <button
        onClick={handleCheckout}
        disabled={loading}
        className="bg-green-600 text-white px-6 py-2 rounded mt-6"
      >
        {loading ? "Processing..." : "Proceed to Checkout"}
      </button>
    </div>
  );
}
