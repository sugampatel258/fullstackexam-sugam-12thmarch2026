"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { Product } from "@/types";

export default function ProductDetail() {
  const params = useParams();
  const id = params?.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    try {
      const res = await axios.get<Product>(
        `${process.env.NEXT_PUBLIC_BASE_URL}product/${id}`
      );

      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getProduct();
    }
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}cart/add`,
        {
          productId: id,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Product added to cart");
    } catch (error) {
      console.error("Add to cart error:", error);
      alert("Failed to add product to cart");
    }
  };

  if (loading) {
    return <p className="p-10">Loading product...</p>;
  }

  if (!product) {
    return <p className="p-10">Product not found</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{product.name}</h1>

      <p className="text-gray-600">{product.category}</p>

      <p className="mt-4">{product.description}</p>

      <p className="text-xl font-bold mt-4">${product.price}</p>

      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
