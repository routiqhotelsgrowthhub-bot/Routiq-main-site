import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Received:", body);

    const { data, error } = await supabaseServer
      .from("leads")
      .insert([
        {
          hotel_name: body.hotel_name,
          owner_name: body.owner_name,
          email: body.email,
          phone: body.phone,
          city: body.city,
          rooms: body.rooms,
          property_type: body.property_type,
          website: body.website,
          challenge: body.challenge,
          preferred_contact: body.preferred_contact,
          status: "New",
        },
      ])
      .select();

    if (error) {
      console.error("Supabase Error:", error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 }
      );
    }

    console.log("Inserted:", data);


    // Send email notification
    await resend.emails.send({
      from: "ROUTIQ <onboarding@resend.dev>",
      to: "your-email@example.com",
      subject: "🚀 New Hotel Growth Audit Submission",
      html: `
        <h2>New Hotel Lead Received</h2>

        <p><strong>Hotel Name:</strong> ${body.hotel_name}</p>
        <p><strong>Owner Name:</strong> ${body.owner_name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>City:</strong> ${body.city}</p>
        <p><strong>Rooms:</strong> ${body.rooms}</p>
        <p><strong>Property Type:</strong> ${body.property_type}</p>
        <p><strong>Website:</strong> ${body.website}</p>

        <h3>Challenge</h3>
        <p>${body.challenge}</p>

        <p><strong>Preferred Contact:</strong> ${body.preferred_contact}</p>
      `,
    });


    return NextResponse.json({
      success: true,
      data,
    });

  } catch (err) {
    console.error("Server Error:", err);

    return NextResponse.json(
      {
        success: false,
        error: String(err),
      },
      { status: 500 }
    );
  }
}