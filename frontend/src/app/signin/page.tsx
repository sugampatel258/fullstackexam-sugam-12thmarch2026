"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/validations";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../context/AuthContext";

type LoginFormData = z.infer<typeof loginSchema>;

export default function SigninPage() {
  const router = useRouter();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (data: LoginFormData) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}auth/login`,
        data
      );
      login(res.data.token);
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

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          <div>
            <input
              {...register("email")}
              placeholder="Email"
              className="border p-2 w-full"
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>

          <div>
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="border p-2 w-full"
            />
            <p className="text-red-500">{errors.password?.message}</p>
          </div>

          <button type="submit" className="bg-green-500 text-white px-4 py-2">
            Login
          </button>
        </form>
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
