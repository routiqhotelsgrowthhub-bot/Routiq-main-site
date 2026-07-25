"use client";

import Image from "next/image";
import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-72 min-h-screen bg-[#13233A] border-r border-[#223754] p-6 flex flex-col">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">

        <Image
          src="/logo.png"
          alt="ROUTIQ Logo"
          width={55}
          height={55}
          priority
        />

        <div>
          <h1 className="text-2xl font-bold text-yellow-400">
            ROUTIQ
          </h1>

          <p className="text-xs text-gray-400 tracking-widest">
            HOTEL GROWTH HUB
          </p>
        </div>

      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4">

        <Link
          href="/admin"
          className="bg-yellow-500 text-black font-semibold px-5 py-3 rounded-xl hover:bg-yellow-400 transition"
        >
          📊 Dashboard
        </Link>

        <a
          href="#"
          className="bg-[#1B2D48] text-white px-5 py-3 rounded-xl hover:bg-[#223754] transition"
        >
          🏨 Leads
        </a>

        <a
          href="#"
          className="bg-[#1B2D48] text-white px-5 py-3 rounded-xl hover:bg-[#223754] transition"
        >
          📈 Analytics
        </a>

        <a
          href="#"
          className="bg-[#1B2D48] text-white px-5 py-3 rounded-xl hover:bg-[#223754] transition"
        >
          📞 Contact Requests
        </a>

        <a
          href="#"
          className="bg-[#1B2D48] text-white px-5 py-3 rounded-xl hover:bg-[#223754] transition"
        >
          ⚙ Settings
        </a>

      </nav>

      {/* Bottom Section */}
      <div className="mt-auto pt-8 border-t border-[#223754]">

        <p className="text-gray-500 text-sm">
          ROUTIQ CRM
        </p>

        <p className="text-gray-600 text-xs mt-2">
          Version 1.0
        </p>

      </div>

    </aside>
  );
}