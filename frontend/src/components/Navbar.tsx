"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(
    typeof window !== "undefined" && localStorage.getItem("token")
  );

  const handleLogout = () => {
    localStorage.removeItem("token");

    setIsLoggedIn(false);

    router.push("/signin");
  };

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
          </>
        )}

        {isLoggedIn && (
          <>
            <Link href="/orders">Orders</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/reports">Reports</Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
