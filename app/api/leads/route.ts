import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Received Lead:", body);

    // Save lead to Supabase
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

    console.log("Lead inserted successfully:", data);

    // Send Email Notification
    const { data: emailData, error: emailError } =
      await resend.emails.send({
        from: "ROUTIQ <onboarding@resend.dev>",
        to: ["routiqhotelsgrowthhub@gmail.com"],
        subject: `🚀 New Hotel Growth Audit - ${body.hotel_name}`,
        html: `
          <div style="font-family:Arial,sans-serif;padding:20px">

            <h2 style="color:#d4af37;">
              New Hotel Growth Audit Submission
            </h2>

            <table
              cellpadding="10"
              cellspacing="0"
              border="1"
              style="border-collapse:collapse;width:100%;max-width:700px;"
            >

              <tr>
                <td><strong>Hotel Name</strong></td>
                <td>${body.hotel_name}</td>
              </tr>

              <tr>
                <td><strong>Owner Name</strong></td>
                <td>${body.owner_name}</td>
              </tr>

              <tr>
                <td><strong>Email</strong></td>
                <td>${body.email}</td>
              </tr>

              <tr>
                <td><strong>Phone</strong></td>
                <td>${body.phone}</td>
              </tr>

              <tr>
                <td><strong>City</strong></td>
                <td>${body.city}</td>
              </tr>

              <tr>
                <td><strong>Rooms</strong></td>
                <td>${body.rooms}</td>
              </tr>

              <tr>
                <td><strong>Property Type</strong></td>
                <td>${body.property_type}</td>
              </tr>

              <tr>
                <td><strong>Website</strong></td>
                <td>${body.website || "N/A"}</td>
              </tr>

              <tr>
                <td><strong>Preferred Contact</strong></td>
                <td>${body.preferred_contact}</td>
              </tr>

            </table>

            <h3 style="margin-top:25px;">Business Challenge</h3>

            <p>${body.challenge}</p>

            <hr />

            <p>
              <strong>Submitted via ROUTIQ Hotel Growth Hub</strong>
            </p>

          </div>
        `,
      });

    if (emailError) {
      console.error("Resend Error:", emailError);

      return NextResponse.json(
        {
          success: false,
          error: emailError.message,
        },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", emailData);

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully.",
      data,
    });

  } catch (err) {
    console.error("Server Error:", err);

    return NextResponse.json(
      {
        success: false,
        error:
          err instanceof Error
            ? err.message
            : "Unknown server error",
      },
      { status: 500 }
    );
  }
}