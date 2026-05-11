import { supabase } from "@/lib/supabase";

interface SaveAuditInput {
  teamSize: number;
  useCase: string;
  monthlySavings: number;
  annualSavings: number;
  summary: string;
}

export async function saveAudit(
  input: SaveAuditInput
) {
  console.log("SAVE AUDIT INPUT:", input);

  const response = await supabase
    .from("audits")
    .insert([
      {
        team_size: input.teamSize,
        use_case: input.useCase,
        total_monthly_savings: input.monthlySavings,
        total_annual_savings: input.annualSavings,
        summary: input.summary,
      },
    ])
    .select()
    .single();

  console.log("SUPABASE RESPONSE:", response);

  if (response.error) {
    throw response.error;
  }

  return response.data;
}