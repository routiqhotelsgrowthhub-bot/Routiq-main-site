"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({
  id,
}: {
  id: number;
}) {
  const router = useRouter();

  async function deleteLead() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this lead?"
    );

    if (!confirmed) return;

    try {
      const res = await fetch("/api/delete-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      console.log("Response Status:", res.status);

      const result = await res.json();

      console.log("Delete API Response:", result);

      if (result.success) {
        alert("Lead deleted successfully!");
        window.location.reload();
      } else {
        alert("Delete failed: " + result.error);
      }
    } catch (err) {
      console.error("Delete Error:", err);
      alert("Something went wrong while deleting the lead.");
    }
  }

  return (
    <button
      onClick={deleteLead}
      className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition"
    >
      Delete
    </button>
  );
}