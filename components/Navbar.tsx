import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08111F]/90 backdrop-blur-md border-b border-[#1B2D48]">

      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="ROUTIQ"
            width={50}
            height={50}
            priority
          />

          <div>
            <h1 className="text-2xl font-bold text-yellow-400">
              ROUTIQ
            </h1>

            <p className="text-xs text-gray-400">
              Hotel Growth Hub
            </p>
          </div>

        </div>

        <nav className="hidden md:flex gap-8 text-gray-300">

          <a href="#services" className="hover:text-yellow-400">
            Services
          </a>

          <a href="#audit" className="hover:text-yellow-400">
            Growth Audit
          </a>

          <a href="#contact" className="hover:text-yellow-400">
            Contact
          </a>

          <a href="/login" className="hover:text-yellow-400">
            Admin
          </a>

        </nav>

      </div>

    </header>
  );
}