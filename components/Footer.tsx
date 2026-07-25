import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050C16] text-white pt-20 pb-10">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12">

        {/* Company */}

        <div>

          <div className="flex items-center gap-3">

            <Image
              src="/logo.png"
              alt="ROUTIQ"
              width={55}
              height={55}
            />

            <div>

              <h2 className="text-2xl font-bold text-yellow-400">
                ROUTIQ
              </h2>

              <p className="text-sm text-gray-400">
                Hotel Growth Hub
              </p>

            </div>

          </div>

          <p className="text-gray-400 mt-6 leading-7">
            Helping hotels increase direct bookings, improve online visibility,
            and grow revenue through digital marketing and AI-powered solutions.
          </p>

        </div>

        {/* Services */}

        <div>

          <h3 className="text-xl font-bold mb-6">
            Services
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>Website Development</li>

            <li>SEO Optimization</li>

            <li>AI Marketing</li>

            <li>Social Media Marketing</li>

            <li>Revenue Growth</li>

          </ul>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-bold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <a href="#services" className="text-gray-400 hover:text-yellow-400">
                Services
              </a>
            </li>

            <li>
              <a href="#audit" className="text-gray-400 hover:text-yellow-400">
                Growth Audit
              </a>
            </li>

            <li>
              <a href="/login" className="text-gray-400 hover:text-yellow-400">
                Admin Login
              </a>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-bold mb-6">
            Contact
          </h3>

          <div className="space-y-4 text-gray-400">

            <p>📧 routiqhotelsgrowthhub@gmail.com</p>

            <p>📞 +91 7994681637</p>

            <p>📍 Kerala, India</p>

          </div>

        </div>

      </div>

      <div className="border-t border-[#223754] mt-14 pt-8 text-center">

        <p className="text-gray-500">
          © 2026 ROUTIQ • Hotel Growth Hub
        </p>

        <p className="text-gray-600 mt-2 text-sm">
          Built with Next.js • React • Tailwind CSS • Supabase
        </p>

      </div>

    </footer>
  );
}