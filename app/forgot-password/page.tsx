"use client";

import { useState } from "react";
import Link from "next/link";
import { supabaseClient } from "@/lib/supabase-client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:3000/update-password",
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("✅ Password reset email has been sent. Please check your inbox.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#08111F] flex items-center justify-center px-6">

      <div className="bg-[#13233A] w-full max-w-md rounded-3xl shadow-2xl border border-[#223754] p-10">

        <h1 className="text-3xl font-bold text-yellow-400">
          Forgot Password
        </h1>

        <p className="text-gray-400 mt-3 mb-8">
          Enter your admin email address and we'll send you a password reset link.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            required
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#08111F] border border-[#223754] rounded-xl p-4 text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

        </form>

        {message && (
          <p className="mt-6 text-center text-gray-300">
            {message}
          </p>
        )}

        <div className="mt-8 text-center">
          <Link
            href="/login"
            className="text-yellow-400 hover:underline"
          >
            ← Back to Login
          </Link>
        </div>

      </div>

    </main>
  );
}