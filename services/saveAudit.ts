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
  const response = await fetch("/api/save-audit", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error("Failed to save audit");
  }

  return response.json();
}