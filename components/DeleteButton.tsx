"use client";

export default function DeleteButton({
  id,
  onDelete,
}: {
  id: number;
  onDelete: (id: number) => void;
}) {
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

      const result = await res.json();

      if (result.success) {
        onDelete(id);
      } else {
        alert(result.error);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to delete lead.");
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