type Lead = {
  status: string;
};

export default function DashboardCards({
  leads,
}: {
  leads: Lead[];
}) {
  const total = leads.length;

  const newLeads = leads.filter(
    (lead) => lead.status === "New"
  ).length;

  const contacted = leads.filter(
    (lead) => lead.status === "Contacted"
  ).length;

  const clients = leads.filter(
    (lead) => lead.status === "Client"
  ).length;

  const cards = [
    {
      title: "Total Leads",
      value: total,
      icon: "📋",
      color: "text-yellow-400",
    },
    {
      title: "New Leads",
      value: newLeads,
      icon: "🆕",
      color: "text-green-400",
    },
    {
      title: "Contacted",
      value: contacted,
      icon: "📞",
      color: "text-blue-400",
    },
    {
      title: "Clients",
      value: clients,
      icon: "🏨",
      color: "text-purple-400",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-[#13233A] rounded-2xl p-6 shadow-lg border border-[#223754] hover:scale-105 transition"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400">
                {card.title}
              </p>

              <h2
                className={`text-4xl font-bold mt-3 ${card.color}`}
              >
                {card.value}
              </h2>
            </div>

            <div className="text-5xl">
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}