import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#08111F] text-white flex items-center pt-28">

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <div>

          <span className="inline-block bg-yellow-500/20 text-yellow-400 px-5 py-2 rounded-full uppercase tracking-[4px] text-sm">
            AI Powered Hotel Growth Hub
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mt-8">
            Grow Your Hotel
            <br />

            <span className="text-yellow-400">
              Beyond Expectations
            </span>
          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-8 max-w-xl">
            ROUTIQ helps hotels increase direct bookings, improve online
            visibility, strengthen their brand, and grow revenue through
            modern digital marketing and AI-powered solutions.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#audit"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-full transition"
            >
              Get Free Growth Audit
            </a>

            <a
              href="#services"
              className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-full transition"
            >
              Explore Services
            </a>

          </div>

          {/* Feature Cards */}

          <div className="grid grid-cols-3 gap-4 mt-14">

            <div className="bg-[#13233A] rounded-xl p-4 text-center">
              <h2 className="text-3xl font-bold text-yellow-400">
                SEO
              </h2>

              <p className="text-gray-400 text-sm mt-2">
                Better Rankings
              </p>
            </div>

            <div className="bg-[#13233A] rounded-xl p-4 text-center">
              <h2 className="text-3xl font-bold text-yellow-400">
                AI
              </h2>

              <p className="text-gray-400 text-sm mt-2">
                Smart Marketing
              </p>
            </div>

            <div className="bg-[#13233A] rounded-xl p-4 text-center">
              <h2 className="text-3xl font-bold text-yellow-400">
                ROI
              </h2>

              <p className="text-gray-400 text-sm mt-2">
                Revenue Growth
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <Image
            src="/hero.jpg"
            alt="Luxury Hotel"
            width={700}
            height={650}
            className="rounded-3xl shadow-2xl object-cover"
            priority
          />

        </div>

      </div>

    </section>
  );
}