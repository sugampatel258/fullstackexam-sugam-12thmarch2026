"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/validations/";
import { z } from "zod";
import axios from "axios";

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}auth/signup`, data);

      alert("Signup successful");
    } catch (error) {
      alert("Signup failed");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Signup</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("name")}
            placeholder="Name"
            className="border p-2 w-full"
          />
          <p className="text-red-500">{errors.name?.message}</p>
        </div>

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

        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Signup
        </button>
      </form>
    </div>
  );
}
