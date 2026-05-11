"use client";
import { formatToolName } from "@/utils/format";
import { generateAudit } from "@/lib/auditEngine";
import { useEffect, useState } from "react";
import LeadCaptureForm from "@/components/form/LeadCaptureForm";
import { saveAudit } from "@/services/saveAudit";

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
  const [summary, setSummary] = useState("");
  const [auditId, setAuditId] = useState("");
useEffect(() => {
  async function fetchSummary() {
    try {
      const response = await fetch("/api/summary", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          savings: audit.totalMonthlySavings,
        }),
      });

      const data = await response.json();

      setSummary(data.summary);
      const savedAudit = await saveAudit({
  teamSize: 5,
  useCase: "coding",
  monthlySavings: audit.totalMonthlySavings,
  annualSavings: audit.totalAnnualSavings,
  summary: data.summary,
});

setAuditId(savedAudit.id);
    } catch {
  // silently fail for demo build
}
  }

  fetchSummary();
}, [audit.totalMonthlySavings]);
  return (
    <main className="min-h-screen bg-black px-4 py-12 text-white sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
            Audit Results
          </p>

          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">
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
<div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
  <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
    AI Generated Summary
  </p>

  <p className="mt-4 text-lg leading-relaxed text-zinc-300">
    {summary ? (
  summary
) : (
  <span className="animate-pulse text-zinc-500">
    Generating personalized audit summary...
  </span>
)}
  </p>
</div>
{auditId && (
  <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
      Shareable Report
    </p>

    <a
      href={`/audit/${auditId}`}
      className="mt-3 block text-blue-400 underline"
    >
      View Public Audit Report
    </a>
  </div>
)}
<LeadCaptureForm />
 </div>

        <div className="mt-10 grid gap-6">
          {audit.recommendations.map((rec) => (
            <div
              key={formatToolName(rec.tool)}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-2xl"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
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

              <div className="mt-6 flex flex-col gap-4 rounded-xl bg-black p-4 sm:flex-row sm:items-center sm:justify-between">
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