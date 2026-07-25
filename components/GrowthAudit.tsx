"use client";

import { useState } from "react";

export default function GrowthAudit() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    hotelName: "",
    ownerName: "",
    email: "",
    phone: "",
    city: "",
    rooms: "",
    website: "",
    challenge: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hotel_name: formData.hotelName,
          owner_name: formData.ownerName,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          rooms: Number(formData.rooms),
          property_type: "Hotel",
          website: formData.website,
          challenge: formData.challenge,
          preferred_contact: "Phone",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage("✅ Thank you! Your Growth Audit request has been submitted successfully.");

        setFormData({
          hotelName: "",
          ownerName: "",
          email: "",
          phone: "",
          city: "",
          rooms: "",
          website: "",
          challenge: "",
        });
      } else {
        setMessage("❌ " + result.error);
      }
    } catch {
      setMessage("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <section
      id="audit"
      className="bg-[#08111F] py-24 text-white"
    >
      <div className="max-w-5xl mx-auto px-8">

        <div className="text-center">

          <span className="text-yellow-400 uppercase tracking-[5px]">
            Free Growth Audit
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Let's Grow Your Hotel
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Complete this short form and our team will analyse your hotel's
            online presence and prepare a personalised growth strategy.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#13233A] rounded-3xl p-10 mt-14 border border-[#223754] shadow-xl grid md:grid-cols-2 gap-6"
        >

          <input
            required
            name="hotelName"
            placeholder="Hotel Name"
            value={formData.hotelName}
            onChange={handleChange}
            className="bg-[#08111F] rounded-xl p-4 outline-none border border-transparent focus:border-yellow-400"
          />

          <input
            required
            name="ownerName"
            placeholder="Owner Name"
            value={formData.ownerName}
            onChange={handleChange}
            className="bg-[#08111F] rounded-xl p-4 outline-none border border-transparent focus:border-yellow-400"
          />

          <input
            required
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="bg-[#08111F] rounded-xl p-4 outline-none border border-transparent focus:border-yellow-400"
          />

          <input
            required
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-[#08111F] rounded-xl p-4 outline-none border border-transparent focus:border-yellow-400"
          />

          <input
            required
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="bg-[#08111F] rounded-xl p-4 outline-none border border-transparent focus:border-yellow-400"
          />

          <input
            required
            type="number"
            name="rooms"
            placeholder="Number of Rooms"
            value={formData.rooms}
            onChange={handleChange}
            className="bg-[#08111F] rounded-xl p-4 outline-none border border-transparent focus:border-yellow-400"
          />

          <input
            name="website"
            placeholder="Website (Optional)"
            value={formData.website}
            onChange={handleChange}
            className="md:col-span-2 bg-[#08111F] rounded-xl p-4 outline-none border border-transparent focus:border-yellow-400"
          />

          <textarea
            required
            rows={5}
            name="challenge"
            placeholder="Tell us about your biggest challenge..."
            value={formData.challenge}
            onChange={handleChange}
            className="md:col-span-2 bg-[#08111F] rounded-xl p-4 outline-none border border-transparent focus:border-yellow-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Get My Free Growth Audit"}
          </button>

          {message && (
            <div className="md:col-span-2 text-center text-lg mt-2">
              {message}
            </div>
          )}

        </form>

      </div>
    </section>
  );
}