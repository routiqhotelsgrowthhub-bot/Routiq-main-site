import {
  TrendingUp,
  Globe,
  Users,
  Lightbulb,
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description:
      "Every strategy is designed to help hotels increase bookings and revenue.",
  },
  {
    icon: Globe,
    title: "Digital First",
    description:
      "Modern websites, SEO, Google Business Profile and digital marketing.",
  },
  {
    icon: Users,
    title: "Hotel Partnerships",
    description:
      "We work closely with hotel owners to understand their unique goals.",
  },
  {
    icon: Lightbulb,
    title: "Startup Innovation",
    description:
      "Fresh ideas, AI-powered solutions and creative strategies built for today's hospitality industry.",
  },
];

export default function WhyRoutiq() {
  return (
    <section className="bg-[#08111F] py-28">
      <div className="max-w-7xl mx-auto px-8">

        <p className="text-yellow-400 uppercase tracking-[4px] text-center">
          Why ROUTIQ
        </p>

        <h2 className="text-5xl font-bold text-white text-center mt-4">
          Helping Hotels Grow Smarter
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-[#13233A] rounded-3xl p-8 hover:-translate-y-2 transition duration-300"
              >
                <Icon className="w-10 h-10 text-yellow-400" />

                <h3 className="text-white text-2xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}