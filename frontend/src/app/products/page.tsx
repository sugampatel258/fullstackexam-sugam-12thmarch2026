"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

export interface ProductListResponse {
  page: number;
  total: number;
  products: Product[];
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const res = await axios.get<ProductListResponse>(
        `${process.env.NEXT_PUBLIC_BASE_URL}product`
      );

      setProducts(res.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <p className="p-10">Loading products...</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
