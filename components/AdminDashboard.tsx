"use client";

import { useMemo, useState } from "react";
import DashboardCards from "./DashboardCards";
import LeadsTable from "./LeadsTable";
import SearchBar from "./SearchBar";
import ExportCSVButton from "./ExportCSVButton";

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

export default function AdminDashboard({
  leads,
}: {
  leads: Lead[];
}) {
  const [leadList, setLeadList] = useState(leads);
  const [search, setSearch] = useState("");

  const filteredLeads = useMemo(() => {
    const term = search.toLowerCase();

    return leadList.filter((lead) =>
      [
        lead.hotel_name,
        lead.owner_name,
        lead.email,
        lead.city,
      ]
        .join(" ")
        .toLowerCase()
        .includes(term)
    );
  }, [search, leadList]);

  function removeLead(id: number) {
    setLeadList((prev) => prev.filter((lead) => lead.id !== id));
  }

  function updateLeadStatus(id: number, status: string) {
    setLeadList((prev) =>
      prev.map((lead) =>
        lead.id === id
          ? { ...lead, status }
          : lead
      )
    );
  }

  return (
    <>
      <DashboardCards leads={filteredLeads} />

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Hotel Leads
        </h2>

        <ExportCSVButton leads={filteredLeads} />
      </div>

      <div className="my-8">
        <SearchBar
          value={search}
          onChange={setSearch}
        />
      </div>

      <LeadsTable
        leads={filteredLeads}
        onDelete={removeLead}
        onStatusChange={updateLeadStatus}
      />
    </>
  );
}