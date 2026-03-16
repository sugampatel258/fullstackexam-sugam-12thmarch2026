"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}auth/signup`, {
        name,
        email,
        password,
      });

      alert("Registration successful!");

      router.push("/signin");
    } catch (error: any) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>

        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 w-full mb-4 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded"
        >
          Sign Up
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?
          <a href="/login" className="text-blue-500 ml-1">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
