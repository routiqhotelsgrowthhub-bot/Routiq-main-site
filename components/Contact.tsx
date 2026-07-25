export default function Contact() {
  return (
    <section className="bg-[#08111F] py-24">
      <div className="max-w-6xl mx-auto px-8 text-center">

        <h2 className="text-yellow-400 uppercase tracking-[5px]">
          Contact Us
        </h2>

        <h1 className="text-5xl font-bold text-white mt-4">
          Let's Grow Your Hotel Together
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Ready to increase your hotel's online visibility and direct bookings?
          Get in touch with ROUTIQ today.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-[#13233A] rounded-2xl p-8">
            <div className="text-5xl">📧</div>
            <h3 className="text-2xl font-bold mt-4">Email</h3>
            <p className="text-gray-400 mt-2">
              routiqhotelsgrowthhub@gmail.com
            </p>
          </div>

          <div className="bg-[#13233A] rounded-2xl p-8">
            <div className="text-5xl">📞</div>
            <h3 className="text-2xl font-bold mt-4">Phone</h3>
            <p className="text-gray-400 mt-2">
              +91 7994691637
            </p>
          </div>

          <div className="bg-[#13233A] rounded-2xl p-8">
            <div className="text-5xl">📍</div>
            <h3 className="text-2xl font-bold mt-4">Location</h3>
            <p className="text-gray-400 mt-2">
              Kerala, India
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}