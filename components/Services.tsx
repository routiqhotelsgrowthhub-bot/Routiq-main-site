export default function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Website Development",
      description:
        "Modern, responsive hotel websites designed to increase direct bookings and improve user experience.",
    },
    {
      icon: "📈",
      title: "SEO Optimization",
      description:
        "Improve your Google rankings and attract more guests through search engine optimisation.",
    },
    {
      icon: "🤖",
      title: "AI Marketing",
      description:
        "Leverage AI-powered campaigns and automation to reach the right audience efficiently.",
    },
    {
      icon: "⭐",
      title: "Reputation Management",
      description:
        "Monitor, improve and manage your online reviews to build trust with future guests.",
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      description:
        "Build your hotel's online presence with engaging content and targeted advertising.",
    },
    {
      icon: "💰",
      title: "Revenue Growth",
      description:
        "Increase occupancy and maximise profits through strategic digital marketing solutions.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#08111F] py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <span className="text-yellow-400 uppercase tracking-[5px]">
            Our Services
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Everything Your Hotel Needs
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            ROUTIQ provides complete digital growth solutions for hotels,
            helping you increase visibility, attract more guests and grow
            your revenue.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#13233A] rounded-2xl p-8 border border-[#223754] hover:border-yellow-400 hover:-translate-y-2 transition duration-300 shadow-lg"
            >
              <div className="text-6xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}