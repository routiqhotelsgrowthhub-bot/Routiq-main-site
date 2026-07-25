"use client";

type Lead = {
  hotel_name: string;
  owner_name: string;
  email: string;
  phone: string;
  city: string;
  rooms: number;
  status: string;
};

export default function ExportCSVButton({
  leads,
}: {
  leads: Lead[];
}) {
  const exportCSV = () => {
    const headers = [
      "Hotel",
      "Owner",
      "Email",
      "Phone",
      "City",
      "Rooms",
      "Status",
    ];

    const rows = leads.map((lead) => [
      lead.hotel_name,
      lead.owner_name,
      lead.email,
      lead.phone,
      lead.city,
      lead.rooms,
      lead.status,
    ]);

    const csv =
      [headers, ...rows]
        .map((row) => row.join(","))
        .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "routiq-leads.csv";

    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={exportCSV}
      className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl"
    >
      📥 Export CSV
    </button>
  );
}