import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { data, error } = await supabaseAdmin
      .from("audits")
      .insert([
        {
          team_size: body.teamSize,
          use_case: body.useCase,
          total_monthly_savings: body.monthlySavings,
          total_annual_savings: body.annualSavings,
          summary: body.summary,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error(error);

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to save audit" },
      { status: 500 }
    );
  }
}