"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SigninPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}auth/login`,
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);

      alert("Successfully Logged in!");
      router.push("/products");
    } catch (error: any) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-8 rounded w-80">
        <h1 className="text-xl mb-4">Login</h1>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white w-full p-2"
        >
          Login
        </button>
        <p className="text-sm text-center mt-4">
          Don&apos;t have an account?
          <a href="/signup" className="text-blue-500 ml-1">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
