export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Submit Growth Audit",
      description:
        "Fill out our free hotel growth audit form with your business details and challenges.",
      icon: "📝",
    },
    {
      number: "02",
      title: "We Analyse Your Hotel",
      description:
        "Our experts evaluate your online presence, competitors, SEO and booking performance.",
      icon: "🔍",
    },
    {
      number: "03",
      title: "Receive Your Strategy",
      description:
        "Get a customised digital growth roadmap designed specifically for your hotel.",
      icon: "📊",
    },
    {
      number: "04",
      title: "Grow Your Revenue",
      description:
        "Implement the strategy with ROUTIQ and increase direct bookings and guest engagement.",
      icon: "🚀",
    },
  ];

  return (
    <section className="bg-[#0D1728] py-24 text-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <span className="text-yellow-400 uppercase tracking-[5px]">
            Our Process
          </span>

          <h2 className="text-5xl font-bold mt-4">
            How ROUTIQ Works
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            A simple four-step process designed to help hotels achieve
            sustainable growth and increase direct bookings.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-[#13233A] border border-[#223754] rounded-2xl p-8 hover:border-yellow-400 hover:-translate-y-2 transition duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-5 left-6 bg-yellow-500 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-5xl mt-6 mb-6">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}