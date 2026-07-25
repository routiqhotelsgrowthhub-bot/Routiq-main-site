export default function Stats() {
  const services = [
    {
      title: "AI-Powered",
      subtitle: "Hotel Marketing",
      icon: "🤖",
    },
    {
      title: "SEO &",
      subtitle: "Google Ranking",
      icon: "📈",
    },
    {
      title: "Website",
      subtitle: "Development",
      icon: "💻",
    },
    {
      title: "Revenue",
      subtitle: "Growth Strategy",
      icon: "🚀",
    },
  ];

  return (
    <section className="bg-[#08111F] py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-yellow-400 uppercase tracking-[5px]">
            What We Offer
          </h2>

          <h1 className="text-5xl font-bold text-white mt-4">
            Helping Hotels Grow with Modern Digital Solutions
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            ROUTIQ helps hotels increase their online visibility, attract more
            guests, and improve revenue through AI-powered marketing, SEO,
            website optimization, and digital growth strategies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#13233A] border border-[#223754] rounded-2xl p-8 text-center hover:scale-105 transition duration-300 shadow-lg"
            >
              <div className="text-5xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-yellow-400">
                {service.title}
              </h3>

              <p className="text-gray-300 mt-3">
                {service.subtitle}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}