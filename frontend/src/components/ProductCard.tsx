import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <h3 className="text-lg font-semibold">{product.name}</h3>

      <p className="text-gray-600">{product.category}</p>

      <p className="font-bold mt-2">${product.price}</p>

      <Link
        href={`/products/${product._id}`}
        className="text-blue-500 mt-2 block"
      >
        View Product
      </Link>
    </div>
  );
}
