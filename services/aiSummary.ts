import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateAISummary(
  savings: number
) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",

      messages: [
        {
          role: "system",
          content:
            "You are an AI infrastructure cost optimization assistant helping startups reduce overspending on AI tools.",
        },

        {
          role: "user",
          content: `Generate a short professional audit summary for a startup that could save approximately $${savings} per month on AI tooling costs.`,
        },
      ],
    });

    return (
      completion.choices[0].message.content ||
      fallbackSummary(savings)
    );
  } catch {
  return fallbackSummary(savings);
}
}

function fallbackSummary(savings: number) {
  return `Your AI tooling stack shows optimization opportunities that could reduce costs by approximately $${savings} per month while maintaining similar productivity and collaboration capabilities.`;
}