"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseClient } from "@/lib/supabase-client";

export default function UpdatePasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    const { error } = await supabaseClient.auth.updateUser({
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    alert("✅ Password updated successfully.");

    router.push("/login");
  }

  return (
    <main className="min-h-screen bg-[#08111F] flex items-center justify-center px-6">

      <div className="bg-[#13233A] w-full max-w-md rounded-3xl shadow-2xl border border-[#223754] p-10">

        <h1 className="text-3xl font-bold text-yellow-400">
          Create New Password
        </h1>

        <p className="text-gray-400 mt-3 mb-8">
          Enter your new password below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="password"
            required
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#08111F] border border-[#223754] rounded-xl p-4 text-white"
          />

          <input
            type="password"
            required
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-[#08111F] border border-[#223754] rounded-xl p-4 text-white"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl"
          >
            Update Password
          </button>

        </form>

        {message && (
          <p className="text-center text-red-400 mt-5">
            {message}
          </p>
        )}

      </div>

    </main>
  );
}