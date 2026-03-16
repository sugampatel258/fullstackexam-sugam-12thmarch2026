"use client";

import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <Link href="/" className="text-xl font-bold">
        MyShop
      </Link>

      <div className="flex gap-4 items-center">
        <Link href="/products">Products</Link>

        {!isLoggedIn && (
          <>
            <Link href="/signin">Login</Link>
            <Link href="/signup">Signup</Link>
          </>
        )}

        {isLoggedIn && (
          <>
            <Link href="/orders">Orders</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/reports">Reports</Link>

            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
