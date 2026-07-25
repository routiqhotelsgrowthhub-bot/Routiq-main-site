import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";
console.log("Service key exists:", !!process.env.SUPABASE_SERVICE_ROLE_KEY);
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