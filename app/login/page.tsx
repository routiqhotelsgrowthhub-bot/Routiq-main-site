"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { supabaseClient } from "@/lib/supabase-client";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#08111F] flex items-center justify-center px-6 relative">

      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-8 left-8 text-yellow-400 hover:text-yellow-300 font-semibold"
      >
        ← Back to Home
      </Link>

      <div className="bg-[#13233A] w-full max-w-md rounded-3xl shadow-2xl border border-[#223754] p-10">

        {/* Logo */}
        <div className="flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="ROUTIQ"
            width={90}
            height={90}
            priority
          />

          <h1 className="text-3xl font-bold text-yellow-400 mt-4">
            ROUTIQ
          </h1>

          <p className="text-gray-400 mt-2">
            Hotel Growth Hub
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-white text-2xl font-bold mt-10 text-center">
          Admin Login
        </h2>

        <p className="text-gray-400 text-center mt-2 mb-8">
          Sign in to access your CRM dashboard.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#08111F] border border-[#223754] rounded-xl p-4 text-white outline-none focus:border-yellow-400"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#08111F] border border-[#223754] rounded-xl p-4 text-white outline-none focus:border-yellow-400"
          />

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-yellow-400 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {error && (
            <p className="text-red-400 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition disabled:opacity-60"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

      </div>

    </main>
  );
}