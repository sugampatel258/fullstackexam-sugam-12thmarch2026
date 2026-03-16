"use client";

import axios from "axios";

export default function CheckoutPage() {
  const handleCheckout = async () => {
    await axios.post("/orders/checkout");

    alert("Order placed!");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <button
        onClick={handleCheckout}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Place Order
      </button>
    </div>
  );
}
