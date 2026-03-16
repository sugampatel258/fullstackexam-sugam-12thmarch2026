"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Order {
  id: number;
  total_amount: number;
  created_at: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}order`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOrders(res.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return <p className="p-10">Loading orders...</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      {orders.length === 0 && <p>No orders found</p>}

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border p-4 rounded shadow">
            <p>
              <strong>Order ID:</strong> {order.id}
            </p>

            <p>
              <strong>Total:</strong> ${order.total_amount}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {new Date(order.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
