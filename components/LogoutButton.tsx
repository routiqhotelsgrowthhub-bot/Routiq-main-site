"use client";

import { useRouter } from "next/navigation";
import { supabaseClient } from "@/lib/supabase-client";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await supabaseClient.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      onClick={logout}
      className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg"
    >
      Logout
    </button>
  );
}