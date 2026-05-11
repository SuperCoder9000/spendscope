import { NextResponse } from "next/server";
import { generateAISummary } from "@/services/aiSummary";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const summary = await generateAISummary(
      body.savings
    );

    return NextResponse.json({
      summary,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to generate summary",
      },
      {
        status: 500,
      }
    );
  }
}