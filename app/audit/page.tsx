"use client";
import { formatToolName } from "@/utils/format";
import { generateAudit } from "@/lib/auditEngine";

const mockTools = [
  {
    toolId: "chatgpt",
    plan: "Team",
    monthlySpend: 120,
    seats: 2,
  },

  {
    toolId: "cursor",
    plan: "Business",
    monthlySpend: 200,
    seats: 3,
  },
];

export default function AuditPage() {
  const audit = generateAudit(mockTools);

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
            Audit Results
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Potential Savings: ${audit.totalMonthlySavings}/mo
          </h1>

          <p className="mt-4 text-zinc-400">
            Estimated annual savings: $
            {audit.totalAnnualSavings}
          </p>
          {audit.totalMonthlySavings > 100 && (
  <div className="mt-6 rounded-2xl border border-green-500/30 bg-green-500/10 p-6">
    <p className="text-lg font-semibold text-green-400">
      You may qualify for discounted AI infrastructure credits.
    </p>

    <p className="mt-2 text-zinc-300">
      Teams with high AI spend can often reduce costs further through
      infrastructure credit marketplaces like Credex.
    </p>
  </div>
)}
        </div>

        <div className="mt-10 grid gap-6">
          {audit.recommendations.map((rec) => (
            <div
              key={formatToolName(rec.tool)}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-semibold capitalize">
                    {formatToolName(rec.tool)}
                  </h2>

                  <p className="mt-2 text-zinc-400">
                    {rec.reason}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-zinc-400">
                    Current Spend
                  </p>

                  <p className="text-2xl font-bold">
                    ${rec.currentSpend}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-xl bg-black p-4">
                <div>
                  <p className="text-sm text-zinc-400">
                    Recommendation
                  </p>

                  <p className="font-semibold">
                    {rec.recommendedAction}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-zinc-400">
                    Savings
                  </p>

                  <p className="text-2xl font-bold text-green-400">
                    ${rec.estimatedSavings}/mo
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}