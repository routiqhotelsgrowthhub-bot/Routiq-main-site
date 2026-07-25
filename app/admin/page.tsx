import { supabaseServer } from "@/lib/supabase-server";
import AdminDashboard from "@/components/AdminDashboard";
import LogoutButton from "@/components/LogoutButton";
import AdminSidebar from "@/components/AdminSidebar";

export default async function AdminPage() {
  const { data: leads, error } = await supabaseServer
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="min-h-screen bg-[#08111F] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500">
            Database Error
          </h1>

          <p className="mt-4 text-gray-400">
            {error.message}
          </p>
        </div>
      </main>
    );
  }

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-[#08111F] text-white flex">
      <AdminSidebar />

      <div className="flex-1 p-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-yellow-400">
              ROUTIQ CRM
            </h1>

            <p className="text-gray-400 mt-2">
              Hotel Growth Hub Admin Dashboard
            </p>

            <p className="text-sm text-gray-500 mt-1">
              {today}
            </p>
          </div>

          <LogoutButton />
        </div>

        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-black rounded-2xl p-8 mb-8 shadow-lg">
          <h2 className="text-3xl font-bold">
            Welcome Back 👋
          </h2>

          <p className="mt-3 text-lg">
            Manage your hotel leads, monitor enquiries, and grow your business with ROUTIQ CRM.
          </p>
        </div>

        {/* Search + Dashboard Cards + Leads Table */}
        <AdminDashboard leads={leads ?? []} />

        {/* Recent Activity */}
        <div className="bg-[#13233A] rounded-2xl p-6 mt-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>✅ Lead management system active</li>
            <li>📊 Dashboard synchronized with database</li>
            <li>🔒 Secure admin authentication enabled</li>
          </ul>
        </div>
      </div>
    </main>
  );
}