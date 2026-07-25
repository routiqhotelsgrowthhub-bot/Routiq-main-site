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

    const res = await fetch("/api/delete-lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const result = await res.json();

    if (result.success) {
      router.refresh();
    } else {
      alert(result.error);
    }
  }

  return (
    <button
      onClick={deleteLead}
      className="bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded-lg"
    >
      Delete
    </button>
  );
}