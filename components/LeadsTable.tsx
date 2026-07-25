"use client";

import { useRouter } from "next/navigation";
import DeleteButton from "./DeleteButton";

type Lead = {
  id: number;
  hotel_name: string;
  owner_name: string;
  email: string;
  phone: string;
  city: string;
  rooms: number;
  status: string;
};

export default function LeadsTable({
  leads,
}: {
  leads: Lead[];
}) {
  const router = useRouter();

  async function updateStatus(id: number, status: string) {
    const res = await fetch("/api/update-status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        status,
      }),
    });

    const result = await res.json();

    if (result.success) {
      router.refresh();
    } else {
      alert(result.error);
    }
  }

  return (
    <div className="bg-[#13233A] rounded-2xl shadow-xl border border-[#223754] overflow-hidden">

      <div className="flex justify-between items-center px-6 py-5 border-b border-[#223754]">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Hotel Leads
          </h2>

          <p className="text-gray-400 mt-1">
            Manage all customer enquiries
          </p>
        </div>

        <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold">
          {leads.length} Leads
        </span>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#1B2D48]">

            <tr>
              <th className="text-left p-4">Hotel</th>
              <th className="text-left p-4">Owner</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Phone</th>
              <th className="text-left p-4">City</th>
              <th className="text-left p-4">Rooms</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Actions</th>
            </tr>

          </thead>

          <tbody>

            {leads.length > 0 ? (

              leads.map((lead, index) => (

                <tr
                  key={lead.id}
                  className={`border-t border-[#223754] hover:bg-[#1B2D48] transition ${
                    index % 2 === 0 ? "bg-[#13233A]" : "bg-[#102036]"
                  }`}
                >

                  <td className="p-4 font-semibold">
                    {lead.hotel_name}
                  </td>

                  <td className="p-4">
                    {lead.owner_name}
                  </td>

                  <td className="p-4">
                    {lead.email}
                  </td>

                  <td className="p-4">
                    {lead.phone}
                  </td>

                  <td className="p-4">
                    {lead.city}
                  </td>

                  <td className="p-4">
                    {lead.rooms}
                  </td>

                  <td className="p-4">
                    <select
                      value={lead.status}
                      onChange={(e) =>
                        updateStatus(lead.id, e.target.value)
                      }
                      className="bg-[#08111F] border border-[#223754] rounded-lg px-3 py-2 text-white"
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Client">Client</option>
                    </select>
                  </td>

                  <td className="p-4">
                    <DeleteButton id={lead.id} />
                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan={8}
                  className="text-center py-12 text-gray-400"
                >
                  No leads found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}